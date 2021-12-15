<template>
    <component :is="name" v-bind="$props"/>
</template>

<script>
import Loading from './loading.vue'
import Close from './close.vue'

export default {
  components: {
    Loading,
    Close
  },
  props: {
    name: { type: String, require: true }
  }
}
</script>

<style>

</style>
