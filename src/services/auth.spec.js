import mockAxios from 'axios'
import AuthService from './auth'

jest.mock('axios')

describe('Auth Service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should return a token user login', async () => {
    const token = '123.123.123'

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    })

    const response = await AuthService(mockAxios).login({ email: 'filipe@gmail.com', password: '1234' })
    expect(response.data).toHaveProperty('token')
    expect(response).toMatchSnapshot()
  })

  it('Should return an user when user register', async () => {
    const user = {
      name: 'Filipe',
      email: 'filipe@gmail.com',
      password: '1234'
    }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await AuthService(mockAxios).register(user)
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('email')
    expect(response.data).toHaveProperty('password')
    expect(response).toMatchSnapshot()
  })

  it('Should throw an error when not Found', async () => {
    const errors = {
      status: 404,
      statusText: 'Not Found'
    }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: errors })
    })

    const response = await AuthService(mockAxios).login({
      email: 'filipe@gmail.com', password: '1234'
    })
    expect(response.errors).toHaveProperty('status')
    expect(response.errors).toHaveProperty('statusText')
    expect(response).toMatchSnapshot()
  })
})
