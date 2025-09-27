// day38-cancelableWrapper.js
export function cancelableWrapper(fn) {
  let controller;
  return {
    run: (...args) => {
      controller = new AbortController();
      return fn(...args, controller.signal);
    },
    cancel: () => {
      if (controller) controller.abort();
      console.log("⛔ Cancelled");
    },
  };
}

// Example usage:
function fakeRequest(url, signal) {
  return new Promise((res, rej) => {
    const id = setTimeout(() => res(`Fetched ${url}`), 1000);
    signal.addEventListener("abort", () => {
      clearTimeout(id);
      rej(new Error("Cancelled"));
    });
  });
}

const request = cancelableWrapper(fakeRequest);
const promise = request.run("https://api.com/data");
setTimeout(() => request.cancel(), 500);
promise.catch(console.error);
