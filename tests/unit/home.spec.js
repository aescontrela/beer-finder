/* eslint-env jest */

import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import fetchMock from 'fetch-mock'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const punkIpa = {
  'id': 192,
  'name': 'Punk IPA 2007 - 2010',
  'tagline': 'Post Modern Classic. Spiky. Tropical. Hoppy.',
  'first_brewed': '04/2007',
  'abv': 4.2
}

const buzz = {
  'id': 1,
  'name': 'Buzz',
  'tagline': 'A Real Bitter Experience.',
  'first_brewed': '04/2010',
  'abv': 3.0
}

describe('Search', () => {
  let actions
  let state
  let store

  beforeAll(() => {
    state = {
      beers: []
    }
    actions = {
      fetchByPage: jest.fn(),
      sortBy: jest.fn()
    }
    store = new Vuex.Store({
      state,
      actions
    })

    fetchMock.get('*', [punkIpa, buzz])
  })

  it('fetch all beers', () => {
    shallowMount(Home, { store, localVue })
    expect(actions.fetchByPage).toHaveBeenCalled()
  })
})
