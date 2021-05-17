import { debounce } from "./utils";
import BackTop from '../components/content/backTop/BackTop'
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 300);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgload", this.itemImgListener);
    // console.log('mixin');
  },
}


export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      console.log("backtop");
      this.$refs.scroll.scrollTo(0, 0, 600);
      // console.log(this.$refs.scroll.message);
    },
  },

}




