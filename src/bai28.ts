import { simulateTask } from "./bai5";

// bai28.ts
export async function batchProcess(): Promise<string[]> {
    const tasks = Array.from({ length: 5 }, (_, i) => simulateTask(1000 * (i + 1)));
    return await Promise.all(tasks);
  }