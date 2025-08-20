// day08-errorCatcher.js
export function errorCatcher(fn) {
  return function (...args) {
    try {
      return fn(...args);
    } catch (err) {
      console.error(`❌ Error in ${fn.name}:`, err.message);
    }
  };
}

// Example usage:
function riskyDivide(a, b) {
  return a / b;
}

const safeDivide = errorCatcher(riskyDivide);
safeDivide(10, 2); // Works
safeDivide(10, 0); // Logs error
