import { fetchUser } from "./bai18";

// bai19.ts
export async function fetchUsers(ids: number[]): Promise<{ id: number; name: string }[]> {
    return await Promise.all(ids.map((id) => fetchUser(id)));
  }