// Write code to return the largest number in the given array

var maxNum = function(arr) {
  var highest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  return highest;
};
