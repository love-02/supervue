<template>
  <div id="detailNavBar">
    <nav-bar>
        <div slot="left" class="back" @click="backClick">
            <img  src="~assets/img/fh.png" alt="">
        </div>
      <div slot="center" class="tabCenter">
        <tab-control @tabClick="tabClick" :titles="titles"></tab-control>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../../components/common逻辑/navbar/NavBar.vue";
import TabControl from "../../../components/content业务/tabControl/TabControl.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
    TabControl
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    tabClick(index) { 
      this.currentIndex = index;
      this.$emit('title',index)
      // console.log(index)
      // console.log(this.currenIndex)
    },
    backClick(){
        this.$router.back()
    }

  }
};
</script>
<style scoped>
    .tabCenter{
        font-size: 12px;
    }
    .back img{
        position: relative;
        top: 2px;
    }

</style>