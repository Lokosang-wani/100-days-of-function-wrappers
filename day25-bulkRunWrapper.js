// day25-bulkRunWrapper.js
export function bulkRunWrapper(fn) {
  return function (inputs) {
    if (!Array.isArray(inputs)) {
      console.log("❌ Input must be an array");
      return;
    }
    return inputs.map((item) => fn(item));
  };
}

// Example usage:
function square(n) {
  return n * n;
}

const bulkSquare = bulkRunWrapper(square);
console.log(bulkSquare([1, 2, 3, 4]));
