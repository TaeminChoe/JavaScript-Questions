const merge = (left, right) => {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};

const mergeSort = (array) => {
  if (array.length === 1) return array;

  mid = Math.ceil(array.length / 2);
  // console.log(array.length, mid);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const arr = [21, 10, 12, 20, 25, 13, 15, 22];
const sortedArr = mergeSort(arr);

console.log(`before :: ${arr}`);
console.log(`after :: ${sortedArr}`);
