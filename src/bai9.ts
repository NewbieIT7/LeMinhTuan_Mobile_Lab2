// bai9.ts
export const filterEven = new Promise<number[]>((resolve) => {
    setTimeout(() => {
      const arr = [1, 2, 3, 4, 5, 6];
      resolve(arr.filter((num) => num % 2 === 0));
    }, 1000);
  });