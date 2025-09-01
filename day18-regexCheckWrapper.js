// day18-regexCheckWrapper.js
export function regexCheckWrapper(fn, regex) {
  return function (...args) {
    if (args.some((arg) => typeof arg === "string" && !regex.test(arg))) {
      console.log(`❌ Input does not match required pattern`);
      return;
    }
    return fn(...args);
  };
}

// Example usage:
function greet(name) {
  return `Hello, ${name}!`;
}

const safeGreet = regexCheckWrapper(greet, /^[A-Z][a-z]+$/);
console.log(safeGreet("Alice")); // Works
console.log(safeGreet("alice")); // Fails
