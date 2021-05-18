<template>
  <div class="check-button" :class="{ active: isChecked }">
    <img src="../../../assets/img/cart/tick.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.check-button {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
}

.active {
  border-color: rgb(194, 128, 185);
  background-color: rgb(194, 128, 185);
}
.check-button img {
  margin-bottom: 1px;
  margin-left: 1px;
}
</style>