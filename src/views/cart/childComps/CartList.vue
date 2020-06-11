<template>
  <div class="listBar">
    <scroll class="center" ref="scroll">
      <cart-list-item
      v-for="(item,index) in cartList" :key="index" :item-info ='item'
      ></cart-list-item>
   
    </scroll>
  </div>
</template>
<script>
import Scroll from "../../../components/common逻辑/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
};
</script>
<style scoped>
.listBar {
  position: relative;
  height: 94vh;
}
.center {
  position: absolute;
  top:0px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>