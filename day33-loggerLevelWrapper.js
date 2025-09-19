// day33-loggerLevelWrapper.js
export function loggerLevelWrapper(fn, level = "info") {
  return function (...args) {
    const levels = {
      info: "ℹ️",
      warn: "⚠️",
      error: "❌",
    };
    console.log(`${levels[level] || ""} Calling ${fn.name} with:`, args);
    return fn(...args);
  };
}

// Example usage:
function add(a, b) {
  return a + b;
}

const warnAdd = loggerLevelWrapper(add, "warn");
console.log(warnAdd(2, 3));
