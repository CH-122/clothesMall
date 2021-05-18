<template>
  <div class="shop-cart">
    <shop-cart-nav-bar></shop-cart-nav-bar>
    <scroll class="wrapper" ref="scroll">
      <cart-list class="cart-list"> </cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import Scroll from "../../components/common/scroll/Scroll.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";
import CartList from "./childComps/CartList.vue";
import ShopCartNavBar from "./childComps/ShopCartNavBar.vue";

export default {
  name: "ShopCart",
  components: { ShopCartNavBar, Scroll, CartList, CartBottomBar },
  computed: {},
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.shop-cart {
  height: 100vh;
}

.wrapper {
  height: calc(100% - 93px - 40px);
  overflow: hidden;
}
</style>