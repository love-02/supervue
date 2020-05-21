<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar-vue>

    </main-tab-bar-vue>
  </div>
</template>

<script>

import MainTabBarVue from '../../../vue-cli/cli2的使用/tabbar/src/components/main/MainTabBar.vue';


export default {
  name: "App",
  components: {
  MainTabBarVue
  }
};
</script>

<style >
@import url("assets/css/base.css");

</style>
