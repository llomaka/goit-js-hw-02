"use strict";

const checkForSpam = function (message) {
  if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) return true;
  return false;
};


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

console.log(checkForSpam('NOT SPAM! INTERNAL HR MESSAGE')); // true