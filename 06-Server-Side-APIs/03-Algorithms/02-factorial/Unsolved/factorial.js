// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  if (num === 0) {
    return 1;
  } 
  var result = 1;
  for (var i = num; i > 0; i--) { 
    result *= i;
  }
  return result;
};
