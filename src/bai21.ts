// bai21.ts
export async function getTodo(): Promise<any> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
  }