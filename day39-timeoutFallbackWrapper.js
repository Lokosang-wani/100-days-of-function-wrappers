// day39-timeoutFallbackWrapper.js
export function timeoutFallbackWrapper(fn, ms, fallbackValue) {
  return async function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((res) => setTimeout(() => res(fallbackValue), ms)),
    ]);
  };
}

// Example usage:
async function slowTask() {
  return new Promise((res) => setTimeout(() => res("Done"), 2000));
}

const safeTask = timeoutFallbackWrapper(slowTask, 1000, "⚠️ Fallback result");
safeTask().then(console.log);
