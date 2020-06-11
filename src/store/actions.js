import {ADD_COUNTER,ADD_TO_CART} from './mutations-types'

export default {
    addCart(content,payload){
 return new Promise((resolve,reject) => {
       // state.cartList.push(payload)
//1查找之前数组中是否有该商品
let oldProduct = content.state.cartList.find(item => item.iid === payload.iid)
//2判断oldProduct

if(oldProduct){
  content.commit(ADD_COUNTER,oldProduct)
  // oldProduct.count +=1;
  resolve('已加入购物车,当前商品的数量 + 1')
}else{
  payload.count = 1;
  content.commit(ADD_TO_CART,payload)
  // state.cartList.push(payload)
  resolve('添加了新的商品')
}
 })
    }
  }