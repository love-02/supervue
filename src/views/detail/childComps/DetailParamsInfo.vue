<template>
    <div class="param-info" v-if="Object.keys(paramInfo).length !== 0 ">
        <table class="info-size" v-for="(table,index) in paramInfo.sizes" :key="index">
            <tr v-for="(tr,indey) in table" :key="indey">
                <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for="(info,index) in paramInfo.infos" :key="index">
                <td class="info-param-key"> {{info.key}}</td>
                <td class="param-value">{{info.value}}</td>
            </tr>
        </table>
        <div class="infp-img" v-if="paramInfo.image.length !== 0">
            <img :src="paramInfo.image" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailParamsInfo",
    props:{
        paramInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style>
    
</style>