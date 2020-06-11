<template>
  <swiper>
    <div :key="item" v-for="item in topImages"  class="swiper-slide">
       <img :src="item" alt="">
    </div>
  </swiper>
</template>
<script>
import swiper from "../../../components/common逻辑/swiper/swiper.vue";

export default {
  name: "DetailSwiper",
 props:{
     topImages:{
         type:Array,
         default(){
             return []
         }
     }
 } ,
  components: {
    swiper
  }
};
</script>
<style>
    .swiper-slide{
       height: 300px;
       overflow: hidden; 
    }
</style>