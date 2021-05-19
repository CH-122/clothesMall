<template>
  <div class="profile">
    <!-- 页头 -->
    <nav-bar class="profile-navbar">
      <div slot="center">个人中心</div>
      <div slot="right">设置</div>
    </nav-bar>

    <!-- login模块 -->
    <login></login>

    <info></info>

    <!-- 功能模块 -->
    <profile-module></profile-module>

    <last-module></last-module>
    <!-- <scroll class="content"> </scroll> -->
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll";
import Login from "./childCops/Login.vue";
import Info from "./childCops/Info.vue";
import ProfileModule from "./childCops/ProfileModule.vue";
import LastModule from "./childCops/LastModule.vue";
export default {
  components: {
    Scroll,
    NavBar,
    Login,
    Info,
    ProfileModule,
    LastModule,
  },
};
</script>

<style  scoped>
.content {
  height: 300px;
  background-color: bisque;
  overflow: hidden;
}

.profile {
  background-color: #eee;
}
</style>