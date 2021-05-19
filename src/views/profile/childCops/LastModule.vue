<template>
  <div class="module">
    <module-item :content="message"></module-item>
  </div>
</template>
<script>
import ModuleItem from "./ModuleItem.vue";
export default {
  name: "LastModule",
  data() {
    return {
      message: [
        {
          content: "我的购物车",
          url: require("../../../assets/img/profile/message.svg"),
        },
        {
          content: "下载购物APP",
          url: require("../../../assets/img/profile/pointer.svg"),
        },
      ],
    };
  },
  components: {
    ModuleItem,
  },
};
</script>
<style scoped>
.module {
  margin-top: 12px;
  background-color: #fff;
  line-height: 40px;
}
</style>