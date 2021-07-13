// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  var reversedString = str.split("").reverse().join("");
  if (str === reversedString) {
    return true;
  } 
  return false;
};
