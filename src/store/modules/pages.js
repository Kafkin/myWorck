export default {
  actions: {
    
  },

  mutations: {
    nextPages(state, obj){
      state.currentPageTitle = obj.item
      state.currentPageIndex = obj.index
    },
  },

  state: {
    currentPageTitle: 'Главная',
    currentPageIndex: 0,
  },
  
  getters:{
    currentPageTitle(state){
      return state.currentPageTitle
    },

    currentPageIndex(state){
      return state.currentPageIndex
    }
  }
}