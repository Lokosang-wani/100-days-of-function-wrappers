// day06-typeCheckWrapper.js
export function typeCheckWrapper(fn, expectedTypes = []) {
  return function (...args) {
    for (let i = 0; i < expectedTypes.length; i++) {
      if (typeof args[i] !== expectedTypes[i]) {
        console.log(
          `❌ Argument ${i + 1} should be ${
            expectedTypes[i]
          }, got ${typeof args[i]}`
        );
        return;
      }
    }
    return fn(...args);
  };
}

// Example usage:
function sum(a, b) {
  return a + b;
}

const typedSum = typeCheckWrapper(sum, ["number", "number"]);
typedSum(5, 10); // Works
typedSum(5, "10"); // Blocks
