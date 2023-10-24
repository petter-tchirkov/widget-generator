<template>
  <main class="flex">
    <aside
      class="h-screen transition-width duration-100"
      :class="[globalStore.isSidebarOpen ? 'w-fit' : 'w-64']">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div class="w-full px-2">
          <Icon
            name="material-symbols:arrow-back-rounded"
            @click="globalStore.isSidebarOpen = !globalStore.isSidebarOpen" />
        </div>
        <NuxtLink
          v-for="route in routes"
          :key="route.route"
          :to="route.route"
          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <Icon
            :name="route.icon"
            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span
            :class="[globalStore.isSidebarOpen ? 'w-0 text-transparent' : 'w-auto ml-3']"
            class="group-hover:font-bold transition-all"
            >{{ route.name }}</span
          >
        </NuxtLink>
      </div>
    </aside>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGlobalStore } from '~/store/global'

const globalStore = useGlobalStore()
const routes = ref([
  { route: '/', name: 'Home', icon: 'material-symbols:house' },
  { route: '/auth/login', name: 'Login', icon: 'material-symbols:login' }
])
</script>

<style scoped></style>
