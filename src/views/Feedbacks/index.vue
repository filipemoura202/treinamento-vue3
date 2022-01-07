<template>
  <h1>Hello My friend </h1>
</template>

<script>
import Store from '../../store'
export default {
  setup () {
    const user = Store.User
    return {
      user
    }
  }
}
</script>
