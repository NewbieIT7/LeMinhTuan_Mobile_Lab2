import { fetchUser } from "./bai18";

// bai20.ts
export async function fetchWithTimeout(id: number): Promise<{ id: number; name: string }> {
    const timeout = new Promise((_, reject) => setTimeout(() => reject("Timeout"), 2000));
    return await Promise.race([fetchUser(id), timeout]) as { id: number; name: string };
  }