// day29-queueWrapper.js
export function queueWrapper(fn) {
  let last = Promise.resolve();
  return function (...args) {
    last = last.then(() => fn(...args));
    return last;
  };
}

// Example usage:
function task(id) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(`Task ${id} done`);
      res();
    }, 500);
  });
}

const queuedTask = queueWrapper(task);
queuedTask(1);
queuedTask(2);
queuedTask(3);
