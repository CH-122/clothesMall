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
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      message: "lala",
    };
  },
  mounted() {
    // 使用BScrool创建滚动
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      // observeDOM: true,
      // observeImage: true,
    });

    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("上拉加载更多");
        setTimeout(() => {
          // scroll.finishPullUp();
          this.$emit("pullingUp");
        }, 1000);
      });
    }

    // console.log(this.scroll);
  },
  methods: {
    scrollTo(x, y, time = 600) {
      this.scroll.scrollTo(x, y, time);
    },
    finishFullUp() {
      // 完成获取数据
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      // console.log(111);
    },
  },
};
</script>
<style scoped>
.wrapper {
  /* margin-top: 44px; */
}
</style>