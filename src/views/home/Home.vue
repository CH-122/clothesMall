<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">ClothesMall</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 推荐栏 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周流行 -->
      <feature-view></feature-view>
      <!-- 标签控制 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
        v-show="isShow"
      ></tab-control>
      <!-- 展示栏 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 返回顶部 -->
    <!-- <div @click="backClick"><back-top></back-top></div>    以前的做法 -->
    <!-- 加上.native就可以监听组件啦  vue3废弃了这个属性 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll";

import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComp/HomeSwiper.vue";
import RecommendView from "./childComp/RecommendView.vue";
import FeatureView from "./childComp/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
import { itemListenerMixin, backTopMixin } from "../../common/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  created() {
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop", 1);
    this.getHomeGoods("new", 1);
    this.getHomeGoods("sell", 1);
    // 监听item中的图片加载完成
  },
  mixins: [itemListenerMixin, backTopMixin],
  mounted() {
    // 组件属性$el，用于获取组件中的元素
    setTimeout(() => {
      console.log(this.$refs.tabControl2.$el.offsetTop);
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }, 100);
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      taboffsetTop: 0,
      isTabFixed: false,
      isShow: true,
    };
  },
  methods: {
    /* 
      网络请求方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // 变量时，不能跟.变量   要[变量]
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 多次加载
        this.$refs.scroll.scroll.finishPullUp();
      });
    },

    /* 
      事件监听方法
    */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    contentScroll(position) {
      this.isShowBackTop = position.y < -800;

      //
      this.isTabFixed = -position.y > this.taboffsetTop - 44;
      this.isShow = -position.y < this.taboffsetTop - 44;
    },
    loadMore() {
      // console.log("loadmore");
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  destroyed() {
    console.log("home destoryed");
  },
  // 被keep-alive包裹的组件停止使用时调用
  deactivated() {
    // console.log(2);
    // 取消全局事件的监听
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
.home-nav {
  /* scoped   css只会对当前组件起效果 */
  /* position: fixed; */
  /* top: 0;
  left: 0;
  right: 0; */
  position: relative;
  z-index: 9999999;
  background-color: rgb(211, 143, 169);
  color: #eee;
}
#home {
  /* padding-top: 44px; */
  /* padding-bottom: 1000px; */
  background-color: #eee;
  /* vh视口高度 */
  height: 100vh;
}

.tab-control {
  /* position: sticky; */
  /* top: 44px; */
  /* 解决goodlist覆盖tabControl */
  z-index: 99;
  position: relative;
  /* top: 44px; */
}

.content {
  height: calc(100vh - 93px);
  /* overflow: hidden; */
}
</style>