<template>
  <section
    class="max-w-xl w-full border p-4 flex flex-col gap-4 bg-white rounded-xl shadow-md"
  >
    <h1 class="text-3xl text-center font-bold">Login</h1>
    <InputText
      v-model="creds.name"
      placeholder="Name"
    />
    <Password
      v-model="creds.password"
      class="w-full"
      toggle-mask
      placeholder="Password"
    />
    <Button
      size="large"
      label="Login"
      @click="router.push('/')"
    />
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
definePageMeta({
  layout: 'auth'
})

const creds = ref({
  name: '',
  password: ''
})
</script>

<style scoped></style>
