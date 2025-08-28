// bai23.ts
export async function filterTodos(): Promise<any[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    return todos.filter((todo: any) => !todo.completed);
  }