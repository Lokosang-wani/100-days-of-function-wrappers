// day03-onceWrapper.js
export function onceWrapper(fn) {
  let called = false;
  let value;
  return function (...args) {
    if (!called) {
      value = fn(...args);
      called = true;
    } else {
      console.log(`⚠️ ${fn.name} can only be called once`);
    }
    return value;
  };
}

// Example usage:
function greet(name) {
  return `Hello, ${name}!`;
}

const greetOnce = onceWrapper(greet);
greetOnce("Alice"); // Works
greetOnce("Bob"); // Warns
