function secondHighest(arr) {
  
  if (arr.length <= 1) {
    return -Infinity;
  }

  arr.sort((a, b) => b - a);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[0]) {
      return arr[i];
    }
  }

  return -Infinity;
}