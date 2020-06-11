<template>
    <div class="goods-item" @click="itemClick">
        <img :src="goodsItem.show.img" alt="" @load="loadScroll">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"GoodsListItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        loadScroll(){
            this.$bus.$emit('itemImageLoad')
        },
        itemClick(){
            this.$router.push('/detail/' + this.goodsItem.iid)
        }
    }
}
</script>
<style>
    .goods-item{
      
        padding-bottom: 40px;
        position: relative;
        width: 46%;
    }
    .goods-item img{
       width: 100%;
        border-radius:5px;
    }
    .goods-info{
        font-size: 12px;
        position:absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .goods-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
 
    }
    .goods-info .collect{
        position: relative;
        
    }
    .goods-info .collect::before{
        content: '';
        position: absolute;
        /* left: -15px; */
        background: url('~assets/img/shoucang.png');
    }



</style>