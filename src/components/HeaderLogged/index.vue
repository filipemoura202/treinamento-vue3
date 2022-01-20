<template>
    <div class="w-full bg-brand-main flex justify-center">
        <div class="w-4/5 h-28 flex items-center justify-between max-w-6xl py-10">
            <div class="w-28 lg:w-36">
                <img src="../../assets/images/logo_white.png" alt="logo" class="src">
            </div>

            <div class="flex md:flex-col">
              <ul class="flex list-none">
                  <li
                    id='credential-button'
                    @click="() => router.push({ name: 'Credentials'})"
                    class="px-6 py-2 font-bold rounded-full text-white focus:outline-none cursor-pointer"
                  >
                    Credenciais
                  </li>
                  <li
                    @click="() => router.push({ name: 'Feedbacks'})"
                    class="px-6 py-2 font-bold rounded-full text-white focus:outline-none cursor-pointer"
                  >
                    Feedbacks
                  </li>
                  <li
                    id='logout-button'
                    @click="handleLogout"
                    class="px-6 py-2 font-bold rounded-full text-white focus:outline-none text-brand-main cursor-pointer bg-white ">
                    {{ labelLogged }}
                  </li>
              </ul>
            </div>
        </div>
    </div>
</template>
<script>
import useStore from '../../hooks/useStore'
import { useRouter } from 'vue-router'
import { cleanCurrentUser } from '../../store/user'
import { computed } from 'vue'
export default {
  setup () {
    const store = useStore('User')
    const router = useRouter()

    const labelLogged = computed(() => {
      if (!store.currentUser.name) {
        return '...'
      }

      return `${store.currentUser.name} (sair)`
    })

    function handleLogout () {
      window.localStorage.removeItem('token')
      cleanCurrentUser()
      router.push({ name: 'Home' })
    }

    return {
      router,
      handleLogout,
      labelLogged
    }
  }

}
</script>
<style>

</style>
