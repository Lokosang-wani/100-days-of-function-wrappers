// day23-spyWrapper.js
export function spyWrapper(fn) {
  const calls = [];
  function wrapped(...args) {
    calls.push(args);
    return fn(...args);
  }
  wrapped.getCalls = () => calls;
  return wrapped;
}

// Example usage:
function add(a, b) {
  return a + b;
}

const spiedAdd = spyWrapper(add);
spiedAdd(1, 2);
spiedAdd(3, 4);
console.log("Calls history:", spiedAdd.getCalls());
