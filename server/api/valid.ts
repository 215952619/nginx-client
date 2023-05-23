export default defineEventHandler((event) => {
  const query = getQuery(event);

  if (query.validCode === "123456") {
    return {
      code: 200,
      success: true,
      msg: "success",
    };
  } else {
    return {
      code: 40001,
      success: true,
      msg: "error validCode",
    };
  }
});
