<template>
  <Default :header="false">
    <slot></slot>
  </Default>
</template>

<script setup lang="ts">
import Default from "~/layouts/default.vue";
</script>
