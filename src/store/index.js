import { createStore } from 'vuex'
import user from './modules/user.js'
import pages from './modules/pages.js'

export default createStore({
  modules: {
    user,
    pages
  }
})
