import { mount } from '@vue/test-utils'
import BodyBackground from './BodyBackground'

describe('BodyBackground - unit', () => {
  const mountBodyBackground = () => {
    const wrapper = mount(BodyBackground)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountBodyBackground()
    expect(wrapper.vm).toBeTruthy()
  })
})
