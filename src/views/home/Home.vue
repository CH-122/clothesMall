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
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComp/HomeSwiper.vue";
import RecommendView from "./childComp/RecommendView.vue";

import { getHomeMultidata } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
};
</script>

<style>
.home-nav {
  background-color: rgb(211, 143, 169);
  color: #eee;
}
</style>