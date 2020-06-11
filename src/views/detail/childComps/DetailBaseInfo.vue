<template>
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-after">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="item in goods.services.length-1" :key="item">
            <img :src="goods.services[item-1].icon" alt="">
            <span>{{goods.services[item-1].name}}</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailBaseInfo",
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style scoped>
    .info-title{
        /* height: 120px; */
        line-height: 36px;
        font-size: 20px;
       position: relative;
       top: 10px;
       padding-bottom:15px ;
       /* color: #999; */
     padding-left: 10px;
     padding-right: 10px;
    }
    .info-price{
        line-height: 45px;
        position: relative;
       padding-left: 10px;
       padding-bottom: 20px;
    }
    .n-price{
        font-size: 22px;
        color: #ff0055;
        padding-right: 10px;
    }
    .o-price{
        font-size: 14px;
       padding-right: 10px;
       text-decoration:line-through;
       color:#999
    }
    .discount{
        color: #ff0055;
        font-size: 24px;
    }
    .info-after{
    display: flex;
    justify-content:space-around;
    color: #999;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(216, 216, 216);

    }
    .info-after span{
           /* flex: 1; */
    }
    .info-service{
        display: flex;
       /* text-align:inherit; */
       height: 40px;
       line-height: 20px;
       /* color: #999; */
       justify-content:space-around;
       align-items: center;
        /* border-bottom: px solid rgb(107, 105, 105); */
        padding-bottom: 30px;
        box-shadow: 0px 4px 5px rgb(221, 221, 221);
    }
    .info-service-item {
        font-size:14px;
        padding-top: 10px;
    }
    .info-service-item img{
        width: 12px;
    }
</style>>
    
