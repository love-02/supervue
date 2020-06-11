<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <img src="~assets/img/kefu.png" alt />
        <span>客服</span>
      </div>
      <div>
        <img src="~assets/img/shoucang.png" alt />
        <span>收藏</span>
      </div>

      <div>
        <img src="~assets/img/dianpu_.png" alt />
        <span>店铺</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="shop" @click="addCartShop">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addCartShop(){
      this.$emit('addCartShop')
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: white;
}
.bar-item {
  display: flex;
  flex: 1;
}
.bar-item img {
  display: block;
  width: 24px;
  padding-left: 4px;
}
.bar-item div {
  padding: 0 15px 0 15px;
}
.bar-item span {
  position: absolute;
  bottom: 0px;
}
.bar-left {
  float: left;
}
.bar-right {
  float: right;
}
.shop {
  line-height: 49px;
  background-color: yellow;
}
.buy {
    text-align: center;
  line-height: 49px;
  background-color: pink;
}
</style>