const reverseString = function(str) {
 var split = str.split("");
 var reverse = split.reverse();
 var joined = reverse.join("");
 return joined;
};

// Do not edit below this line
module.exports = reverseString;
