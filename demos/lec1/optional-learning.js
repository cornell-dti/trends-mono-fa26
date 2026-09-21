/**
 * Advanced function concepts — interesting but not required.
 * Ask me about these in OH if you are curious.
 */

// Currying example
// Currying is the technique of converting a function that takes multiple arguments
// into a sequence of functions that each take a single argument

// Traditional curried function
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

// Arrow function curried equivalent
const multiplyArrow = (a) => (b) => a * b;

console.log("Curried multiply:", multiply(3)(4));
console.log("Curried multiply with arrow:", multiplyArrow(3)(4));

// Practical currying example: Creating specialized functions
const addTax = (taxRate) => (price) => price * (1 + taxRate);

const addNYTax = addTax(0.08875); // New York City tax rate
const addCATax = addTax(0.0725); // California tax rate 😎 (still high)

console.log("Price with NY tax:", addNYTax(100).toFixed(2));
console.log("Price with CA tax:", addCATax(100).toFixed(2));

// Closure example
const createCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counter = createCounter();

console.log("Counter:", counter()); // 1 🤯
console.log("Counter:", counter()); // 2 🤯🤯
console.log("Counter:", counter()); // 3 🤯🤯🤯
