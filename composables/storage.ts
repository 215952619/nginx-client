export const isAuthenticated = () => {
  //   if (!window?.sessionStorage) {
  //     return false;
  //   }
  //   if (sessionStorage.getItem("__valid_auth__")) {
  //     return true;
  //   }
  return false;
};

export const setAuthenticated = async (info: { validCode: string }) => {
  const { data } = await useFetch("/api/valid", {
    method: "GET",
    params: info,
  });
  if (data.value?.code === 200) {
    sessionStorage.setItem("__valid_auth__", "true");
  }

  return data.value?.code === 200
    ? Promise.resolve(data.value)
    : Promise.reject(data.value);
};
