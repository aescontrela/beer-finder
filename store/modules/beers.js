import store from '../../store'
import fetch from 'node-fetch'

export default {
  state: {
    beers: [],
    status: 'hasFailed'
  },
  getters: {
    all: (state) => {}
  },
  actions: {
    async fetchBeersByName (state, name) {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`)
        const beers = response.ok ? await response.json() : []
        store.commit('setBeers', beers)
      } catch (e) {
        store.commit('hasFailed')
      }
    },
    async fetchAll (state) {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers')
        const beers = response.ok ? await response.json() : []
        store.commit('setBeers', beers)
      } catch (e) {
        store.commit('hasFailed')
      }
    }
  },
  mutations: {
    setBeers: (state, beers) => {
      state.beers = beers
      state.status = 'requested'
    },
    hasFailed: (state) => {
      state.status = 'hasFailed'
    }
  }
}
