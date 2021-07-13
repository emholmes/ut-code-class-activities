// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
  var acronym = [];
  var wordsArr = str.split(" ");
  for (var i = 0; i < wordsArr.length; i++) {
    var letterArr = wordsArr[i].split("");
    letterArr[0] = letterArr[0].toUpperCase();
    acronym.push(letterArr[0]);
  }
  
  return acronym.join("");
};
