const arr = [1, 2, 3, 4, 5];

console.log(arr);

const result = arr.reduce((acc, item) => {
  console.log(acc);
  return acc + item;
}, 0);

console.log(result);
