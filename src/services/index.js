import axios from 'axios'
import { router } from '../router'
import AuthService from './auth'
import UsersService from './users'

const API_ENVS = {
  localhost: 'http://localhost:3000',
  prodution: '',
  develop: ''
}

const httpClient = axios.create({
  baseURL: API_ENVS.localhost
})

httpClient.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }

  return config
})

httpClient.interceptors.response.use(response => response, error => {
  const canThrowAnError = error.request.status === 500 || error.request.status === 0

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  if (error.reponse.status === 401) {
    router.push({ name: 'Home' })
  }

  return error
})

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient)
}
