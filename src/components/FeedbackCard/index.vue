<template>
   <div
      @click="handleToggle"
      class="flex flex-col px-8 py-6 rounded bg-brand-gray cursor-pointer">
        <div class="flex items-center justify-between w-full mb-8">
            <badge :type="feedback.type" />

            <span class="font-regular text-brand-graydark">
                {{ getDiffTimeBetweenCurrentDate(feedback.createdAt) }}
            </span>
        </div>

        <div class="text-lg text-gray-800 font-medium">
          {{ feedback.text }}
        </div>

        <div
          class="flex w-full mt-8 animate__animated animate__fadeInDown animate__faster"
          :class="{
            animate__fadeOutUp: state.isClosing
          }"
          v-if="state.isOpen"
        >
          <div class="flex flex-col w-1/2">
            <div class="flex flex-col">
              <span class="font-medium text-base text-gray-400 select-none uppercase">Página</span>
              <span class="font-medium text-sm text-gray-600">{{ feedback.page }}</span>
            </div>
            <div class="flex flex-col mt-4">
              <span class="font-medium text-base text-gray-400 uppercase select-none">Dispositivo</span>
              <span class="font-medium text-sm text-gray-600">{{ feedback.device }}</span>
            </div>
          </div>
          <div class="flex flex-col w-1/2">
            <div class="flex flex-col">
              <span class="font-medium text-base text-gray-400 select-none uppercase">Ususário</span>
              <span class="font-medium text-sm text-gray-600">{{ feedback.fingerprint }}</span>
            </div>
          </div>

        </div>

        <div v-if="!state.isOpen" class="flex justify-end mt-8">
          <icon name="crevron-down" size="20" :color="brandColor.graydark"/>
        </div>

   </div>
</template>

<script>
import Badge from './Badge'
import { getDiffTimeBetweenCurrentDate } from '../../utils/date'
import Icon from '../Icon'
import pallete from '../../../pallete'
import { reactive } from '@vue/reactivity'
import { wait } from '../../utils/timeout'
export default {
  components: {
    Badge,
    Icon
  },
  props: {
    isOpened: { type: Boolean, default: false },
    feedback: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const state = reactive({
      isOpen: props.isOpened,
      isClosing: !props.isOpened
    })

    async function handleToggle () {
      state.isClosing = true

      await wait(250)

      state.isClosing = false
      state.isOpen = !state.isOpen
    }

    return {
      state,
      handleToggle,
      getDiffTimeBetweenCurrentDate,
      brandColor: pallete.brand
    }
  }

}
</script>

<style>

</style>
