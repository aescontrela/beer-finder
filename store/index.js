import Vue from 'vue'
import Vuex from 'vuex'
import beers from './modules/beers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    beers: { ...beers }
  }
})
