import { mount, createLocalVue } from '@vue/test-utils'
import CardForm from './CardForm.vue'
import Vuex, { Store } from 'vuex'
import * as managerForm from '@/store/formManager'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('CardForm - unit', () => {
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

  const mountCardForm = () => {
    const wrapper = mount(CardForm, {
      localVue,
      store
    })
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountCardForm()
    expect(wrapper.html()).toBeTruthy()
  })

  it('should setProps navTabs one tabName', async () => {
    const wrapper = mountCardForm()
    const props = {
      navTabs: [
        {
          buttonName: 'Next',
          tabName: 'Basic',
          inputs: [{ label: 'Full Name', required: true, type: 'text' }]
        }
      ]
    }
    await wrapper.setProps(props)
    expect(wrapper.vm.navTabs).toBe(props.navTabs)
  })

  it('should setProps navTabs tabName empty', async () => {
    const wrapper = mountCardForm()
    const props = {
      navTabs: [{ tabName: '' }]
    }
    await wrapper.setProps(props)
    expect(wrapper.vm.navTabs).toBe(props.navTabs)
  })

  it('should setProps navTabs with two tabs', async () => {
    const wrapper = mountCardForm()
    const props = {
      navTabs: [
        {
          buttonName: 'Next',
          tabName: 'Basic',
          inputs: [{ label: 'Full Name', required: true, type: 'text' }]
        },
        {
          buttonName: 'Finish',
          tabName: 'Social',
          inputs: [{ label: 'LinkedIn', required: false, type: 'text' }]
        }
      ]
    }
    await wrapper.setProps(props)
    expect(wrapper.vm.navTabs).toBe(props.navTabs)
  })
})
