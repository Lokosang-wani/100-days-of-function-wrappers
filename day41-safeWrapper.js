// day41-safeWrapper.js
export function safeWrapper(fn) {
  return async function (...args) {
    try {
      return [null, await fn(...args)];
    } catch (err) {
      return [err, null];
    }
  };
}

// Example usage:
async function riskyTask() {
  throw new Error("Oops");
}

const safeTask = safeWrapper(riskyTask);
safeTask().then(console.log); // [Error, null]
