// bai27.ts
export async function fetchWithRetry(url: string, retries: number): Promise<any> {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (retries > 0) {
        return await fetchWithRetry(url, retries - 1);
      }
      throw error;
    }
  }