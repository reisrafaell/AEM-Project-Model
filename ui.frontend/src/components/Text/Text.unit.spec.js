import { mount } from '@vue/test-utils'
import Text from './Text.vue'

describe('Text - unit', () => {
  const mountText = () => {
    const wrapper = mount(Text)
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountText()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should setProps message text', async () => {
    const wrapper = mountText()
    const props = { richText: true, text: 'Test message text' }
    await wrapper.setProps(props)
    expect(wrapper.vm.richText).toBe(props.richText)
    expect(wrapper.vm.text).toBe(props.text)
  })
})
