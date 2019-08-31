import store from '../../store'
import fetch from 'node-fetch'
import moment from 'moment'

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
    },
    sortBy ({ state }, [attr, type]) {
      switch (type) {
        case 'date':
          const sortedBeers = state.beers
            .map(d => ({ ...d, [attr]: moment(`"01/"${d[attr]}`) }))
            .sort((a, b) => {
              if (a[attr].isBefore(b[attr])) {
                return -1
              } else {
                return +1
              }
            })
          state.beers = sortedBeers
          return state
        case 'float': {
          return state.beers.sort((a, b) => {
            let current = a[attr]
            let next = b[attr]

            if (current < next) {
              return -1
            } else if (current > next) {
              return 1
            } else {
              return 0
            }
          })
        }
        default:
          return state
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
