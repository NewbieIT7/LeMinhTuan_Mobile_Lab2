import { triple } from "./bai14";

// bai15.ts
export async function sequentialCalls(): Promise<void> {
    const res1 = await triple(1);
    const res2 = await triple(res1);
    console.log("Sequential result:", res2);
  }