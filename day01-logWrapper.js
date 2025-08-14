// day01-logWrapper.js

export function logWrapper(fn) {
  return function (...args) {
    console.log(`Calling ${fn.name} with:`, args);
    const result = fn(...args);
    console.log(`Result:`, result);
    return result;
  };
}

// Example usage:
function add(a, b) {
  return a + b;
}

const loggedAdd = logWrapper(add);
loggedAdd(3, 4); // Logs: Calling add with: [3,4] → Result: 7
