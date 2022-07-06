import { mount, createLocalVue } from '@vue/test-utils'
import NavTabs from './NavTabs.vue'
import Vuex, { Store } from 'vuex'
import * as managerForm from '@/store/formManager'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('NavTabs - unit', () => {
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

  const mountNavTabs = () => {
    const wrapper = mount(NavTabs, {
      localVue,
      store
    })
    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountNavTabs()
    expect(wrapper.html()).toBe('')
  })

  it('should click nav-tab 1', async () => {
    const wrapper = mountNavTabs()
    const props = {
      navs: [
        { tabName: 'Basic' },
        { tabName: 'Social' },
        { tabName: 'Certificates' }
      ]
    }
    await wrapper.setProps(props)

    const link = wrapper.find('[data-testid="nav-tabs-1"]')
    await link.trigger('click')

    expect(wrapper.vm.activeItem).toBe('social')
  })

  it('should setProps navs one tabName', async () => {
    const wrapper = mountNavTabs()
    const props = {
      navs: [{ tabName: 'Basic' }]
    }
    await wrapper.setProps(props)

    expect(wrapper.vm.navs).toBe(props.navs)
  })

  it('should setProps navs one tabName empty', async () => {
    const wrapper = mountNavTabs()
    const props = {
      navs: [{ tabName: '' }]
    }
    await wrapper.setProps(props)

    expect(wrapper.vm.navs).toBe(props.navs)
  })
})
