/* eslint-env jest */

import { shallowMount, createLocalVue } from '@vue/test-utils'
import BaseDropdown from '@/components/BaseDropdown.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

const optionA = {
  label: 'First Brewed',
  type: 'date',
  attr: 'first_brewed'
}

const optionB = {
  label: 'Alcohol by Volume (ABV)',
  type: 'float',
  attr: 'abv'
}

describe('BaseDropdown', () => {
  let wrapper
  let actions
  let store

  beforeAll(() => {
    actions = {
      sortBy: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })

    wrapper = shallowMount(BaseDropdown, { store,
      localVue,
      propsData: {
        options: [optionA, optionB]
      }
    })
  })

  it('on click dispatch an action to the store', () => {
    const sortOption = wrapper.findAll('li').at(0)
    sortOption.trigger('click')

    expect(actions.sortBy).toHaveBeenCalled()
  })
})
