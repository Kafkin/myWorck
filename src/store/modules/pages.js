// import { set } from "core-js/core/dict"

export default {
  actions: {
    
  },

  mutations: {
    nextPages(state, obj){
      state.currentPageTitle = obj.item
      state.currentPageIndex = obj.index
    },

    pushShoppigCart(state, item){
      state.shoppigCart.push(item)
      console.log(state.shoppigCart);
    },

    deleteShoppingCart(state, item){
      const index = state.shoppigCart.find(el => el.title === item.title)

      if(!!index){
        state.shoppigCart.splice(index, 1)
      }else{
        console.log('не найден');
      }
    },

    deleteAllShoppingCart(state){
      state.shoppigCart = []
    }
  },

  state: {
    currentPageTitle: 'Главная',
    currentPageIndex: 0,

    shoppigCart: []
  },
  
  getters:{
    currentPageTitle(state){
      return state.currentPageTitle
    },

    currentPageIndex(state){
      return state.currentPageIndex
    },

    addShoppingCart(state){
      return state.shoppigCart
    }
  }
}