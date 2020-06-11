module.exports = {
    plugins:{
        autoprefixer:{},
        "postcss-px-to-viewport":{
            viewportWidth:375,//视窗的宽度,对应的是我们设计稿的宽度
            viewportHeight:667,
            unitPrecision:5,//指定px转换为视窗的视窗单位值得小数位数
            viewportUnit:'vw',//指定需要转换成的视窗单位,建议使用vw
            selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
            minPixelValue:1,//小于或等于1px的不转换为视窗单位
            mediaQuery:false, //允许在媒体查询中转换为px
            exclude:[]
        }

    }


}