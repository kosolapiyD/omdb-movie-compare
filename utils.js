const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      // apply is keep tracked of all the arguments that passed
      func.apply(null, args);
    }, delay);
  };
};
