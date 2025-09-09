// day24-delayWrapper.js
export function delayWrapper(fn, ms = 500) {
  return async function (...args) {
    console.log(`⏳ Waiting ${ms}ms...`);
    await new Promise((res) => setTimeout(res, ms));
    return fn(...args);
  };
}

// Example usage:
function sayHello(name) {
  return `Hello, ${name}`;
}

const delayedHello = delayWrapper(sayHello, 1000);
delayedHello("Alice").then(console.log);
