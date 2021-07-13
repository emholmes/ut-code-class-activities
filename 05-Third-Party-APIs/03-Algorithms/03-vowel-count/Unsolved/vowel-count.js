// Write code to return the the number of vowels in `str`
var vowelCount = function(str) {
  var letters = str.toLowerCase().split("");
  var newArr = [];
  for (var letter of letters) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      newArr.push(letter);
    } 
  }
  return newArr.length; 
};
