module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  const controlSeq = [
    "--double-next",
    "--double-prev",
    "--discard-prev",
    "--discard-next",
  ];
  for (let i = 0; i < arr.length; i++) {
    if (controlSeq.includes(arr[i])) {
      if (
        arr[i] === "--double-next" ||
        (arr[i] === "--discard-next" && i + 1 >= arr.length)
      ) {
        arr.splice(i, 1);
      }
      if (
        arr[i] === "--double-prev" ||
        (arr[i] === "--discard-prev" && i - 1 < 0)
      ) {
        arr.splice(i, 1);
      }
      if (arr[i] === "--double-next") {
        arr.splice(i, 1, arr[i + 1]);
      }
      if (arr[i] === "--double-prev") {
        arr.splice(i, 1, arr[i - 1]);
      }
      if (arr[i] === "--discard-prev") {
        arr.splice(i - 1, 2);
      }
      if (arr[i] === "--discard-next") {
        arr.splice(i, 2);
      }
    }
  }
  return arr;
};
