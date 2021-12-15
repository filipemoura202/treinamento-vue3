<template>
  <div class="bg-white flex justify-center w-full">
    <div class="flex flex-col items-center w-4/5 max-w-6xl my-16">
      <h1 class="text-4xl font-black text-center text-gray-800">Alguma dúvida?</h1>
      <p class="text-lg text-center text-gray-800 font-regular">
        Quer saber melhor como funciona e quais são os preços?
      </p>
      <div class="mt-10">
        <button
          class="bg-brand-main px-6 py-2 mt-10 font-bold text-white rounded-full focus:outline-none"
          @click="() => emit('emailed')"
        >
          Nos mande um e-mail!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup (_, { emit }) {
    return { emit }
  }
}
</script>
