// day11-timeoutWrapper.js
export function timeoutWrapper(fn, ms) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("⏰ Timeout")), ms);
      Promise.resolve(fn(...args))
        .then((result) => {
          clearTimeout(timer);
          resolve(result);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };
}

// Example usage:
const delayedTask = (ms) =>
  new Promise((res) => setTimeout(() => res("done"), ms));

const safeTask = timeoutWrapper(delayedTask, 1000);
safeTask(500).then(console.log).catch(console.error); // Works
safeTask(2000).then(console.log).catch(console.error); // Times out
