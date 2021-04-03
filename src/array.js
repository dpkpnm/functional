// Array
const display = (arr) => arr.forEach((v) => console.log(v));
const add = (arr, val) => arr.push(val);
const insert = (arr, index, val) => arr.splice(index, 0, val);
const remove = (arr, index) => arr.splice(index, 1);

const binarySearch = (arr, val) => {
  let low = 0,
    high = arr.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    console.log(low, high, mid, arr[mid]);
    const el = arr[mid];
    if (el === val) return mid;
    if (el > val) high = mid - 1;
    if (el < val) low = mid + 1;
  }
  return -1;
};

const recursvieBinarySearch = (arr, low, high, val) => {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const el = arr[mid];
    if (val === el) return mid;
    if (val < arr[mid]) return recursvieBinarySearch(arr, low, mid - 1, val);
    if (val > arr[mid]) return recursvieBinarySearch(arr, mid + 1, high, val);
  }
  return -1;
};

const get = (arr, index) => arr[index];
const set = (arr, index, val) => (arr[index] = val);

const max = (arr) => {
  let maxVal = arr[0];
  arr.forEach((v) => {
    maxVal = v > maxVal ? v : maxVal;
  });
  return maxVal;
};

const min = (arr) => {
  let minVal = arr[0];
  arr.forEach((v) => {
    minVal = v < minVal ? v : minVal;
  });
  return minVal;
};

const min = (arr) => arr.reduce((min, v) => (val < min ? val : min), arr[0]);

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const reverse = (arr) => {
  for (i = 0, j = arr.length - 1; i < j; i++, j--) {
    swap(arr, i, j);
  }
  return arr;
};

const insertSort = (arr, val) => {
  arr.push(val);
  let i = arr.length - 1;
  while (i >= 0 && arr[i - 1] > val) {
    swap(arr, i, i - 1);
    i--;
  }
  console.log(arr);
};

const isSorted = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

const numberLine = (arr) => {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    while (arr[i] < 0) i++;
    while (arr[j] >= 0) j--;
    console.log(i, j, arr);
    if (i < j) swap(arr[i], arr[j]);
  }
  console.log(arr);
};
