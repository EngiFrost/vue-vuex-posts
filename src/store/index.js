import { createStore } from 'vuex'
import post from './modules/post'

// Vue.use(Vuex) NOTE: deprecated and leads to error

const store = createStore({
  modules: { post },
})

export default store