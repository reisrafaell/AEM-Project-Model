import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import * as managerLogin from './loginManager'
import * as managerForm from './formManager'

Vue.use(Vuex)

const loginManager = {
  namespaced: true,
  ...managerLogin
}
const formManager = {
  namespaced: true,
  ...managerForm
}

export default new Store({
  modules: {
    loginManager,
    formManager
  }
})
