// bai10.ts
export const finallyPromise = new Promise((resolve) => setTimeout(() => resolve("Success"), 1000))
  .finally(() => console.log("Done"));