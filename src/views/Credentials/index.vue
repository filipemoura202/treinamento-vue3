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

        <div class="flex items-center mt-2 pr-5 justify-between w-full lg:w-1/2 p-2 rounded-md bg-brand-gray">
           <span class="text-gray-600 rounded-md ml-5 font-medium w-full">
            {{ store.currentUser.apiKey }}
           </span>
           <div class="flex items-center justify-between w-16">
              <icon name="Copy" color="#A9A9A9" size="19" class="cursor-pointer" />
              <icon name="Loading" color="#A9A9A9" size="19" class="cursor-pointer" />
           </div>
        </div>

        <p class="text-sm mt-6 font-regular text-gray-600">Coloque o script abaixo no seu site para começar a receber feedbacks</p>

        <div class="mt-2 p-2 w-full lg:w-2/3 rounded-md bg-brand-gray text-gray-600 overflow-x-scroll">
          <pre>&lt;script src="https://filipemoura-feedbacker-widget.netfly.app?apiKey="{{ store.currentUser.apiKey }}"&gt;&lt;/script&gt;</pre>
        </div>

      </div>
    </div>
</template>
<script>
import HeaderLogged from '../../components/HeaderLogged'

import Icon from '../../components/Icon/'
import useStore from '../../hooks/useStore'

export default {
  components: {
    Icon,
    HeaderLogged
  },
  setup () {
    const store = useStore('User')

    return {
      store
    }
  }
}
</script>
