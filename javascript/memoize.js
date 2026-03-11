function add(a, b) {
  for (let i = 0; i < 1000000000; i++) {}
  return a + b;
}

function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const result = memoize(add);
console.log(result(3, 5));
console.log(result(3, 5));

function memoize1(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

function debouncing(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
