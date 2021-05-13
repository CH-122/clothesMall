<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">ClothesMall</div>
    </nav-bar>
    <h2>首页</h2>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style>
.home-nav {
  background-color: rgb(211, 143, 169);
  color: #eee;
}
</style>