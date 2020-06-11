<template>
  <div id="shop-item">
      <div class="checkBtn">
          <check-button :is-color="itemInfo.checked"  @click.native="checkBtns" ></check-button>
      </div>
    <div class="info-img">
      <img :src="itemInfo.image" alt="商品图片"  />
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="price">￥{{itemInfo.price}}</div>
        <div class="count">{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import checkButton from "../../../components/content业务/checkButton.vue";
export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
 
  components: {
    checkButton
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  methods:{
      checkBtns(){
          this.itemInfo.checked = !this.itemInfo.checked
          console.log("___")
      }
  }
};
</script>
<style scoped>
#shop-item {
  position: relative;
  border-bottom: 1px solid pink;
}

.checkBtn{
    position: absolute;
    top: 35px;
    left: 3px;
    /* padding-right:20px ; */
}

.info-img {
  display: inline-block;
  position: relative;
  height: 150px;
  width: 100px;
  left: 30px;
  padding: 10px 10px 10px 0px;
}
.info-img img {
  width: 100%;
  height: 100%;
  position: relative;

  /* left: 10%; */
  border-radius: 8px;
}
.item-info {
  /* float: right; */
  position: absolute;
  top: 10px;
  left: 40%;
  right: 0;
}
.item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price {
  color: rgb(250, 11, 51);
  position: relative;
  top: 60px;
}
.count {
  position: relative;
  top: 50px;
  left: 200px;
}
</style>