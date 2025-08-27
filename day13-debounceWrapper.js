// day13-debounceWrapper.js
export function debounceWrapper(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Example usage:
function search(query) {
  console.log(`Searching for ${query}`);
}

const debouncedSearch = debounceWrapper(search, 500);
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel"); // Only this one runs after pause
