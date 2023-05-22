<template>
  <el-card class="box-card">
    <p>请输入验证码：</p>
    <input type="text" v-model="validCode" />
    <el-button @click="valid">验证</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { setAuthenticated } from "~/composables/storage";
const route = useRoute();
const router = useRouter();
const validCode = ref("");
const valid = () => {
  setAuthenticated();
  if (route.query.redirect) {
    nextTick(() => {
      router.push({ path: route.query.redirect as string });
    });
  } else {
    router.push("/");
  }
};
</script>
