<template>{{ name }}</template>

<script setup lang="ts">
const route = useRoute();

const name = computed(() => route.params.name);

definePageMeta({
  middleware: "auth",
  validate: async (route) => {
    return /^\w+$/.test(route.params.name as string);
  },
});
</script>
