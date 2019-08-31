/* eslint-env jest */

import { shallowMount } from '@vue/test-utils'
import BaseInput from '@/components/BaseInput.vue'

describe('BaseInput', () => {
  it('set input attributes from props', () => {
    const props = {
      placeholder: 'Find me',
      required: true
    }

    const wrapper = shallowMount(BaseInput, {
      propsData: props
    })

    expect(wrapper.find('input').attributes('placeholder')).toMatch(props.placeholder)
    expect(wrapper.find('input').attributes('required')).toBeDefined()

    wrapper.setProps({ required: false })
    expect(wrapper.find('input').attributes('required')).toBeUndefined()
  })
})
