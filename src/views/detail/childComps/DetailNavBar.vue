<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="" />
      </div>

      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index == currentIndex }"
          @click="itemClick(index)"
        >
          <!--注意上面传index -->
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      // this.$router.go(-1);
      this.$router.back();
    },
  },
};
</script>
<style>
.back img {
  margin-top: 12px;
  margin-left: 20px;
}
.title {
  display: flex;
  font-size: 14px;
  color: #777;
}
.title-item {
  flex: 1;
}

.active {
  color: pink;
}
</style>