<template>
    <h1>Hello World</h1>
</template>

<script>
export default {
  props: {
    maxWidht: {
      type: Number,
      default: 100
    },
    minWidht: {
      type: Number,
      default: 80
    },
    animationDuration: {
      type: String,
      default: '1.6s'
    },
    height: {
      type: String,
      default: '1rem'
    },
    width: {
      type: String,
      default: '1rem'
    }
  }
}
</script>
