<template>
    <span
      :class="`bg-${color}`"
      class="p-2 text-xs font-black text-white uppercase rounded-full"
    >
    {{ label }}
    </span>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
  props: {
    type: { type: String, required: true }
  },
  setup (props) {
    const label = computed(() => {
      if (props.type === 'ISSUE') {
        return 'Problema'
      }
      if (props.type === 'IDEA') {
        return 'Ideias'
      }

      return 'Outros'
    })

    const color = computed(() => {
      if (props.type === 'ISSUE') {
        return 'brand-danger'
      }
      if (props.type === 'IDEA') {
        return 'brand-warning'
      }

      return 'brand-graydark'
    })

    return {
      color,
      label
    }
  }

}
</script>
