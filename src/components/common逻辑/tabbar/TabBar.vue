<template>
  <div id="tab-bar">
   <slot>
   </slot>
  </div>
</template>
<script>
export default {
  name: "TarBar"
};
</script>


<style >
#tab-bar {
  z-index: 9;
  display: flex;
  /* background-color: #f2f2f2; */
  position: fixed;
  height: 49px;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -3px 3px rgba(100, 100, 100, 0.1);
}
</style>