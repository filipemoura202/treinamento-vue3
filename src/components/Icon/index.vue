<template>
    <component :is="name" v-bind="$props"/>
</template>

<script>
import Loading from './loading.vue'
import CrevronDown from './chevron-down.vue'
import Close from './close.vue'
import Copy from './copy.vue'

export default {
  components: {
    Loading,
    Close,
    Copy,
    CrevronDown
  },
  props: {
    name: { type: String, require: true }
  }
}
</script>

<style>

</style>
