<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style>
.tab-control {
  background-color: #fff;
  display: flex;
}
.tab-control-item {
  flex: 1;
  display: block;
  height: 40px;
  line-height: 44px;
  text-align: center;
  font-size: 15px;
}

/* .tab-control-item span:hover {
  border-bottom: 2px solid pink;
  padding-bottom: 3px;
  color: pink;
} */

.active span {
  border-bottom: 2px solid pink;
  padding-bottom: 3px;
  color: pink;
}
</style>