import { mount } from '@vue/test-utils'
import LineForm from './LineForm.vue'

describe('LineForm - unit', () => {
  const mountLineForm = () => {
    const wrapper = mount(LineForm)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountLineForm()
    expect(wrapper.vm).toBeTruthy()
  })
})
