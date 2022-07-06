import { mount } from '@vue/test-utils'
import Margin from './Margin'

describe('Margin - unit', () => {
  const mountMargin = () => {
    const wrapper = mount(Margin)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountMargin()
    expect(wrapper.vm).toBeTruthy()
  })
})
