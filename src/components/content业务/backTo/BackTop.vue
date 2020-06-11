<template>
    <div class="back-top">
    </div>
</template>
<script>
export default {
    name:"BackTop"
}
</script>
<style>
    .back-top{
        width: 48px;
        height: 48px;
        background-color: white;
        border-radius: 50%;
        /* z-index: 99; */
        background-image: url('~assets/img/top.png');
        background-position: center;
        background-size: 80% 80%;
        position: fixed;
        right: 10px;
        bottom: 100px;
    }
  

</style>