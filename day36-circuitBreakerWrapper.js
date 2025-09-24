// day36-circuitBreakerWrapper.js
export function circuitBreakerWrapper(fn, failureLimit = 3, resetTime = 5000) {
  let failures = 0;
  let lastFailure = 0;

  return async function (...args) {
    if (failures >= failureLimit && Date.now() - lastFailure < resetTime) {
      throw new Error("🔌 Circuit breaker: function temporarily disabled");
    }

    try {
      const result = await fn(...args);
      failures = 0; // reset on success
      return result;
    } catch (err) {
      failures++;
      lastFailure = Date.now();
      throw err;
    }
  };
}

// Example usage:
let count = 0;
async function unstable() {
  count++;
  if (count < 3) throw new Error("Fail");
  return "Success!";
}

const safeUnstable = circuitBreakerWrapper(unstable, 2, 3000);
safeUnstable().catch(console.error);
safeUnstable().catch(console.error);
safeUnstable().catch(console.error);
