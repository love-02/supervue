<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <main-tab-bar-vue>

    </main-tab-bar-vue>
  </div>
</template>

<script>
import MainTabBarVue from './components/content业务/main/MainTabBar.vue';

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
