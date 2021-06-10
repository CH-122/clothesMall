<template>
  <div class="goods">
    <p class="recommend" v-show="isRecommend">推荐商品</p>
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"
    >
    </goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
    isRecommend: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {},
};
</script>
<style>
.goods {
  display: flex;
  /* 子元素换行 */
  flex-wrap: wrap;
  /* 主轴对齐方式 */
  justify-content: space-around;
  padding: 2px;
}

.g {
  color: antiquewhite;
}
</style>