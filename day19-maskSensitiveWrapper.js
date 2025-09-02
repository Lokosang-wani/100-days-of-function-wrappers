// day19-maskSensitiveWrapper.js
export function maskSensitiveWrapper(fn) {
  return function (...args) {
    const safeArgs = args.map((arg) =>
      typeof arg === "string" && arg.includes("@")
        ? arg.replace(/(.{2}).+(@.+)/, "$1****$2") // mask emails
        : arg
    );
    console.log(`🔒 Running ${fn.name} with:`, safeArgs);
    return fn(...args);
  };
}

// Example usage:
function sendEmail(email, message) {
  return `Sent "${message}" to ${email}`;
}

const safeSend = maskSensitiveWrapper(sendEmail);
console.log(safeSend("test@example.com", "Hello!"));
