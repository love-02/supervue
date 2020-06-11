<template>
    <div class="checkBtn" >
        <img src="~assets/img/qd2.png"  class=" btnImg" :class="{checkImg:isColor}"  alt="">
    </div>
</template>
<script>
export default {
    name:'CheckButton',
    props:{
        isColor:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style scoped>
    .btnImg{     
        border:2px solid rgb(129, 127, 127);
        border-radius: 50%;
        background-image: white;
    }
    .checkImg{
        background:#fe351b;
        border:2px solid #fe351b;
        border-radius: 50%;
    }
</style>