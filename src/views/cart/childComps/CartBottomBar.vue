<template>
  <div class="bottom-bar">
    <div class="check-bar">
      <check-button class="check-btn" :is-color="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="check-num">
      <span>合计:{{totalPrice}}</span>
      <span></span>
    </div>
    <div class="check-com">
      <span @click="clickCmd">去计算({{checkLength}})</span>
    </div>
  </div>
</template>
<script>
import checkButton from "../../../components/content业务/checkButton.vue";
import {mapGetters} from 'vuex'
export default {
  name: "cartBottomBar",
  components: {
    checkButton
  },
  computed:{
       ...mapGetters(["cartList"]),
      totalPrice(){
          return '￥' + this.cartList.filter(item => {
              return item.checked
          }).reduce((preValue,item) => {
              return  preValue + item.price * item.count
          },0).toFixed(2)
      },
      checkLength(){
          return this.cartList.filter(item =>{
              return item.checked
          }).reduce((preValue,item) => {
              return preValue + item.count
          },0)
      },
        isSelectAll(){
            if(this.cartList.length===0){
                return false
            }

            return !this.cartList.find(item => !item.checked)
        }  
  } ,
  methods:{
    checkClick(){
      if(this.isSelectAll){
        //全部选中
        this.cartList.forEach(item => item.checked = false)
      }
      else{
        this.cartList.forEach(item => item.checked =true)
      }
    },
    clickCmd(){
      // if(!this.isSelectAll){
      // this.$toast.show('请选中商品后进行计算')

      // }
      if(this.checkLength == 0){
      this.$toast.show('请选中商品后进行计算')

      }
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 49px;
  height: 44px;
  width: 100%;
  background-color: rgb(245, 243, 243);
  line-height: 44px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  box-shadow: 0px -1px 3px rgb(173, 171, 171);
}
.check-bar {
  display: flex;
  justify-content: left;
  /* align-items: center; */
}
.check-btn {
  /* height: 44px; */
}
.check-num {
}
.check-com {
    background-color:red ;
}
</style>