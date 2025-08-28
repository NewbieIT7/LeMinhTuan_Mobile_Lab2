import { triple } from "./bai14";

// bai17.ts
export async function iteratePromises(): Promise<void> {
    const promises = [triple(1), triple(2), triple(3)];
    for await (const res of promises) {
      console.log("Iterated result:", res);
    }
  }