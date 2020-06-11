<template>
    <div class="toast" v-show="isToast">
        {{message}}
    </div>
</template>
<script>
export default {
   name:"Toast" ,
data() {
    return {
        message:"",
        isToast:false 
    }
},
methods:{
    show(message,duration=2000){
        this.isToast = true;
        this.message = message;

        setTimeout(()=>{
            this.isToast = false;
            this.message =''
        },duration)
    }
}
}
</script>
<style>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 10PX 8px;
        background-color: rgb(126, 126, 126);
        z-index:999
    }
</style>