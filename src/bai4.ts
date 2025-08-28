// bai4.ts
export const randomPromise = new Promise<number>((resolve) => {
    setTimeout(() => resolve(Math.random()), 1000);
  });