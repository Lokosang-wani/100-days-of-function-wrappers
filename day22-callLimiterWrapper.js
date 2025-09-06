// day22-callLimiterWrapper.js
export function callLimiterWrapper(fn, maxCalls = 3) {
  let count = 0;
  return function (...args) {
    if (count >= maxCalls) {
      console.log(`🚫 ${fn.name} has reached its call limit (${maxCalls})`);
      return;
    }
    count++;
    return fn(...args);
  };
}

// Example usage:
function greet(name) {
  return `Hello, ${name}`;
}

const limitedGreet = callLimiterWrapper(greet, 2);
console.log(limitedGreet("Alice"));
console.log(limitedGreet("Bob"));
console.log(limitedGreet("Charlie")); // Blocked
