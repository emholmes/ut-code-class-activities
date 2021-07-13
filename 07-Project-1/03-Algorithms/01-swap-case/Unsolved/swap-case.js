// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
  var newArray = [];
  var wordsArr = str.split(" ");

  for (var i = 0; i < wordsArr.length; i++) {
    var letterArr = wordsArr[i].split("");
    
    for (var j = 0; j < letterArr.length; j++) {

      if (letterArr[j] === letterArr[j].toUpperCase()) {
        letterArr[j] = letterArr[j].toLowerCase();
      } else if (letterArr[j] === letterArr[j].toLowerCase()) {
        letterArr[j] = letterArr[j].toUpperCase();
      }
      
    }
    letterArr = letterArr.join("");
    newArray.push(letterArr);
  }
  return newArray.join(" ");
};
