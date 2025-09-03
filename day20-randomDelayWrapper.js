// day20-randomDelayWrapper.js
export function randomDelayWrapper(fn, min = 200, max = 1000) {
  return async function (...args) {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`⏳ Waiting ${delay}ms...`);
    await new Promise((res) => setTimeout(res, delay));
    return fn(...args);
  };
}

// Example usage:
function fetchData() {
  return "Fetched data!";
}

const delayedFetch = randomDelayWrapper(fetchData, 300, 800);
delayedFetch().then(console.log);
