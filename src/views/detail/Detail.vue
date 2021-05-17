<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="DetailNavBar"
    ></detail-nav-bar>
    <div class="wrapper">
      <scroll
        class="content"
        ref="scroll"
        @scroll="contentScroll"
        :probe-type="3"
      >
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info
          :detail-info="detailInfo"
          @imgLoad="imageLoad"
        ></detail-goods-info>
        <detail-param-info
          :param-info="paramInfo"
          ref="param"
        ></detail-param-info>
        <detail-comment-info
          :comment-info="commentInfo"
          ref="comment"
        ></detail-comment-info>
        <goods-list :goods="recommendList" ref="recommend"></goods-list>
      </scroll>
      <detail-bootom-bar @addToCart="addToCart"></detail-bootom-bar>
    </div>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import DetailNavBar from "../detail/childComps/DetailNavBar";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import Scroll from "../../components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import { itemListenerMixin, backTopMixin } from "../../common/mixin";
import DetailBootomBar from "./childComps/DetailBootomBar.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParamInfo,
    Scroll,
    DetailGoodsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBootomBar,
  },
  mixins: [itemListenerMixin, backTopMixin],

  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeY: [],
      currentIndex: 0,
    };
  },

  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);

      // 获取商品详情信息
      this.detailInfo = data.detailInfo;

      // 获取产品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0] || {};
      }

      // 等到上面渲染完
      this.$nextTick(() => {
        this.themeY = [];
        this.themeY.push(0);
        this.themeY.push(this.$refs.param.$el.offsetTop);
        this.themeY.push(this.$refs.comment.$el.offsetTop);
        this.themeY.push(this.$refs.recommend.$el.offsetTop);
      });
    });

    // 请求推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommendList = res.data.list;
      // console.log(this.recommendList);
    });
  },

  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();

      this.themeY = [];
      this.themeY.push(0);
      this.themeY.push(this.$refs.param.$el.offsetTop);
      this.themeY.push(this.$refs.comment.$el.offsetTop);
      this.themeY.push(this.$refs.recommend.$el.offsetTop);
      this.themeY.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeY[index] + 44, 200);
    },
    contentScroll(position) {
      // console.log(position);
      const positionY = -position.y;

      let length = this.themeY.length;
      // 普通做法  占性能
      // for (let i = 0; i < length; i++) {
      //   if (
      //     this.currentIndex !== i &&
      //     ((i < length - 1 &&
      //       positionY >= this.themeY[i] &&
      //       positionY < this.themeY[i + 1]) ||
      //       (i == length - 1 && positionY >= this.themeY[i]))
      //   ) {
      //     // console.log(i);
      //     this.currentIndex = i;
      //     console.log(this.currentIndex);
      //     this.$refs.DetailNavBar.currentIndex = this.currentIndex;
      //   }
      // }
      // console.log(this.themeY[4]);
      // hack做法   占内存
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeY[i] &&
          positionY < this.themeY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.DetailNavBar.currentIndex = this.currentIndex;
        }
      }

      this.isShowBackTop = position.y < -800;
    },
    addToCart() {
      console.log("详情页收到了添加");
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 将商品添加到购物车
    },
  },

  mounted() {},

  updated() {
    // setTimeout(() => {
    // }, 1000);
  },

  destroyed() {
    console.log(1);
    this.$bus.$off("itemImgload", this.itemImgListener);
  },
};
</script>
<style>
#detail {
  position: relative;
  z-index: 99999;
  background-color: #fff;
  height: 100vh;
}

.wrapper {
  height: calc(100% - 44px);
}

.detail-nav {
  position: relative;
  z-index: 99999999;
  background-color: #fff;
}
</style>