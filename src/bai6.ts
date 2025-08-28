import { simulateTask } from "./bai5";

// bai6.ts
export const parallelTasks = Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500)
  ]);