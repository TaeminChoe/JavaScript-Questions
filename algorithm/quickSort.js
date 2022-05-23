const quickSort = (array) => {
  if (array.length < 2) return array;

  const pivot = [array.shift()];
  const left = [];
  const right = [];

  while (array.length) {
    if (pivot[0] < array[0]) {
      right.push(array.shift());
    } else if (pivot[0] > array[0]) {
      left.push(array.shift());
    } else {
      pivot.push(array.shift());
    }
  }
  // console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);

  return quickSort(left).concat(pivot, quickSort(right));
};

const arr = [21, 10, 12, 20, 25, 13, 15, 22];
console.log(`before :: ${arr}`);

const sortedArr = quickSort(arr);
console.log(`after :: ${sortedArr}`);
