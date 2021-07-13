// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
  var wordsArr = str.split(" ");
  var longestWord = 0;
  var index = 0;
  for (var word of wordsArr) {
    if (word.length > longestWord) {
      longestWord = word.length;
      index = wordsArr.indexOf(word);
    }
  }
  return wordsArr[index];
};
