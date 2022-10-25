function linearSearch(arr, target) {
  return (search = arr.indexOf(target));
}


  // Compare the target value to the midpoint value
function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;

  // While high and low indices do not overlap...
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
  // Find the midpoint between high and low indices
    let newMid = arr[mid];
  // If the target equals the midpoint...
  // Return the midpoint index
    if (target === newMid) {
      return mid;
    }  
  // If the target is higher than the midpoint...
  // Move the low pointer to midpoint + 1
    if (target > newMid) {
      low = mid + 1;
    }
  // If the target is less than the midpoint...
  // Move the high pointer to midpoint - 1
    if (target < newMid) {
      high = mid - 1;
    }
  }

  // Return -1 if the loop exits with overlapping pointers
  return -1
}

module.exports = [linearSearch, binarySearch];
