<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center" class="center">购物车({{ cartLength }})</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CartList from "./CartList.vue";
export default {
  name: "ShopCartNavBar",
  components: { NavBar, CartList },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>
<style>
.navbar {
  background-color: darkkhaki;
  color: #eee;
}
</style>