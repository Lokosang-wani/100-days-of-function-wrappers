// day28-fetchRetryWrapper.js
export function fetchRetryWrapper(fn, retries = 3, delay = 500) {
  return async function (...args) {
    for (let i = 0; i <= retries; i++) {
      try {
        return await fn(...args);
      } catch (err) {
        console.log(`⚠️ Attempt ${i + 1} failed`);
        if (i < retries) await new Promise((res) => setTimeout(res, delay));
        else throw err;
      }
    }
  };
}

// Example usage:
async function fakeFetch() {
  if (Math.random() < 0.7) throw new Error("Network error");
  return "✅ Success!";
}

const safeFetch = fetchRetryWrapper(fakeFetch, 3, 300);
safeFetch().then(console.log).catch(console.error);
