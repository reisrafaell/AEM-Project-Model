import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import FormLogin from '@/components/login/FormLogin.vue'
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

const $route = {
  path: '/content/vue/login.html',
}
const componentProperties = {
  isInEditor: false,
}

describe('FormLogin - unit', () => {
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

  const mountFormLogin = () => {
    const wrapper = mount(FormLogin, {
      store,
      localVue,
      mocks: {
        $route,
      },
      attrs: {
        componentProperties,
      },
    })

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFormLogin()
    expect(wrapper.vm).toBeTruthy()
    expect(window.location.href).toEqual(url)
  })

  it('should handleSubmit login success', async () => {
    const wrapper = mountFormLogin()
    const form = {
      user: 'caio.barros',
      password: 12345678,
    }

    const userInput = wrapper.find('[data-testid="user-input"]')
    await userInput.setValue(form.user)

    const passwordInput = wrapper.find('[data-testid="password-input"]')
    await passwordInput.setValue(form.password)

    const button = wrapper.find('[data-testid="login-button"]')
    await button.trigger('submit')

    const { userLogin } = store.state.loginManager

    expect(wrapper.vm.form).toStrictEqual(form)
    expect(userLogin.login).toEqual(form.user)
    expect(userLogin.password).toEqual(form.password)
  })

  it('should handleValidation return true login submit', async () => {
    const wrapper = mountFormLogin()
    const form = {
      user: 'Caio.barros',
      password: 12345678,
    }

    const userInput = wrapper.find('[data-testid="user-input"]')
    await userInput.setValue(form.user)

    const passwordInput = wrapper.find('[data-testid="password-input"]')
    await passwordInput.setValue(form.password)

    const button = wrapper.find('[data-testid="login-button"]')
    await button.trigger('submit')

    expect(wrapper.vm.handleValidation()).toBeTruthy()
  })

  it('should handleValidation return false login submit', async () => {
    const wrapper = mountFormLogin()
    const form = {
      user: 'Caio-barros',
      password: 87645,
    }

    const userInput = wrapper.find('[data-testid="user-input"]')
    await userInput.setValue(form.user)

    const passwordInput = wrapper.find('[data-testid="password-input"]')
    await passwordInput.setValue(form.password)

    const button = wrapper.find('[data-testid="login-button"]')
    await button.trigger('submit')

    expect(wrapper.vm.handleValidation()).not.toBeTruthy()
  })
})
