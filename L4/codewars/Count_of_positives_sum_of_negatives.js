// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Первое решение
function countPositivesSumNegatives(input) {
  if (!input || !Array.isArray(input) || input.length === 0) return [];

  let countOfPositives = input.reduce((count, value) => count + (value > 0 ? 1 : 0), 0);
  let sumOfNegatives = input.reduce((sum, value) => sum + (value < 0 ? value : 0), 0);

  return [countOfPositives, sumOfNegatives];
}

// Второе решение
function countPositivesSumNegatives(input) {
  if (!input || !Array.isArray(input) || input.length === 0) {
    return [];
  }

  let count = 0;
  let sum = 0;
  
  input.forEach(num => {
    if (num > 0) count++;
    else if (num < 0) sum += num;
  });

  return [count, sum];
}

// Третье решение
function countPositivesSumNegatives(input) {
  if (!input || !Array.isArray(input) || input.length === 0) {
    return [];
  }

  return input.reduce(([count, sum], num) => {
    if (num > 0) {
      return [count + 1, sum];
    }
    if (num < 0) {
      return [count, sum + num];
    }
    return [count, sum];
  }, [0, 0]);
}