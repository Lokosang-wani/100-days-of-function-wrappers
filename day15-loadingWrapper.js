// day15-loadingWrapper.js
export function loadingWrapper(fn) {
  return async function (...args) {
    console.log("⏳ Loading...");
    const result = await fn(...args);
    console.log("✅ Done!");
    return result;
  };
}

// Example usage:
const fetchData = () =>
  new Promise((res) => setTimeout(() => res("Data loaded"), 1000));

const wrappedFetch = loadingWrapper(fetchData);
wrappedFetch().then(console.log);
