function sumFibonacci(num) {
  if (num < 1) {
    return [];
  } else {
    var fib = [1, 1, 2, 3, 5, 8];
    for (var i = 2; i < num + 1; i++) {
      fib.push(fib[num - 2] + fib[num - 1]);
    }
    return sumFibonacci[num];
  }
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
