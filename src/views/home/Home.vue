<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">ClothesMall</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComp/HomeSwiper.vue";

import { getHomeMultidata } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
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