<template>
  <el-card position-center w-40vw h-20vh>
    <el-form :model="form" size="large" label-position="top">
      <el-form-item label="请输入校验码：" :error="errorMsg">
        <el-input v-model="form.validCode" placeholder="请输入校验码" />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="valid"
          :disabled="form.validCode.length <= 0"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { setAuthenticated } from "~/composables/storage";
const route = useRoute();
const router = useRouter();
const form = reactive({
  validCode: "",
});
const errorMsg = ref("");

const valid = () => {
  setAuthenticated(form)
    .then(() => {
      ElMessage.success("校验成功");

      if (route.query.redirect) {
        router.push({ path: route.query.redirect as string });
      } else {
        router.push("/");
      }
    })
    .catch((rej) => {
      // error.value = rej.msg;
      errorMsg.value = "校验码错误，请重新输入";
    });
};

definePageMeta({
  layout: "no-header",
});
</script>
