// day35-progressWrapper.js
export function progressWrapper(fn, onProgress) {
  return async function (...args) {
    onProgress?.("⏳ Started...");
    try {
      const result = await fn(...args);
      onProgress?.("✅ Done!");
      return result;
    } catch (err) {
      onProgress?.("❌ Failed!");
      throw err;
    }
  };
}

// Example usage:
async function fakeDownload() {
  return new Promise((res) => setTimeout(() => res("Downloaded!"), 1000));
}

const withProgress = progressWrapper(fakeDownload, console.log);
withProgress();
