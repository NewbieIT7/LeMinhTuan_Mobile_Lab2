// bai3.ts
export function rejectError(): Promise<never> {
    return new Promise((_, reject) => setTimeout(() => reject("Something went wrong"), 1000));
  }