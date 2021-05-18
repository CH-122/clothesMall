<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :isChecked="isSelectAll"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">结算({{ checkLength }})</div>
  </div>
</template>
<script>
import CheckButton from "../../../components/content/ckeeckButton/CheckButton.vue";
export default {
  components: { CheckButton },
  name: "CartBottomBar",
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      // 方案1   性能低
      // return !this.$store.state.cartList.filter((item) => !item.checked).length;
      // 方案2
      return !this.$store.state.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        return this.$store.state.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.$store.state.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择要购买的商品~");
      }
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  background-color: #eee;
  /* padding-top: 10px; */
}

.check-content {
  display: flex;
  align-items: center;
}

.check-button {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
}

.price {
  margin: auto 20px;
  margin-left: 70px;
  font-size: 14px;
}

.calculate {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background-color: red;
  text-align: center;
  line-height: 40px;
  color: #eee;
}
</style>