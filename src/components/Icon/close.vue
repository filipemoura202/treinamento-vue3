<template>
  <svg :width="size" :height="size" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 1.91357L17.0864 0L9.5 7.58643L1.91357 0L0 1.91357L7.58643 9.5L0 17.0864L1.91357 19L9.5 11.4136L17.0864 19L19 17.0864L11.4136 9.5L19 1.91357Z" :fill="color"/>
   </svg>

</template>

<script>
export default {
  props: {
    size: { type: [String, Number], default: 22 },
    color: { type: String, default: 'white' }
  }
}
</script>

<style>

</style>
