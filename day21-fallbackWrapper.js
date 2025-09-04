// day21-fallbackWrapper.js
export function fallbackWrapper(fn, fallbackValue) {
  return function (...args) {
    try {
      return fn(...args);
    } catch (err) {
      console.log(`⚠️ Error in ${fn.name}, returning fallback`);
      return fallbackValue;
    }
  };
}

// Example usage:
function riskyParse(json) {
  return JSON.parse(json);
}

const safeParse = fallbackWrapper(riskyParse, {});
console.log(safeParse('{"ok": true}')); // Works
console.log(safeParse("bad json")); // Returns {}
