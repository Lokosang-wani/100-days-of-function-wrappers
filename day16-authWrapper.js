// day16-authWrapper.js
export function authWrapper(fn, token) {
  return function (...args) {
    if (!token || token !== "secret123") {
      console.log("❌ Unauthorized: Invalid token");
      return;
    }
    return fn(...args);
  };
}

// Example usage:
function viewProfile(name) {
  return `Profile of ${name}`;
}

const secureProfile = authWrapper(viewProfile, "secret123");
console.log(secureProfile("Alice")); // Works
console.log(authWrapper(viewProfile)("Bob")); // Unauthorized
