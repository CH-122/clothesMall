<template>
  <div>
    <grid-view>
      <div
        class="item"
        v-for="(item, index) in subcategories.list"
        :key="index"
      >
        <a>
          <img class="item-img" :src="item.image" alt="" />
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "../../../components/common/gridView/GridView.vue";

export default {
  name: "TabContentCategory",
  components: {
    GridView,
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.item {
  margin-top: 5px;
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 50%;
  margin-top: 8px;
}

.item-text {
  margin-top: 8px;
}
</style>
