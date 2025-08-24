// day10-retryWrapper.js
export function retryWrapper(fn, attempts = 3) {
  return function (...args) {
    let lastError;
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (err) {
        lastError = err;
        console.log(`⚠️ Attempt ${i + 1} failed`);
      }
    }
    console.error(`❌ All ${attempts} attempts failed`);
    throw lastError;
  };
}

// Example usage:
let tries = 0;
function unstableTask() {
  tries++;
  if (tries < 3) throw new Error("Random fail");
  return "Success!";
}

const reliableTask = retryWrapper(unstableTask, 5);
console.log(reliableTask()); // Succeeds after retries
