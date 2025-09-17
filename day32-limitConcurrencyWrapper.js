// day32-limitConcurrencyWrapper.js
export function limitConcurrencyWrapper(fn, limit = 2) {
  let active = 0;
  const queue = [];

  function runNext() {
    if (active < limit && queue.length) {
      active++;
      const { args, resolve, reject } = queue.shift();
      fn(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          active--;
          runNext();
        });
    }
  }

  return function (...args) {
    return new Promise((resolve, reject) => {
      queue.push({ args, resolve, reject });
      runNext();
    });
  };
}

// Example usage:
const asyncTask = (id) =>
  new Promise((res) =>
    setTimeout(() => {
      console.log(`Task ${id} finished`);
      res(id);
    }, 500)
  );

const limitedTask = limitConcurrencyWrapper(asyncTask, 2);
[1, 2, 3, 4, 5].forEach((id) => limitedTask(id));
