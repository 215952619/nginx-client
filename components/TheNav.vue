<template>
  <header>
    <nav>
      <ul>
        <li v-for="nav in navs" :key="nav.name">
          <nuxt-link :to="nav.path">{{ nav.name }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "conf default",
    path: "/conf/default",
  },
  {
    name: "conf store",
    path: "/conf/store",
  },
];
</script>
