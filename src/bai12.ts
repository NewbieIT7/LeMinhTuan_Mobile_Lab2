import { simulateTask } from "./bai5";

// bai12.ts
export async function runTask(): Promise<void> {
    const result = await simulateTask(2000);
    console.log(result);
  }