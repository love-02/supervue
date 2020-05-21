<template>
    <div class="recommend">
        <div v-for="item in recommends">
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
        margin: 10px 0px 15px 8px;
        height: 100px;
    }
     .recommend img{
         width: 80%;
     }
     .recommend a div{
        color: black;
        margin-left: 3px;
     }


</style>