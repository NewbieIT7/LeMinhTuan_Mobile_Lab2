import { triple } from "./bai14";

// bai16.ts
export async function parallelCalls(): Promise<void> {
    const [res1, res2, res3] = await Promise.all([triple(1), triple(2), triple(3)]);
    console.log("Parallel results:", res1, res2, res3);
  }