<template>
  <el-divider>
    <el-icon><span i-carbon-phone></span></el-icon>
  </el-divider>

  <footer flex justify-between items-center>
    <p>Powered by Nuxt</p>
    <p>
      联系站长：<span>{{ appConfig.contact }}</span>
    </p>
    <p>
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span i-mdi-github></span>
      </a>
    </p>
  </footer>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const links = [
  {
    icon: "mdi-github",
    name: "Github",
    link: appConfig.github,
  },
];
</script>
