// day37-retryBackoffWrapper.js
export function retryBackoffWrapper(fn, retries = 3, baseDelay = 200) {
  return async function (...args) {
    for (let i = 0; i <= retries; i++) {
      try {
        return await fn(...args);
      } catch (err) {
        if (i === retries) throw err;
        const delay = baseDelay * 2 ** i;
        console.log(`⏳ Retry in ${delay}ms...`);
        await new Promise((res) => setTimeout(res, delay));
      }
    }
  };
}

// Example usage:
let attempt = 0;
async function sometimesFails() {
  attempt++;
  if (attempt < 3) throw new Error("Network error");
  return "Success!";
}

const safeCall = retryBackoffWrapper(sometimesFails, 4, 300);
safeCall().then(console.log).catch(console.error);
