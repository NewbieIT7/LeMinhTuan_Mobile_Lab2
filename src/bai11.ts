// bai11.ts
export async function asyncHello(): Promise<string> {
    return await new Promise((resolve) => setTimeout(() => resolve("Hello Async"), 2000));
  }