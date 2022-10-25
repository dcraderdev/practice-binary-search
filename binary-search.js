// Time Complexity of O(n)
function linearSearch(arr, target) {
  return (search = arr.indexOf(target));
}

// Time Complexity of O(logN)

// Compare the target value to the midpoint value
function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;

  // While high and low indices do not overlap...
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    // Find the midpoint between high and low indices
    let midpoint = arr[mid];
    // If the target equals the midpoint...
    // Return the midpoint index
    if (target === midpoint) {
      return mid;
    }
    // If the target is higher than the midpoint...
    // Move the low pointer to midpoint + 1
    if (target > midpoint) {
      low = mid + 1;
    }
    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1
    if (target < midpoint) {
      high = mid - 1;
    }
  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

// Time Complexity of O(logN)
let recursiveBinarySearch = function (arr, target, low = 0, high = arr.length - 1) {

  // Base Condition
  if (low >= high) {
    return -1;
  }

  // Find the middle index
  let mid = Math.floor((high + low) / 2);
  let midpoint = arr[mid];

  // Compare mid with given key search
  if (midpoint === target) {
    return mid
  }

  // If element at mid is greater than target,
  // search in the left half of mid
  if (midpoint > target) {
    return recursiveBinarySearch(arr, target, high, mid + 1);
  }

  // If element at mid is smaller than target,
  // search in the right half of mid
  if (midpoint < target) {
    return recursiveBinarySearch(arr, target, mid - 1, low);
  }
};

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;


console.log(recursiveBinarySearch(arr, x));
console.log(binarySearch(arr, x));
console.log(linearSearch(arr, x));

module.exports = [linearSearch, binarySearch];
