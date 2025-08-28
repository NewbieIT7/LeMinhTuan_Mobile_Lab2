import { rejectError } from "./bai3";

// bai13.ts
export async function handleError(): Promise<void> {
    try {
      await rejectError();
    } catch (error) {
      console.log("Caught error:", error);
    }
  }