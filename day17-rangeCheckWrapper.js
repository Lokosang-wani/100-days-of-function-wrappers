// day17-rangeCheckWrapper.js
export function rangeCheckWrapper(fn, min, max) {
  return function (...args) {
    if (args.some((arg) => typeof arg !== "number" || arg < min || arg > max)) {
      console.log(`❌ Values must be between ${min} and ${max}`);
      return;
    }
    return fn(...args);
  };
}

// Example usage:
function square(n) {
  return n * n;
}

const safeSquare = rangeCheckWrapper(square, 1, 10);
console.log(safeSquare(5)); // Works
console.log(safeSquare(20)); // Fails
