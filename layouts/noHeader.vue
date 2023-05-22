<template>
  <ElContainer h-100vh>
    <ElContainer>
      <slot name="main">
        <ElMain>
          <slot></slot>
        </ElMain>
      </slot>
    </ElContainer>
    <ElFooter
      :style="{
        height: 'var(--base-footer-height)',
      }"
      ><TheFooter
    /></ElFooter>
  </ElContainer>
</template>
