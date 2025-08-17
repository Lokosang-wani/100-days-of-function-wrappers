// day05-nonEmptyWrapper.js
export function nonEmptyWrapper(fn) {
  return function (...args) {
    if (args.length === 0 || args.some((arg) => arg === null || arg === "")) {
      console.log("❌ Invalid input: empty values not allowed");
      return;
    }
    return fn(...args);
  };
}

// Example usage:
function joinWords(a, b) {
  return `${a} ${b}`;
}

const safeJoinWords = nonEmptyWrapper(joinWords);
safeJoinWords("Hello", "World"); // Works
safeJoinWords("", "World"); // Blocks
