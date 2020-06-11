<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      class="tab-control-item"
      @click="clickColor(index)"
      :class="{active :index === currentIndex}"
      :key="index"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  mounted() {
      this.$bus.$on("detailClick", (i)=>{
      this.currentIndex = i
      });
    
  },
  methods: {
    clickColor(index) {
      this.currentIndex = index;
      this.$emit("tabClick", this.currentIndex);
    }
  }
};
</script>
<style>
.tab-control {
  z-index: 888;
  display: flex;
  text-align: center;
  height: 44px;
  font-size: 14px;
  line-height: 44px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: rgb(255, 0, 85);
}
.active span {
  border-bottom: 2px solid rgb(255, 0, 85);
  /* padding:0 5px 4px 7px; */
}
</style>