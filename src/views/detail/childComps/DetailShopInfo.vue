<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt />
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-it shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter?'高':"低"}}</span>
            </td>
          </tr>
        </table>
      </div>
      <div class="detailBtn">
        <button class="btn">进店逛逛</button>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style >
.shop-top {
    position: relative;
  line-height: 120px;
  height: 120px;
  vertical-align: initial;
}
.shop-middle{
    position: relative;
    height:150px;
    /* display: flex; */
}
.shop-middle-item {
  /* width: 200px; */
  position: relative;
}

.shop-middle-left {
  float: left;
}
.shop-top img {
  width: 60px;
  vertical-align: middle;
}
.shop-top .title {
  color: rgb(29, 23, 23);
}

.info-sells,
.info-goods {
  height: 100px;
  width: 100%;
  position: relative;
  line-height: 30px;
  text-align: center;
  left: 15px;
}
.sells-count {
  font-size: 22px;
  height: 30px;
}
.sells-text {
  top: 20px;
  font-size: 12px;
}
.info-goods {
  position: absolute;
  top: 0px;
  left: 100px;
  text-align: center;
  border-right: 1px solid rgb(161, 159, 159);
}
.goods-count {
  font-size: 22px;
}
.goods-text {
  font-size: 12px;
}
.shop-middle-it {
  width: 45%;
}

.shop-middle-right {
  float: right;
}

.score {
  color: green;
}
.score-better {
  color: red;
}
.better {
  width: 1em;
  height: 1em;
  background-color: rgb(133, 211, 16);
  color: white;
}
.better-more {
  width: 1em;
  height: 1em;
  background-color: rgb(250, 38, 38);
  color: white;
}
.detailBtn{
    position: relative;
    top: 110px;
    left: 20%;
}
.btn{
    background-color:#999;
    border: 0px;
    color:black;
}
</style>