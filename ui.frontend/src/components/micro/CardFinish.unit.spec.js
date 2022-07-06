import { mount, createLocalVue } from '@vue/test-utils'
import CardFinish from './CardFinish.vue'
import Vuex, { Store } from 'vuex'
import * as managerForm from '@/store/formManager'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CardFinish - unit', () => {
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

  const mountCardFinish = () => {
    const wrapper = mount(CardFinish, {
      localVue,
      store
    })
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountCardFinish()
    expect(wrapper.classes('card-finish')).toBe(true)
  })

  it('should set commit one formFields full-name', () => {
    const formFields = { 'full-name': 'User Test' }
    store.commit('formManager/setFormFields', formFields)

    const wrapper = mountCardFinish()

    expect(wrapper.vm.formFields['full-name']).toBe(formFields['full-name'])
    expect(wrapper.text()).toContain('Full Name')
  })
})
