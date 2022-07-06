import { mount } from '@vue/test-utils'
import HeaderForm from './HeaderForm.vue'

describe('HeaderForm - unit', () => {
  const mountHeaderForm = () => {
    const wrapper = mount(HeaderForm)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountHeaderForm()
    expect(wrapper.vm).toBeTruthy()
  })
})
