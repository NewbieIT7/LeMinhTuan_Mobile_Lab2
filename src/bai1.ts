// bai1.ts
export const helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });