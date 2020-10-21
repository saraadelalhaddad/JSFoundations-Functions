/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Michael") logs "Hello Michael"
 */

function greet(name) {
  console.log(`Hello ${name}`)
}
 greet("Michael")

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 === 0)
  {
    console.log("Even");
    return false
  } 
  else  
  {
    console.log("Odd");
    return true
  }
}

console.log(isOdd(5))

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */

function oddsSmallerThan(n) {
  // Your code here
  if (n%2 !== 0) 
  {
    return((n-1)/2);
  } else {
    return n/2;
  }
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if(isOdd(n)) return n*n; 
  else return n*2;
}

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
