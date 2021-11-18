"use strict";

const findLongestWord = function (string) {
    let longestWord = "x";
    const splittedString = string.split(" ");
    for (const stringItem of splittedString) {
        if (stringItem.length > longestWord.length) {
            longestWord = stringItem;
        }
    }
    return longestWord;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

