// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    var sum = 0;
    for (var num of arr) {
        sum += num;
    }
    return sum;
};
