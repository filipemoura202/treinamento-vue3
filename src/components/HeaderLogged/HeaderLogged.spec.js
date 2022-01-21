import { shallowMount } from '@vue/test-utils'
import HeaderLogged from '.'
import { routes } from '../../router'
import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

const mockStore = { currentUser: {} }
jest.mock('../../hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged />', () => {
  it('Should render Header Logged correctly', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [
          router
        ]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should return 3 dots when theres no user logged', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [
          router
        ]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')
  })

  it('Should return user name when user logged', async () => {
    router.push('/')
    await router.isReady()
    mockStore.currentUser.name = 'Filipe'
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [
          router
        ]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('Filipe (sair)')
  })
})
