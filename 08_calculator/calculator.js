const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
   return array.reduce((product, current) => product * current);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(number) {
  let result = 1;
  for(let i = 2; i <= number; i++) {
    result *= i;  
  }
  return result
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
