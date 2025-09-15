// day30-raceWrapper.js
export function raceWrapper(fns) {
  return function (...args) {
    return Promise.race(fns.map((fn) => fn(...args)));
  };
}

// Example usage:
const fast = () => new Promise((res) => setTimeout(() => res("⚡ Fast!"), 200));
const slow = () =>
  new Promise((res) => setTimeout(() => res("🐢 Slow!"), 1000));

const first = raceWrapper([fast, slow]);
first().then(console.log); // "⚡ Fast!"
