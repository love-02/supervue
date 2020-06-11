<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="gooos-info">
    <div class="info-desc clearfix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
        alt
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  methods: {
    imgLoad() {
      
        this.$emit("imageLoad") 

    }
  },
  watch: {
    datailInfo() {
      //获取图片的个数
      this.imagesLength = this.detailInfo.detaiImage[0].list.length;

    }
  }
};
</script>
<style scoped>
.info-list img {
  width: 100%;
}
</style>