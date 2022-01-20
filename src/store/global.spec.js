import useStore from '../hooks/useStore'
import { setGlobalLoading } from './global'

describe('Global Store', () => {
  it('Should set value the Global loading', () => {
    const global = useStore('Global')
    setGlobalLoading(true)
    expect(global.isLoading).toBe(true)
  })
})
