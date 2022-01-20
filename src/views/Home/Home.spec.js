import Home from '.'
import { routes } from '../../router'
import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<home />', () => {
  it('Should render home correctly', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
