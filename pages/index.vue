<script lang="ts" setup>
import { logout } from '../services/Auth';

definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <button @click="logout">Sair</button>
</template>
