<template>
    <content-loader
       class="flex flex-col bg-brand-gray p-4"
       width="100%"
       height="250px"
       animationDuration="2s"
    >

    <content-loader
        class="rounded-md"
        width="90%"
        height="50px"
        animationDuration="2.3s"
    />

    <content-loader
        class="mt-4 rounded-md"
        width="80%"
        height="50px"
        animationDuration="2.6s"
    />

    <content-loader
        class="mt-4 rounded-md"
        width="65%"
        height="50px"
        animationDuration="1.8s"
    />

    <content-loader
        class="mt-4 rounded-md"
        width="85%"
        height="50px"
    />

    </content-loader>
</template>

<script>
import ContentLoader from '../../components/ContentLoader'
export default {
  components: {
    ContentLoader
  }
}
</script>
