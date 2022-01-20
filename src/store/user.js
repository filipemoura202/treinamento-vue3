import { reactive } from 'vue'

const userInitalState = {
  currentUser: {}
}

let state = reactive(userInitalState)

export default state

export function resetUserStore () {
  state = reactive(userInitalState)
}

export function cleanCurrentUser () {
  state.currentUser = {}
}

export function setCurrentUser (user) {
  state.currentUser = user
}

export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
