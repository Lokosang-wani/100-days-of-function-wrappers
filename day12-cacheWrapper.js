// day12-cacheWrapper.js
export function cacheWrapper(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("📦 Returning cached result");
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Example usage:
function add(a, b) {
  console.log("Computing...");
  return a + b;
}

const cachedAdd = cacheWrapper(add);
cachedAdd(2, 3); // Computes
cachedAdd(2, 3); // Cached
