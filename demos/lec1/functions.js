// Traditional function declaration
function add(a, b) {
  return a + b;
}

// Arrow function equivalent
const addArrow = (a, b) => {
  return a + b;
};

// Arrow function with implicit return (for single expressions)
const addImplicit = (a, b) => a + b;

console.log("Traditional function:", add(2, 3));
console.log("Arrow function:", addArrow(2, 3));
console.log("Implicit return arrow function:", addImplicit(2, 3));

// Function with default parameters
const greet = (name = "Guest") => `Hello, ${name}!`;

console.log(greet());
console.log(greet("Alice"));

// Higher-order function example (similar to map)
const applyOperation = (x, y, operation) => operation(x, y);

console.log("Apply operation (add):", applyOperation(5, 3, add));
console.log(
  "Apply operation (multiply):",
  applyOperation(5, 3, (a, b) => a * b), // look! it's an anonymous function
);
console.log(
  "Apply operation (add then multiply):",
  applyOperation(5, 3, (a, b) => {
    a += 1;
    return a * b;
  }),
);

const myFunc = (x, y) => {
  const sum = x + y;
  return `The sum is ${sum}`;
};
// Immediately Invoked Function Expression (IIFE)
const result = myFunc(5, 7);
console.log("myFunc result:", result);

// Also an IIFE
const resultIIFE = ((x, y) => {
  const sum = x + y;
  return `The sum is ${sum}`;
})(5, 7);
console.log("myFuncIIFE result:", resultIIFE);
