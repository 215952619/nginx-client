export const isAuthenticated = () => {
  //   if (!window?.sessionStorage) {
  //     return false;
  //   }
  //   if (sessionStorage.getItem("__valid_auth__")) {
  //     return true;
  //   }
  return false;
};

export const setAuthenticated = () => {
  const { data } = useFetch("/api/valid");
  if (data.value?.code === 200) {
    sessionStorage.setItem("__valid_auth__", "true");
  }
};
