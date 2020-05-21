<template>
  <div id="home">
    <nav-bar-vue class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar-vue>
    <home-swiper-vue :banners="banners"></home-swiper-vue>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>
<script>
import NavBarVue from "../../components/common逻辑/navbar/NavBar.vue";
import homeSwiperVue from './childComps/homeSwiper.vue';

import { getHomeMultidata } from "network/home";
import RecommendView from './childComps/RecommendView.vue';

export default {
  name: "Home",
  components: {
    NavBarVue,
    homeSwiperVue,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    //1请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>
<style>
.home-nav {
  background-color: #fb7299;
  color: #ffffff;
}
</style>