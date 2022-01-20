import useStore from '../hooks/useStore'
import {
  setCurrentUser,
  setApiKey,
  resetUserStore,
  cleanCurrentUser
} from './user'

describe('User Store', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user name', () => {
    const user = useStore('User')
    setCurrentUser({ name: 'Filipe' })
    expect(user.currentUser.name).toBe('Filipe')
  })

  it('Should set Api key from current user', () => {
    const user = useStore('User')
    setApiKey('123')
    expect(user.currentUser.apiKey).toBe('123')
  })

  it('Should clean current user object', () => {
    const user = useStore('User')
    setCurrentUser({ name: 'Filipe' })
    expect(user.currentUser.name).toBe('Filipe')
    cleanCurrentUser()
    expect(user.currentUser.name).toBeFalsy()
  })
})
