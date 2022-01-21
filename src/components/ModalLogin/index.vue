<template>
  <div class="flex justify-between items-center" id="modal-login">
    <h1 class="text-xl font-black text-center text-gray-800">Entre na sua conta</h1>
    <button class="text-4xl text-gray-600 focus:outline-none" @click="close">
      <icon name="Close" color="#000" size="16" />
    </button>
  </div>
  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <label class="block">
        <span class="block text-lg font-medium text-gray-600">
          E-mail
        </span>
        <input
          type="email"
          id="email-field"
          v-model="state.email.value"
          :class="{
            'border-brand-danger': !!state.email.errorMessage
          }"
          class="block w-full py-4 px-3 bg-gray-100 mt-1 text-lg border-2 border-transparent rounded"
          placeholder="janeFisher@gmail.com"
        />
        <span
          id="email-error"
          v-if="!!state.email.errorMessage"
          class="block font-medium text-brand-danger">
          {{ state.email.errorMessage }}
        </span>
      </label>
      <label class="block mt-6">
        <span class="block text-lg font-medium text-gray-600">
          Senha
        </span>
        <input
          id="password-field"
          type="password"
          v-model="state.password.value"
          :class="{
            'border-brand-danger': !!state.password.errorMessage
          }"
          class="block w-full py-4 px-3 bg-gray-100 mt-1 text-lg border-2 border-transparent rounded"
        />
        <span
          v-if="!!state.password.errorMessage"
          class="block font-medium text-brand-danger">
          {{ state.password.errorMessage }}
        </span>
      </label>

    <button
     :disabled="state.isLoading"
     type="submit"
     id="submit-login"
     :class="{
       'opacity-50' : state.isLoading
      }"
      class="bg-brand-main px-8 py-3 mt-10 font-bold text-white rounded-full focus:outline-none transition-all duration-150">
      <icon v-if="state.isLoading" name="Loading" class="animate-spin"/>
      <span v-else>Entrar</span>
    </button>

    </form>
  </div>
</template>

<script>
import useModal from '../../hooks/useModal'
import { useField } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { reactive } from '@vue/reactivity'
import services from '../../services'
import { validateEmptyAndLength3, validateEmptyAndEmail } from '../../utils/validators'
import Icon from '../Icon'

export default {
  components: {
    Icon
  },
  setup () {
    const modal = useModal()
    const router = useRouter()
    const toast = useToast()
    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField('email', validateEmptyAndEmail)

    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLength3)

    const state = reactive({
      hasErros: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })

    async function handleSubmit () {
      try {
        toast.clear()
        state.isLoading = true
        const { data, errors } = await services.auth.login({
          email: state.email.value,
          password: state.password.value
        })

        if (!errors) {
          window.localStorage.setItem('token', data.token)
          router.push({ name: 'Feedbacks' })
          state.isLoading = false
          modal.close()
          return
        }

        if (errors.status === 404) {
          toast.error('E-mail não encontrado.')
        }
        if (errors.status === 401) {
          toast.error('E-mail/senha inválidos.')
        }
        if (errors.status === 400) {
          toast.error('Ocorreu um erro ao fazer o login')
        }

        state.isLoading = false
      } catch (error) {
        toast.error('Ocorreu um erro ao fazer o login. Catch')
        state.isLoading = false
        state.hasErros = !!error
      }
    }

    return {
      state,
      close: modal.close,
      handleSubmit
    }
  }
}
</script>
