<template>
  <ElContainer h-100vh>
    <ElHeader
      :style="{
        height: 'var(--base-header-height)',
      }"
      ><TheNav
    /></ElHeader>
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
