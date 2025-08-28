// bai30.ts
export async function batchCalls(): Promise<void> {
    const promises = [
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("invalid-url") // Will fail
    ].map(p => p.then(res => res.json()).catch(err => err));
  
    const results = await Promise.allSettled(promises);
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Success:", result.value);
      } else {
        console.log("Failure:", result.reason);
      }
    });
  }