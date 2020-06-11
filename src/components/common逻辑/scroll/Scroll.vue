<template>
  <div class="wrapper" ref="wra">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";
import PullUp from "@better-scroll/pull-up";

// BScroll.use(PullDown);
BScroll.use(PullUp);

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wra, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
      //   taps:true
    });
    //2.监听滚动的位置
    
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    
    //3.监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("loadScroll");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("---");
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>
