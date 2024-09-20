// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    var explodedString = str.split('');
    var explodedStringLength = explodedString.length;
    var halfValue = Math.floor(explodedStringLength / 2);
    var firstCharacters = str.substring(0,halfValue);
    var minus = (explodedStringLength - halfValue*2);
    var subStringLength = halfValue+1;
    if(minus == 0){
        subStringLength = halfValue;
    }
    var lastCharacters =  str.substring(subStringLength, explodedStringLength);
    var reversedString = '';
    for(character of lastCharacters){
        reversedString = character + reversedString;
    }
    lastCharacters = reversedString;
    if(firstCharacters == lastCharacters) return true;
    return false;
}

module.exports = palindrome;
