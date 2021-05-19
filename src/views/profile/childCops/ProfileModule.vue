<template>
  <div class="module">
    <module-item :content="message"></module-item>
  </div>
</template>
<script>
import ModuleItem from "./ModuleItem.vue";
export default {
  name: "ProfileModule",
  data() {
    return {
      message: [
        {
          content: "我的消息",
          url: require("../../../assets/img/profile/message.svg"),
        },
        {
          content: "积分商城",
          url: require("../../../assets/img/profile/pointer.svg"),
        },
        {
          content: "会员卡",
          url: require("../../../assets/img/profile/vip.svg"),
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