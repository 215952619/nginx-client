<template>
  <ElContainer h-100vh>
    <ElHeader
      v-if="header"
      :style="{
        height: 'var(--base-header-height)',
      }"
    >
      <slot name="header">
        <TheNav />
      </slot>
    </ElHeader>

    <ElMain position-relative>
      <slot></slot>
    </ElMain>

    <ElFooter
      v-if="footer"
      :style="{
        height: 'var(--base-footer-height)',
      }"
    >
      <slot name="footer">
        <TheFooter />
      </slot>
    </ElFooter>
  </ElContainer>
</template>

<script setup lang="ts">
defineProps({
  header: {
    type: Boolean,
    default: true,
  },
  footer: {
    type: Boolean,
    default: true,
  },
});
</script>
