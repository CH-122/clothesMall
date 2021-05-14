<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">ClothesMall</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 推荐栏 -->
    <recommend-view :recommends="recommends"></recommend-view>
    <!-- 本周流行 -->
    <feature-view></feature-view>
    <!-- 标签控制 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control clearfix"
    ></tab-control>
    <!-- 展示栏 -->
    <goods-list :goods="goods['pop'].list"></goods-list>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComp/HomeSwiper.vue";
import RecommendView from "./childComp/RecommendView.vue";
import FeatureView from "./childComp/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  created() {
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop", 1);
    this.getHomeGoods("new", 1);
    this.getHomeGoods("sell", 1);
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
    };
  },
  methods: {
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
      });
    },
  },
};
</script>

<style>
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
  background-color: rgb(211, 143, 169);
  color: #eee;
}
#home {
  padding-top: 44px;
  /* padding-bottom: 1000px; */
  background-color: #eee;
}

.tab-control {
  position: sticky;
  top: 44px;
  /* 解决goodlist覆盖tabControl */
  z-index: 99;
}
</style>