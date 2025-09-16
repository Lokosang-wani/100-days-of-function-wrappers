// day31-parallelWrapper.js
export function parallelWrapper(fns) {
  return function (...args) {
    return Promise.all(fns.map((fn) => fn(...args)));
  };
}

// Example usage:
const fn1 = () => new Promise((res) => setTimeout(() => res("Task 1"), 300));
const fn2 = () => new Promise((res) => setTimeout(() => res("Task 2"), 500));

const runAll = parallelWrapper([fn1, fn2]);
runAll().then(console.log); // ["Task 1", "Task 2"]
