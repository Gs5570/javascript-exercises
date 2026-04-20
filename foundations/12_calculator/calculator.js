const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
};

const multiply = function (numbers) {
  let total = 1;
  for (const num of numbers) {
    total *= num;
  }
  return total;
};

const power = function (base, exponent) {
  let total = 1;
  let baseArray = [];

  for (let i = 0; i < exponent; i++) {
    baseArray.push(base);
    total *= baseArray[i];
  }
  return total;
};

const factorial = function (num) {
  if (num === 0) {
    return 1; // ✅ 0! = 1 by definition, not 0
  }

  let total = 1; // ✅ start at 1, not 0 (multiplying by 0 gives 0)
  for (let i = 1; i <= num; i++) {
    total *= i; // ✅ multiply, not add
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
