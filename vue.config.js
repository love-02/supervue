module.exports = {
  configureWebpack :{
      resolve : {
          alias:{
              'assets':"@/assets",
              'common':"@/common",
              'components':"@/conponents",
              'network':'@/network',
              'views':'@/views'

          }
      }
  }


}