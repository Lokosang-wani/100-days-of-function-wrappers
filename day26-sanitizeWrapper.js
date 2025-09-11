// day26-sanitizeWrapper.js
export function sanitizeWrapper(fn) {
  return function (...args) {
    const cleanedArgs = args.map((arg) =>
      typeof arg === "string" ? arg.trim() : arg
    );
    return fn(...cleanedArgs);
  };
}

// Example usage:
function greet(name) {
  return `Hello, ${name}`;
}

const cleanGreet = sanitizeWrapper(greet);
console.log(cleanGreet("   Alice   ")); // "Hello, Alice"
