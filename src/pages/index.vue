<script setup lang="ts">
import { ILink } from '~/types'

const { t } = useLang()

const lists = computed<ILink[]>(() => [
  { id: 1, title: 'Pinia Store', url: 'path1/pinia', icon: 'carbon:circle-solid' },
  { id: 1, title: t('modal'), url: 'path1/modal', icon: 'carbon:circle-solid' },
  { id: 1, title: 'Menu', url: 'path1/menu', icon: 'carbon:circle-solid' },
])
// TODO nav추가 => 번역기능 , 입력템플릿, 검색기능, 페이지네이션, 메일전송기능
</script>

<template>
  <main class="bg-white dark:bg-gray-900 max-w-screen-md mx-auto">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div class="md:flex md:justify-between md:items-center font-light text-gray-500 sm:text-lg dark:text-gray-400 pb-4 border-b-2">
        <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Thank you for ~
        </h2>
        <p class="text-xl mt-2 md:mt-0">
          ~해 주셔서 감사합니다
        </p>
      </div>
      <h3 class="text-2xl font-bold py-3">
        Useful Expression
      </h3>
      <ol class="space-y-1">
        <li class="flex justify-between">
          <span>Thank you for Calling</span>
          <span>전화해주셔서감사합니다</span>
        </li>
        <li class="flex justify-between">
          <span>Thank you for Waiting</span>
          <span>기다려주셔서 감사합니다</span>
        </li>
        <li class="flex justify-between">
          <span>Thank you for Your trouble</span>
          <span>애써 주셔서 감사합니다</span>
        </li>
      </ol>
      <h3 class="text-2xl font-bold py-3 mt-2">
        Dialogue
      </h3>
      <ul class="space-y-1">
        <li>
          <span>A :</span>
          <span>Thank you for joining us</span>
        </li>
        <li>
          <span>B :</span>
          <span>Thank you for inviting us</span>
        </li>
      </ul>
      <ul class="space-y-1">
        <li>
          <span>A :</span>
          <span>함께 해 주신 것을 환영합니다</span>
        </li>
        <li>
          <span>B :</span>
          <span>초대해 주셔서 감사합니다</span>
        </li>
      </ul>
      <h3 class="text-2xl font-bold py-3 mt-2">
        Exercises
      </h3>
      <ol class="space-y-1">
        <li class="flex justify-between">
          <span>Thank you for ____</span>
          <span>와 주셔서 감사합니다</span>
        </li>
        <li class="flex justify-between">
          <span>Thank you for ____</span>
          <span>모든것에 감사합니다</span>
        </li>
      </ol>
    </div>
  </main>
</template>
