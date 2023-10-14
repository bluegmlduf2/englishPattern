<script setup lang="ts">
import { ILink } from '~/types'

const { t } = useLang()

const lists = computed<ILink[]>(() => [
  { id: 1, title: 'Pinia Store', url: 'path1/pinia', icon: 'carbon:circle-solid' },
  { id: 1, title: t('modal'), url: 'path1/modal', icon: 'carbon:circle-solid' },
  { id: 1, title: 'Menu', url: 'path1/menu', icon: 'carbon:circle-solid' },
])
</script>

<template>
  <div class="mx-auto mt-4 max-w-sm">
    <div class="mb-10 flex items-center justify-between">
      <a target="_blank" href="#">TEST</a>
      <div class="flex space-x-2">
        <MoleculesLanguageChange />
      </div>
    </div>
    <div class="flex flex-col">
      <h1>{{ t("follow") }}</h1>
      <div class="flex w-full items-center justify-between py-2">
        <img
          class="h-20 w-20 rounded-full"
          height="160"
          width="160"
          src="https://www.asia-quest.jp/hubfs/AQJP/AQJP-News/AQlogo-PR.jpg"
          alt="AQ"
        >

        <div
          class="place-items-centerr grid grid-cols-3 justify-items-center gap-4 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:rounded-md [&>*]:bg-gray-100 [&>*]:p-3 dark:[&>*]:bg-gray-600"
        >
          <a
            target="blank"
            class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
            href="https://www.asia-quest.jp/en/"
          >
            <Icon name="carbon:link" />
          </a>

          <a
            class="hover:bg-gray-300 dark:hover:bg-gray-400"
            href="#"
            target="_blank"
          >
            <Icon name="carbon:link" />
          </a>

          <a
            target="blank"
            class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
            href="#"
          >
            <Icon name="carbon:link" />
          </a>
        </div>
      </div>
    </div>

    <ul role="list" class="mt-10 space-y-4">
      <li v-for="item in lists" :key="item.id">
        <AtomsList
          :link="{
            id: item.id,
            title: item.title,
            url: item.url,
            icon: item.icon,
          }"
        />
      </li>
    </ul>
  </div>
</template>
