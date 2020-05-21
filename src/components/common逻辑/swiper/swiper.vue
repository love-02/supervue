<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "SwiperVue",
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        loop: true
        // Some Swiper option/callback...
      }
    };
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper;
  //   }
  // },
  // mounted() {
  //   console.log("Current Swiper instance object", this.swiper);
  //   this.swiper.slideTo(3, 1000, false);
  // }
};
</script>
<style>
.swiper-slide {
    width: 100%;
}
.swiper-slide img{
    width: 100%;

}
</style>