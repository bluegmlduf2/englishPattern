<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="fixed top-16 w-56 text-right">
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
          class="absolute right-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                검색하기
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                신규 패턴 등록
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                패턴 메일로 받기
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
