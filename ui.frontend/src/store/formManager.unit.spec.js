import { createLocalVue } from "@vue/test-utils"
import Vuex, { Store } from 'vuex'
import { state, mutations} from './formManager.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('formManager - unit', () => {
  let store, activeItem

  beforeEach(() => {
    store = new Store({
      state,
      mutations
    })

    activeItem = 'basic'
  })

  it('should set state activeItem', () => {
    store.commit('setActive', activeItem)
    expect(store.state.activeItem).toEqual(activeItem)
  });

  it('should set state formFields', () => {
    const formFields = { name: 'User Test' }
    store.commit('setFormFields', formFields)
    expect(store.state.formFields).toEqual(formFields)
  });
})
