<script setup lang="ts">
import { ILink } from '~/types'
import { useEnglishPatternStore } from '@/store/english'

const { t } = useLang()

const lists = computed<ILink[]>(() => [
  { id: 1, title: 'Pinia Store', url: 'path1/pinia', icon: 'carbon:circle-solid' },
  { id: 1, title: t('modal'), url: 'path1/modal', icon: 'carbon:circle-solid' },
  { id: 1, title: 'Menu', url: 'path1/menu', icon: 'carbon:circle-solid' },
])

const englishPatternStore = useEnglishPatternStore()
await englishPatternStore.initEnglishPattern()
</script>

<template>
  <main class="min-h-screen bg-slate-200 px-6 py-4">
    <div class="bg-white max-w-screen-md rounded-lg shadow-2xl mx-auto px-4 pt-4 pb-8 md:px-6 relative">
      <AtomsDropdown class="absolute right-0 top-0" />
      <div class="md:flex md:justify-between md:items-center font-light text-gray-500 sm:text-lg pb-4 border-b-2">
        <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 ">
          Thank you for ~
        </h2>
        <p class="text-xl mt-2 md:mt-0 md:mr-4">
          ~해 주셔서 감사합니다
        </p>
      </div>
      <h3 class="text-2xl font-bold pt-4 pb-2">
        Useful Expression
      </h3>
      <ol class="space-y-3 md:space-y-1">
        <li class="md:flex md:justify-between">
          <p class="text-xl">
            Thank you for Calling
          </p>
          <p>전화해주셔서감사합니다</p>
        </li>
        <li class="md:flex md:justify-between">
          <p class="text-xl">
            Thank you for Waiting
          </p>
          <p>기다려주셔서 감사합니다</p>
        </li>
        <li class="md:flex md:justify-between">
          <p class="text-xl">
            Thank you for Your trouble
          </p>
          <p>애써 주셔서 감사합니다</p>
        </li>
      </ol>
      <h3 class="text-2xl font-bold pt-4 pb-2 mt-2">
        Dialogue
      </h3>
      <ul class="space-y-3 md:space-y-1">
        <li class="md:flex md:justify-between">
          <p class="text-lg">
            <span>A :</span>
            <span>Thank you for joining us</span>
          </p>
          <p>
            <span>A :</span>
            <span>함께 해 주신 것을 환영합니다</span>
          </p>
        </li>
        <li class="md:flex md:justify-between">
          <p class="text-lg">
            <span>B :</span>
            <span>Thank you for inviting us</span>
          </p>
          <p>
            <span>B :</span>
            <span>초대해 주셔서 감사합니다</span>
          </p>
        </li>
      </ul>
      <h3 class="text-2xl font-bold pt-4 pb-2 mt-2">
        Exercises
      </h3>
      <ul class="space-y-3 md:space-y-1">
        <li class="md:flex md:justify-between">
          <p class="text-lg">
            <span>Thank you for ____</span>
          </p>
          <p>
            <span>와 주셔서 감사합니다</span>
          </p>
        </li>
        <li class="md:flex md:justify-between">
          <p class="text-lg">
            <span>Thank you for ____</span>
          </p>
          <p>
            <span>모든것에 감사합니다</span>
          </p>
        </li>
      </ul>
    </div>
  </main>
</template>
