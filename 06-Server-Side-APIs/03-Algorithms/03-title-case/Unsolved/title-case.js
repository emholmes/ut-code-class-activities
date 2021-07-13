// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  var newArray = [];
  var wordsArr = str.split(" ");

  for (var i = 0; i < wordsArr.length; i++) {
    var letters = wordsArr[i].split("");
    letters[0] = letters[0].toUpperCase();
    letters = letters.join("");
    newArray.push(letters);
  }
  return newArray.join(" ");
  
};
