function rangeOfNumbers(startN, endN) {
  if ((startN, endN)) {
    return startN;
  } else if (startN > endN) {
    const countArray = rangeOfNumbers(startN, endN - 1);
    numbers.push(endN);
    return countArray;
  }
}

console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;
