import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from './index'
import loginManager from './loginManager.js'
import formManager from './formManager.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('indexStore - unit', () => {

  it('should return the stores', () => {
    expect(store.loginManager).toEqual(loginManager)
    expect(store.formManager).toEqual(formManager)
  })
})
