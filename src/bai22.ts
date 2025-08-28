import { getTodo } from "./bai21";

// bai22.ts
export async function multipleTodos(): Promise<void> {
    for (let i = 1; i <= 3; i++) {
      const todo = await getTodo();
      console.log("Todo:", todo);
    }
  }