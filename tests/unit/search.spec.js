/* eslint-env jest */

import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import fetchMock from 'fetch-mock'
import Search from '@/components/Search.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const punkIpa = {
  'id': 192,
  'name': 'Punk IPA 2007 - 2010',
  'tagline': 'Post Modern Classic. Spiky. Tropical. Hoppy.',
  'first_brewed': '04/2007'
}

describe('Search', () => {
  let wrapper
  let actions
  let store

  beforeAll(() => {
    actions = {
      fetchBeersByName: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })

    wrapper = shallowMount(Search, { store, localVue })
    fetchMock.get('*', [punkIpa])
  })

  it('debounce search input', () => {
    jest.spyOn(wrapper.vm, 'debounceSearchQuery')
    wrapper.setData({ query: 'orange' })

    expect(wrapper.vm.debounceSearchQuery).toHaveBeenCalled()
  })

  it('on click close button toggle input visibility', () => {
    wrapper.setMethods({ toggleVisibility: jest.fn() })
    wrapper.find('button').trigger('click')

    expect(wrapper.vm.toggleVisibility).toBeCalled()
  })

  it('fetch data from a given param', () => {
    wrapper.setData({ query: 'orange' })
    wrapper.vm.fetchResults()
    expect(actions.fetchBeersByName).toHaveBeenCalled()
  })
})
