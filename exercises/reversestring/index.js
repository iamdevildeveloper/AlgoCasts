// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var explodedStr = str.split('');
    var reversedName = '';
    // Loop code method
    // var arrayLength = explodedStr.length - 1;
    // for (let index = arrayLength; index >= 0; index--) {
    //     reversedName += explodedStr[index];
    // }

    // Array method
    var reveredArray = explodedStr.reverse()
    reversedName = reveredArray.join('');
    return reversedName;

    // Single line code
    return str.split('').reverse().join('');
}

module.exports = reverse;
