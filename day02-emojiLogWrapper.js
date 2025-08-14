// day02-emojiLogWrapper.js
export function emojiLogWrapper(fn, emoji = "🚀") {
  return function (...args) {
    console.log(`${emoji} Calling ${fn.name} with:`, args);
    const result = fn(...args);
    console.log(`${emoji} Result:`, result);
    return result;
  };
}

// Example usage:
function multiply(a, b) {
  return a * b;
}

const funMultiply = emojiLogWrapper(multiply, "🔥");
funMultiply(5, 6);
