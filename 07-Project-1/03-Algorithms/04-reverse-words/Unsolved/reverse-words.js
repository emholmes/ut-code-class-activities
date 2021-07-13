// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
  var wordsArr = str.split(" ");
  var newArr = [];
  
  for (var i = wordsArr.length - 1; i >= 0; i--) {
    newArr.push(wordsArr[i]);
    console.log(wordsArr[i]);
  }
  return newArr.join(" ");
  // return wordsArr.reverse().join(" ");
};