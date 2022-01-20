<template>
  <header class="header">
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img class="w-full" src="../../assets/images/logo_white.png" alt="logo">
        </div>

        <div class="flex">
          <button
            id="header-create-account-button"
            class="px-6 py-2 font-bold rounded-full text-white focus:outline-none"
            @click="() => emit('create-account')"
          >
            Crie uma conta
          </button>
          <button
            id="header-login-button"
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
            @click="() => emit('login')"
          >
            Entrar
          </button>
        </div>
      </div>

      <div class="flex flex-col items-start mt-20">
        <h1 class="text-4xl font-black text-white">Tenha um feedback.  <br>
        E faça seus clientes mais <br class="hidden lg:inline-block">
        felizes!</h1>
        <p class="text-lg text-white font-medium text-justify">
            Recebe ideias, reclamações e feedbacks com um <br class="hidden lg:inline-block">
            simples widget na página.
        </p>
        <button
          @click="()=> emit('create-account')"
          id="cta-create-account-button"
          class="mt-10 px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
        >
          Crie uma conta grátis
        </button>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  setup (_, { emit }) {
    return { emit }
  }
}
</script>

<style lang="postcss" scoped>
  .header {
    @apply bg-brand-main w-full flex justify-center;
    height: 700px;
  }

  .header-group {
    @apply flex flex-col w-4/5 max-w-6xl;
  }

  @media (min-width: 640px) {
    .header-group {
      background-image: url('../../assets/images/blue_ballons.png');
      background-position: right bottom;
      background-repeat: no-repeat;
    }
  }
</style>
