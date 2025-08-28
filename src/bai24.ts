// bai24.ts
export async function postData(): Promise<any> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
    });
    return await response.json();
  }