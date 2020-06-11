<template>

    <div class="recommend">
        <div :key="item" v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
require('normalize.css')
export default {
    name :"RecommendView",
    props:{
        recommends:{
            type:Array,
            defalut(){
                return []
            }
        }
    }
}
</script>
<style>
    .recommend{
        display: flex;
        width: 100%; 
  
        height: 120px;
    }
     .recommend img{
         width: 80%;
   margin-top: 10px;
      margin-left: 8px;
     }
     .recommend a div{
        color: black;
        margin-left: 10px;


     }


</style>