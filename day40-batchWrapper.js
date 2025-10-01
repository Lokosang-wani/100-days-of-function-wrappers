// day40-batchWrapper.js
export function batchWrapper(fn, delay = 100) {
  let queue = [];
  let timer = null;

  return function (arg) {
    return new Promise((resolve) => {
      queue.push({ arg, resolve });
      if (!timer) {
        timer = setTimeout(() => {
          const items = queue;
          queue = [];
          timer = null;
          fn(items.map((i) => i.arg)).then((results) => {
            items.forEach((item, idx) => item.resolve(results[idx]));
          });
        }, delay);
      }
    });
  };
}

// Example usage:
async function fetchUsers(ids) {
  console.log("Fetching batch:", ids);
  return ids.map((id) => ({ id, name: `User${id}` }));
}

const batchedFetch = batchWrapper(fetchUsers, 200);
batchedFetch(1).then(console.log);
batchedFetch(2).then(console.log);
batchedFetch(3).then(console.log);
