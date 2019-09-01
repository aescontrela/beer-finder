import store from '../../store'
import fetch from 'node-fetch'
import moment from 'moment'

const normalizedBeers = (data) => data.map(beer => ({
  ...beer,
  first_brewed: moment(`"01/"${beer.first_brewed}`),
  ingredients: Object.keys(beer.ingredients).map(ingredient =>
    typeof beer.ingredients[ingredient] !== 'object'
      ? ({ name: ingredient, list: [ beer.ingredients[ingredient] ] })
      : ({ name: ingredient, list: beer.ingredients[ingredient].map(item => item.name) })
  )
}))

export default {
  state: {
    beers: [],
    page: 1,
    itemsPerPage: 8
  },
  getters: {
    beerById: (state) => (id) => state.beers.find(beer => beer.id === id),
    beerByName: (state) => (name) => state.beers.find(beer => beer.name === name),
    allBeers: (state) => state.beers
  },
  actions: {
    async fetchBeersByName (state, name) {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`)
        const beers = response.ok ? await response.json() : []
        store.commit('setBeers', normalizedBeers(beers))
      } catch (e) {
        store.commit('hasFailed')
      }
    },
    async fetchAll (state) {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers')
        const beers = response.ok ? await response.json() : []
        store.commit('setBeers', normalizedBeers(beers))
      } catch (e) {
        store.commit('hasFailed')
      }
    },
    async fetchByPage ({ state }) {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${state.page}&per_page=${state.itemsPerPage}`)
        const beers = response.ok ? await response.json() : []
        store.commit('setBeers', normalizedBeers(beers))
      } catch (e) {
        store.commit('hasFailed')
      }
    },
    sortBy ({ state }, [attr, type]) {
      switch (type) {
        case 'date':
          const sortedBeers = state.beers
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
      state.beers = [...state.beers, ...beers]
      state.page += 1
    }
  }
}
