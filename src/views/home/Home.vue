<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">ClothesMall</div>
    </nav-bar>
    <h2>首页</h2>
    <p>{{ recommends }}</p>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "@/network/home";
export default {
  name: "Home",
  components: {
    NavBar,
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
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