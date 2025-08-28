import { simulateTask } from "./bai5";

// bai7.ts
export const raceTasks = Promise.race([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500)
  ]);