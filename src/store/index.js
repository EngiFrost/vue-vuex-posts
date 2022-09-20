import { createStore } from 'vuex'
import post from './modules/post'

// Vue.use(Vuex) NOTE: deprecated and leads to error

const store = createStore({ // FIXME: use contemporary syntax!
  modules: { post },
})

export default store