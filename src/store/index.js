import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'

Vue.use(Vuex) // registered VueX module

export default new Vuex.Store({ // FIXME: use contemporary syntax!
  modules: { post },
})