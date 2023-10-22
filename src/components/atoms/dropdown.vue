<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
import { availableLocales } from '~/availableLocales'

const switchLocalePath = useSwitchLocalePath()

const { locale } = useI18n()

const local = computed(() => {
  return locale.value
})
const { t } = useLang()
</script>

<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="p-1">
          <svg class="text-black" width="30" height="30" viewBox="0 0 20 20"><path fill="currentColor" d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z" /></svg>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                {{ t("search") }}
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                {{ t("register") }}
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                {{ t("receive") }}
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <NuxtLink
              v-for="lang in availableLocales"
              :key="lang.iso"
              :to="switchLocalePath(lang.iso)"
              class="flex w-full cursor-pointer items-center justify-between py-2 px-3"
              :class="{
                'text-white-500 bg-gray-200 dark:bg-gray-500/50':
                  local === lang.iso,
                'hover:bg-gray-200 dark:hover:bg-gray-700/30':
                  local !== lang.iso,
              }"
            >
              <span class="truncate">
                {{ lang.name }}
              </span>
              <span class="flex items-center justify-center text-sm">
                <Icon :name="lang.flag" class="text-base" />
              </span>
            </NuxtLink>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
