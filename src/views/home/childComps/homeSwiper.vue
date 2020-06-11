<template>
  <swiper-vue>
    <div class="swiper-slide" :key="banner" v-for="banner in banners">
      <a :href="banner.link">
        <img :src="banner.image" @load="swiperLoadImage" />
      </a>
    </div>
  </swiper-vue>
</template>
<script>
import swiperVue from "../../../components/common逻辑/swiper/swiper.vue";

export default {
  name: "homeSwiper",
  components: {
    swiperVue
  },
  data() {
    return {
      isSwiper :true
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    swiperLoadImage() {
      if (this.isSwiper) {
        this.$emit("swiperLoadImage");
        this.isSwiper = false;
      }
    }
  }
};
</script>