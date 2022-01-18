<template>
  <header-logged/>

    <div class="w-full flex justify-center bg-brand-gray">

      <div class="flex flex-col justify-center items-center h-64 w-4/5">

          <h1 class="text-4xl font-black text-center text-gray-800">
            Feedbacks
          </h1>

          <p class="text-lg text-gray-800 font-regular text-center">
            Detalhes de todos os feedbacks recebidos.
          </p>

      </div>

    </div>
    <div class="flex w-full h-full justify-center pb-20">
      <div class="w-4/5 max-w-6xl py-10 grid grid-cols-4 gap-2">

        <div>
          <h1 class="text-3xl font-black text-brand-darkgray">Listagem</h1>
          <suspense>
            <template #default>
              <filters
                @select="changeFeedbacksType"
                class="mt-8 animate__animated animate__fadeIn animate__faster"
              />
            </template>
            <template #fallback>
              <filters-loading
                class="mt-8"
              />
            </template>
          </suspense>
        </div>

        <div class="px-10 py-20 col-span-3">
          <p
            v-if="state.hasError"
            class="text-lg text-center text-gray-800 font-regular">
            Aconteceu erro ao carregar os feedbacks
          </p>

          <p
            v-if="!state.feedbacks.length && !state.isLoading"
            class="text-lg text-center text-gray-800 font-regular">
            Ainda não foi recebido feedbacks
          </p>

          <feedback-card-loading v-if="state.isLoading || state.isLoadingFeedbacks" />

          <feedback-card
            v-else
            v-for="(feedback, index) in state.feedbacks"
            :key="feedback.id"
            :is-opened="index === 0"
            :feedback="feedback"
            class="mb-8 mt-8 animate__animated animate__fadeIn animate__faster"
          />

        </div>

      </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import HeaderLogged from '../../components/HeaderLogged'
import Filters from './Filters'
import FiltersLoading from './FiltersLoading'
import FeedbackCardLoading from '../../components/FeedbackCard/Loading'
import FeedbackCard from '../../components/FeedbackCard'
import services from '../../services'
import { onMounted } from '@vue/runtime-core'

export default {
  components: {
    HeaderLogged,
    Filters,
    FiltersLoading,
    FeedbackCard,
    FeedbackCardLoading
  },
  setup () {
    const state = reactive({
      isLoading: false,
      isLoadingFeedbacks: false,
      feedbacks: [],
      pagination: {
        limit: 5,
        offset: 0
      },
      currentFeedbackType: '',
      hasError: false
    })

    onMounted(() => {
      fecthFeedbacks()
    })

    function handleErrors (error) {
      state.isLoading = false
      state.isLoadingFeedbacks = false
      state.hasError = !!error
    }

    async function changeFeedbacksType (type) {
      try {
        state.isLoadingFeedbacks = true
        state.pagination.offset = 0
        state.pagination.limit = 5
        const { data } = await services.feedbacks.getAll({
          type,
          ...state.pagination
        })

        state.feedbacks = data.results
        state.pagination = data.pagination
        state.isLoadingFeedbacks = false
      } catch (error) {
        handleErrors(error)
      }
    }

    async function fecthFeedbacks () {
      try {
        state.isLoading = true

        const { data } = await services.feedbacks.getAll({
          ...state.pagination,
          type: state.currentFeedbackType
        })

        state.feedbacks = data.results
        state.pagination = data.pagination
        state.isLoading = false
      } catch (error) {
        handleErrors(error)
      }
    }

    return {
      state,
      changeFeedbacksType
    }
  }
}
</script>
