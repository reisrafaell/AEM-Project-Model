import { mount } from "@vue/test-utils"
import ButtonForm from './ButtonForm.vue'

describe('ButtonForm - unit', () => {
  const mountButtonForm = () => {
    const wrapper = mount(ButtonForm)
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountButtonForm()
    expect(wrapper.html()).toBeTruthy()
  });
})
