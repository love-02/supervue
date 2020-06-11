<template>
  <div id="home">
    <nav-bar-vue class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar-vue>
    <tab-control
      @tabClick="tabClick"
      :titles="['流行','新款','精选']"
      ref="tabControl1"
      :class="{isTaber:isTabFixed}"
      v-show="isTabFixed"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      @loadScroll="loadMore"
      :probe-type="3"
      @scroll="scrollClick"
      :pull-up-load="true"
    >
      <home-swiper-vue @swiperLoadImage="swiperLoadImage" :banners="banners"></home-swiper-vue>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control @tabClick="tabClick" :titles="['流行','新款','精选']" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTop"></back-top>
  </div>
</template>
<script>
import homeSwiperVue from "./childComps/homeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBarVue from "../../components/common逻辑/navbar/NavBar.vue";
import TabControl from "../../components/content业务/tabControl/TabControl.vue";
import GoodsList from "../../components/content业务/goods/GoodsList.vue";
import Scroll from "../../components/common逻辑/scroll/Scroll.vue";
import BackTop from "../../components/content业务/backTo/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "Home",
  components: {
    homeSwiperVue,
    RecommendView,
    FeatureView,
    NavBarVue,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false
    };
  },
  created() {
    //1请求多个数据
    this.getHomeMultidata();
    //2 请求商品数据
    this.getHomeGoods("pop", 1);
    this.getHomeGoods("new", 1);
    this.getHomeGoods("sell", 1);
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },

  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
      this.isBackTop = false
    },
    //事件监听相关的方法
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 0);
    },
    loadMore() {
      this.getHomeGoods(this.currentType);

      this.$refs.scroll.refresh();
    },

    swiperLoadImage() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      //  console.log(this.tabOffsetTop)
    },

    scrollClick(position) {
      // console.log(position)
      this.isBackTop = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>
<style scoped>
#home {
  position: relative;
  height: 92vh;
}

.home-nav {
  background-color: #fb7299;
  color: #ffffff;
}

#home .content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0px;
  /* margin-top: 44px; */
  /* height: 1000px; */
  overflow: hidden;
}
.isTaber {
  position: relative;
  top: 0px;
  left: 0;
  right: 0;
  height: 44;
}
</style>