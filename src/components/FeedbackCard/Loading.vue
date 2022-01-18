<template>
    <div
       class="flex flex-col bg-brand-gray p-4"
       width="100%"
       height="275px"
    >
    <div class="flex flex-column justify-between">
        <content-loader
            class="rounded-md"
            width="20%"
            height="28px"
        />

        <content-loader
            class="rounded-md"
            width="20%"
            height="28px"
        />
    </div>

    <content-loader
        class="mt-6 rounded-md"
        width="100%"
        height="28px"
    />

    <content-loader
        class="mt-6 rounded-md"
        width="65%"
        height="28px"
    />

    <content-loader
        class="mt-6 rounded-md"
        width="85%"
        height="28px"
    />

    </div>
</template>

<script>
import ContentLoader from '../ContentLoader'
export default {
  components: {
    ContentLoader
  }
}
</script>

<style>

</style>
