<template>
  <div>
    <div
      v-for="(item, index) in content"
      :key="index"
      class="item"
      @click="itemClick(item.id)"
    >
      <img :src="item.url" alt="" />
      <span>{{ item.content }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModuleItem",
  props: {
    content: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(id) {
      if (id == "cart") {
        // console.log(111);
        this.$router.push("/shopcart");
      }
    },
  },
};
</script>
<style scoped>
.item {
  border-bottom: 1px solid #eee;
}

.item img {
  margin-left: 10px;
  height: 20px;
  vertical-align: sub;
}

.item span {
  padding-left: 10px;
}
</style>