<template>
  <div id="cart">
    <nav-bar class="navBar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "../../components/common逻辑/navbar/NavBar.vue";
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    //两种语法 1数组 2对象 添加计算属性的名称
    ...mapGetters(["cartLength"])
    //   ...mapGetters({
    //       length:'cartLength',
    //       list:'cartList'
    //   })
  }
};
</script>
<style scoped>
/* #cart {
  position: relative;
  height: 50vh;
} */
.navBar {
  background-color: #fb7299;
  color: white;
}
</style>