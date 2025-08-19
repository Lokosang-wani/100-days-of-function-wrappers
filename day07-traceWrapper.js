// day07-traceWrapper.js
export function traceWrapper(fn) {
  return function (...args) {
    console.log(`🔍 Trace for ${fn.name}:`);
    console.trace();
    return fn(...args);
  };
}

// Example usage:
function sayHello(name) {
  return `Hello, ${name}`;
}

const tracedHello = traceWrapper(sayHello);
tracedHello("Alice");
