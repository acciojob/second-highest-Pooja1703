function secondHighest(arr) {
  if (arr.length <= 1) {
    return -Infinity;
  }

  let first = Math.max(...arr);
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first && arr[i] > second) {
      second = arr[i];
    }
  }

  return second;
}
