<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>

      <scroll id="tab-content">
        <div>
          <tab-content-category
            :subcategories="showSubcategory"
          ></tab-content-category>
          <tab-control :titles="['综合', '新品', '销量']"></tab-control>
          <!-- <tab-content-detail></tab-content-detail> -->
        </div>
      </scroll>
    </div>
  </div>
</template>
<script>
import Scroll from "../../components/common/scroll/Scroll";
import NavBar from "../../components/common/navbar/NavBar.vue";
import TabContentCategory from "./childComps/TabContentCategory.vue";
import { getCategory, getSubcategory } from "../../network/category";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import TabMenu from "./childComps/TabMenu.vue";
export default {
  components: { NavBar, TabContentCategory, TabControl, TabMenu, Scroll },
  data() {
    return {
      categories: [],
      scroll: null,
      probeType: 0,
      currentIndex: -1,
      categoryData: {},
    };
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      console.log(this.categoryData[this.currentIndex].subcategories);
      return this.categoryData[this.currentIndex].subcategories;
    },
  },
  mounted() {},
  methods: {
    /* 
    网络请求方法
    */
    getCategory() {
      getCategory().then((res) => {
        console.log(res);
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
          };
        }
        // 3.请求第一个分类的数据
        this.getSubcategories(0);
      });
    },

    getSubcategories(index) {
      this.currentIndex = index;
      const maitKey = this.categories[this.currentIndex].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
      });
    },

    /* 
      事件方法
    */
    selectItem(index) {
      this.getSubcategories(index);
    },
  },
  created() {
    this.getCategory();
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.nav-bar {
  background-color: rgb(130, 116, 236);
  color: #fff;
  overflow: hidden;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  display: flex;
}

#tab-content {
  height: 100%;
  flex: 1;
}
</style>