import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import Nav from '~/components/Nav/Nav.vue'
import * as managerLogin from '@/store/loginManager'

const localVue = createLocalVue()
localVue.use(Vuex)

global.window = Object.create(window)
const url = 'http://example.com/login'
Object.defineProperty(window, 'location', {
  value: {
    href: url,
  },
})

const componentProperties = {
  isInEditor: false,
}

describe('Nav - unit', () => {
  let store, loginManager

  beforeEach(() => {
    loginManager = {
      namespaced: true,
      ...managerLogin,
    }

    store = new Store({
      modules: {
        loginManager,
      },
    })
  })

  const mountNav = () => {
    const wrapper = mount(Nav, {
      localVue,
      store,
      attrs: {
        componentProperties,
      },
    })

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountNav()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should setProps pageName login and redirectPath home', async () => {
    store.commit('loginManager/setLogin', {
      login: 'caio.barros',
      password: 12345678,
      local: '-28.9712132207349, -52.00882991155071',
    })
    const wrapper = mountNav()
    const props = { pageName: 'login', redirectPath: '/content/vue/home.html' }

    await wrapper.setProps(props)

    expect(wrapper.vm.pageName).toBe(props.pageName)
    expect(wrapper.vm.redirectPath).toBe(props.redirectPath)
    expect(window.location.pathname).toBe(props.redirectPath)
  })

  it('should setProps pageName home and redirectPath login.html', async () => {
    store.commit('loginManager/setLogin', {})
    const wrapper = mountNav()
    const props = { pageName: 'home', redirectPath: '/content/vue/login.html' }

    await wrapper.setProps(props)

    expect(wrapper.vm.pageName).toBe(props.pageName)
    expect(wrapper.vm.redirectPath).toBe(props.redirectPath)
    expect(window.location.pathname).toBe(props.redirectPath)
  })
})
