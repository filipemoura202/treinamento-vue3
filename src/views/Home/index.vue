<template>
  <custom-header
    @create-account="handleAccountCreate"
    @login="handleLogin"
  />
  <contact
    @emailed="()=> alert('Teste')"
  />
  <div id="pora" class="flex flex-col items-center justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker &copy; {{ new Date().getFullYear() }}</p>
  </div>
</template>

<script>
import { onMounted, reactive } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import useModal from '../../hooks/useModal'
import Contact from './Contact.vue'
import CustomHeader from './CustomHeader.vue'

export default {
  components: { CustomHeader, Contact },
  setup () {
    const modal = useModal()
    const router = useRouter()
    const state = reactive({
      isActive: true
    })

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    function handleLogin () {
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handleAccountCreate () {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }

    return {
      state,
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>
