// day34-benchmarkWrapper.js
export function benchmarkWrapper(fn, runs = 5) {
  return function (...args) {
    let total = 0;
    for (let i = 0; i < runs; i++) {
      const start = performance.now();
      fn(...args);
      total += performance.now() - start;
    }
    console.log(`⏱ Avg execution time: ${(total / runs).toFixed(2)}ms`);
    return fn(...args);
  };
}

// Example usage:
function multiply(a, b) {
  return a * b;
}

const benchMultiply = benchmarkWrapper(multiply, 10);
benchMultiply(20, 30);
