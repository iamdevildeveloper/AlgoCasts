// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var explodedStr = str.split('');
    var arrayLength = explodedStr.length - 1;
    var reversedName = '';
    for (let index = arrayLength; index >= 0; index--) {
        reversedName += explodedStr[index];
    }
    return reversedName;
}

module.exports = reverse;
