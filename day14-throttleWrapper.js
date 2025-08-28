// day14-throttleWrapper.js
export function throttleWrapper(fn, limit = 1000) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn(...args);
    }
  };
}

// Example usage:
function logScroll() {
  console.log("Scrolling at", Date.now());
}

const throttledScroll = throttleWrapper(logScroll, 2000);

// Imagine attaching to scroll event:
// window.addEventListener("scroll", throttledScroll);
