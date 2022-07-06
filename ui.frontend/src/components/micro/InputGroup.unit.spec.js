import { mount, createLocalVue } from '@vue/test-utils'
import InputGroup from './InputGroup.vue'
import Vuex, { Store } from 'vuex'
import * as managerForm from '@/store/formManager'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('InputGroup - unit', () => {
  let store, formManager
  beforeEach(() => {
    formManager = {
      namespaced: true,
      ...managerForm
    }

    store = new Store({
      modules: {
        formManager
      }
    })
  })

  const mountInputGroup = () => {
    const wrapper = mount(InputGroup, {
      localVue,
      store
    })
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountInputGroup()
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
  })

  it('should setProps item', async () => {
    const wrapper = mountInputGroup()
    const props = { item: { label: 'Full Name', required: true, type: 'text' } }
    await wrapper.setProps(props)
    expect(wrapper.vm.item).toBe(props.item)
  })

  it('should input item name text', async () => {
    const wrapper = mountInputGroup()
    const props = { item: { label: 'Full Name', required: true, type: 'text' } }
    await wrapper.setProps(props)

    const input = wrapper.find("#full-name")
    const fullName = 'User Test'
    await input.setValue(fullName)

    expect(input.element.value).toBe(fullName)
    expect(store.state.formManager.formFields['full-name']).toBe(fullName)
  })
})
