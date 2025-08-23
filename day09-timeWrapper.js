// day09-timeWrapper.js
export function timeWrapper(fn) {
  return function (...args) {
    const start = Date.now();
    const result = fn(...args);
    const end = Date.now();
    console.log(`⏱️ ${fn.name} took ${end - start}ms`);
    return result;
  };
}

// Example usage:
function slowTask() {
  for (let i = 0; i < 1e6; i++) {} // Fake work
  return "done";
}

const timedTask = timeWrapper(slowTask);
timedTask();
