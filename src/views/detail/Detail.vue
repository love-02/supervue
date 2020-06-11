<template>
  <div id="detail">
    <detail-nav-bar @title="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params-info ref="params" :paramInfo="paramInfo"></detail-params-info>
  
    </scroll>
    <back-top @click.native="topClick" v-show="isBackTop"></back-top>
    <detail-bottom-bar @addCartShop="addCartShop"></detail-bottom-bar>
    <toast :message="message" :isToast="isToast"></toast>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import detailBottomBar from "./childComps/detailBottomBar.vue";
import { debounce } from "common/utils";
import BackTop from "../../components/content业务/backTo/BackTop.vue";
import Scroll from "../../components/common逻辑/scroll/Scroll.vue";
import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
import { backTop } from "common/mixin.js";
import {mapActions, mapGetters} from 'vuex'
import Toast from '../../components/common逻辑/toast/Toast.vue';
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    detailBottomBar,
    BackTop,
    Scroll,
Toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      themeTopY: [],
      getThemeTopY: null,
      isBackTop:false,
      currentIndexs: 0,
      message:"",
      isToast:false
    };
  },
  created() {
    //1保存传入的iid
    this.iid = this.$route.params.iid;
    //2根据iid请求详细数据
    getDetail(this.iid).then(res => {
      //1获取顶部图片的轮播数据
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      //  console.log(res)

      //2获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3获取店铺信息
      this.shop = new Shop(data.shopInfo);
      console.log(this.shop);
      //4保存商品的详情数据
      this.detailInfo = data.detailInfo;
      //5请求商品参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //4给getThemeTopY赋值,对给this.themeTopYs赋值的操作进行防抖
      this.getThemeTopY = debounce(() => {
        this.themeTopY.push("0");
        this.themeTopY.push("1000");
        this.themeTopY.push("2000");
        this.themeTopY.push(3000);
        // console.log(this.themeTopY[index])
      });
    });
  },
  updated() {},
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 300);
    },
    contentScroll(position) {
      // console.log(position)
      const positionY = -position.y;
      this.isBackTop = positionY > 1000;
      let length = this.themeTopY.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndexs !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopY[i] &&
            positionY < this.themeTopY[i + 1]) ||
            (i == length - 1 && positionY >= this.themeTopY[i]))
        ) {
          this.currentIndexs = i;
          this.$bus.$emit("detailClick", i);
        }
      }
    },
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    addCartShop() {
      //1获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      console.log(product)
      //2将商品添加到购物车里
      // this.$store.commit("addCart", product);
      // this.$store.dispatch('addCart',product)
      this.addCart(product).then(res => {
        // this.message=res;
        // this.isToast = true
        // setTimeout(()=>{
        //   this.isToast=false
        // },1500)
       
       this.$toast.show(res)
      })
    }
  }
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 100;
  background-color: white;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0px;
  /* margin-top: 44px; */
  /* height: 1000px; */
  overflow: hidden;
  /* padding-bottom:49px ; */
}
</style>