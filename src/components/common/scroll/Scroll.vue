<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 使用BScrool创建滚动
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
      click: true,
    });

    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });

    this.scroll.on("pullingUp", () => {
      setTimeout(() => {
        console.log("上拉加载更多");
      }, 2000);
    });
  },
};
</script>
<style scoped>
.wrapper {
  margin-top: 44px;
}
</style>