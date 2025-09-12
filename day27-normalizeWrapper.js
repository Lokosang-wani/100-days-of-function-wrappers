// day27-normalizeWrapper.js
export function normalizeWrapper(fn) {
  return function (...args) {
    const normalized = args.map((arg) =>
      typeof arg === "string" ? arg.toLowerCase() : arg
    );
    return fn(...normalized);
  };
}

// Example usage:
function greet(name) {
  return `Hello, ${name}`;
}

const normalizedGreet = normalizeWrapper(greet);
console.log(normalizedGreet("ALICE")); // "Hello, alice"
