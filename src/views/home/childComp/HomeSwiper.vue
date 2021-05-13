<template>
  <!-- 轮播图 -->
  <swiper>
    <!-- 注意！！！！！！！！！！！！！！！！！！ -->
    <!-- 这里只能写成 v-for="(item, index) in banners" :key="index-->
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style lang="">
</style>