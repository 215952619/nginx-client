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
  </ElContainer>
</template>
