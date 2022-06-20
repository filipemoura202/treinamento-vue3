<template>
    <header-logged/>

    <div class="w-full flex justify-center bg-brand-gray">

      <div class="flex flex-col justify-center items-center h-64 w-4/5">

          <h1 class="text-4xl font-black text-center text-gray-800">
            Credenciais
          </h1>

          <p class="text-lg text-gray-800 font-regular text-center">
            Guia de instalação e geração de suas credenciais
          </p>

      </div>

    </div>
    <div class="flex w-full h-full justify-center">
      <div class="flex w-4/5 py-10 flex-col">

        <h1 class="text-3xl font-black text-dark-gray w-full">Instalação e configuração</h1>

        <p class="text-sm mt-8 font-regular text-gray-600">Este aqui é a sua chave de api</p>

        <content-loader
          v-if="store.Global.isLoading || state.isLoading"
          class="roundend"
          width="600px"
          height="50px"
        />

        <div v-else class="flex items-center mt-2 pr-5 justify-between w-full lg:w-1/2 p-2 rounded-md bg-brand-gray">

           <span v-if="state.hasError">Error ao carregar apiKey</span>
           <span v-else id="apikey" class="text-gray-600 rounded-md ml-5 font-medium w-full">
            {{ store.User.currentUser.apiKey }}
           </span>

           <div class="flex items-center justify-between w-16">
              <icon
                @click="handleCopy"
                name="Copy"
                color="#A9A9A9"
                size="19"
                class="cursor-pointer" />
              <icon
                id="generate-apikey"
                @click='handleGenerateApiKey'
                name="Loading"
                color="#A9A9A9"
                size="19"
                class="cursor-pointer" />
           </div>

        </div>

        <p class="text-sm mt-6 font-regular text-gray-600">Coloque o script abaixo no seu site para começar a receber feedbacks</p>

        <content-loader
          v-if="store.Global.isLoading || state.isLoading"
          class="roundend"
          width="600px"
          height="50px"
        />
        <div v-else class="mt-2 p-2 w-full lg:w-2/3 rounded-md bg-brand-gray text-gray-600 overflow-x-scroll">
          <span v-if="state.hasError">Error ao carregar o script</span>
          <pre v-else>
&lt;script
  defer
  async
  onload="init('{{ store.User.currentUser.apiKey }}')"
  src="https://filipemoura-feedbacker-widget.netlify.app/init.js"
&gt;&lt;/script&gt;
          </pre>
        </div>

      </div>
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity'
import HeaderLogged from '../../components/HeaderLogged'
import ContentLoader from '../../components/ContentLoader'
import Icon from '../../components/Icon/'
import useStore from '../../hooks/useStore'
import { setApiKey } from '../../store/user'
import services from '../../services'
import { watch } from '@vue/runtime-core'
import { useToast } from 'vue-toastification'

export default {
  components: {
    Icon,
    HeaderLogged,
    ContentLoader
  },
  setup () {
    const state = reactive({
      hasError: false,
      isLoading: false
    })

    const store = useStore()
    const toast = useToast()

    watch(() => store.User.currentUser, () => {
      if (!store.Global.isLoading && !store.User.currentUser.apiKey) {
        handleError(true)
      }
    })

    function handleError (error) {
      state.isLoading = false
      state.hasError = !!error
    }

    async function handleGenerateApiKey () {
      try {
        state.isLoading = true
        const { data } = await services.users.genereteApiKey()
        setApiKey(data.apiKey)
        state.isLoading = false
      } catch (error) {
        handleError(error)
      }
    }

    async function handleCopy () {
      try {
        toast.clear()
        await navigator.clipboard.writeText(store.User.currentUser.apiKey)

        toast.success('Copiado!')
      } catch (error) {
        handleError(error)
      }
    }

    return {
      store,
      state,
      handleCopy,
      handleGenerateApiKey
    }
  }
}
</script>
