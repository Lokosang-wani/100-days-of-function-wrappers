// day04-callCountWrapper.js
export function callCountWrapper(fn) {
  let count = 0;
  return function (...args) {
    count++;
    console.log(`${fn.name} has been called ${count} times`);
    return fn(...args);
  };
}

// Example usage:
function sayHi() {
  return "Hi!";
}

const countedSayHi = callCountWrapper(sayHi);
countedSayHi();
countedSayHi();
