import {ADD_COUNTER,ADD_TO_CART} from './mutations-types'

export default {
    [ADD_COUNTER](state,payload){
      payload.count++
    },
    [ADD_TO_CART](state,payload){
      payload.checked = true
      state.cartList.push(payload)
    },
    checkClick(){
      if(this.isSelectAll){
        //全部选中
        this.cartList.forEach(item => item.checked = false)
      }
      else{
        this.cartList.forEach(item => item.checked =true)
      }
    }
  }