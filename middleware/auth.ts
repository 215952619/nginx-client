import { isAuthenticated } from "~/composables/storage";

export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  //   console.log(window);
  if (isAuthenticated() === false && to.path !== "/login") {
    return navigateTo(`/login?redirect=${to.path}`);
  }
});
