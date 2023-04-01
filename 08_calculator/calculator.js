const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let sum = 0;
  for(let num of numbers){
    sum += num;
  }
  return sum;
};

const multiply = function(numbers) {
  let sum = 1;
  for(let n of numbers){
    sum *= n;
  }
  return sum;

};

const power = function(a, n) {
  let sum = 1;
  for(let i = 0; i<n; i++){
    sum *= a;
  }
  return sum;
	
};

const factorial = function(number) {
	let sum = 1;
  for(let i = 1; i<=number; i++){
    sum *= i;
  }
  return sum;
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
