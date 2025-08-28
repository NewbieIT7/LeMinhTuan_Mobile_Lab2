import { simulateTask } from "./bai5";

// bai29.ts
export async function queueProcess(): Promise<void> {
    const tasks = [1000, 2000, 1500];
    await tasks.reduce(async (prev, time) => {
      await prev;
      await simulateTask(time);
      console.log(`Task with ${time}ms done`);
    }, Promise.resolve());
  }