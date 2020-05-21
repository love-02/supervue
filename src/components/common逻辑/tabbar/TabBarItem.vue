<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  :style="activeStyle">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
     // isActive: false
    };
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      // if (this.$route.path != this.path) {
      //   this.$router.replace(this.path);
      // }
         this.$router.replace(this.path);

    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
@font-face {
  font-family: "iconfont";
  src: url("assets/iconfont/iconfont.eot");
  src: url("assets/iconfont/iconfont.eot?#iefix")
      format("embedded-opentype"),
    url("assets/iconfont/iconfont.woff2") format("woff2"),
    url("assets/iconfont/iconfont.woff") format("woff"),
    url("assets/iconfont/iconfont.ttf") format("truetype"),
    url("assets/iconfont/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 3px 0 2px 0;
}

</style>