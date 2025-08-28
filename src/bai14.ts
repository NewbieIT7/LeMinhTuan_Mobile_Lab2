// bai14.ts
export async function triple(num: number): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num * 3;
  }