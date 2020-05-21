<template>
  <div>
    <tab-bar-vue>
      <tab-bar-item-vue path="/home" activeColor="pink">
        <div slot="item-icon" class="iconfont">&#xe650;</div>
        <div slot="item-text">首页</div>
      </tab-bar-item-vue>
      <tab-bar-item-vue path="/category">
        <div slot="item-icon" class="iconfont">&#xe67b;</div>
        <div slot="item-text">分类</div>
      </tab-bar-item-vue>
      <tab-bar-item-vue path="/cart" activeColor="aqua">
        <div slot="item-icon" class="iconfont">&#xe61b;</div>
        <div slot="item-text">购物车</div>
      </tab-bar-item-vue>
      <tab-bar-item-vue path="/profiles">
        <div slot="item-icon" class="iconfont">&#xe61d;</div>
        <div slot="item-text">我的</div>
      </tab-bar-item-vue>
    </tab-bar-vue>
  </div>
</template>
<script>
import TabBarVue from "components/common逻辑/tabbar/TabBar.vue";
import TabBarItemVue from "components/common逻辑/tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBarVue,
    TabBarItemVue
  }
};
</script>