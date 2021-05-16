<template>
  <div class="goods-item">
    <!-- @load用于监听图片是否加载完成 -->
    <img :src="goodsItem.show.img" alt="" @load="imgLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      // console.log("imgLoad finish");
      this.$bus.$emit("itemImgLoad");
    },
  },
};
</script>
<style>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
  background-color: #fff;
  margin-bottom: 5px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  /* 文字溢出显示省略号 */
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>