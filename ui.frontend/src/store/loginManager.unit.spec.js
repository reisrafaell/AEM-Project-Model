import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import { actions, mutations, state } from './loginManager.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('loginManager - unit', () => {
  let store, userLogin

  beforeEach(() => {
    store = new Store({
      state,
      mutations,
      actions,
    })

    userLogin = {
      login: 'caio.barros',
      password: 12345678,
      local: '-28.9712132207349, -52.00882991155071',
    }
  })

  it('should return the state login', () => {
    store.commit('setLogin', userLogin)
    expect(store.state.userLogin).toEqual(userLogin)
  })

  it('should return fetchLogin form user', () => {
    const form = {
      user: 'caio.barros',
      password: 12345678,
    }
    store.dispatch('fetchLogin', form)
    expect(store.state.userLogin).toEqual(userLogin)
  })

  it('should not return fetchLogin form user', () => {
    const form = {
      user: 'caio.barros',
      password: 987654321,
    }
    store.dispatch('fetchLogin', form)
    expect(store.state.userLogin).toEqual({})
  })
})
