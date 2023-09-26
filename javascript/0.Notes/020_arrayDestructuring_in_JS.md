# Array Destructuring
In JavaScript, array destructuring allows you to extract values from arrays and assign them to variables using a compact and expressive syntax. Here's an overview of how it works:
```
// Basic array destructuring
const [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Skipping values
const [x, , z] = [4, 5, 6];
console.log(x); // 4
console.log(z); // 6

// Rest element (collecting remaining values into an array)
const [first, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(rest);  // [20, 30, 40, 50]

// Default values
const [p = 1, q = 2] = [7];
console.log(p); // 7
console.log(q); // 2
```

## Nested Array Destructuring
Array destructuring can also be used with nested arrays:
```
const nestedArray = [1, [2, 3], 4];
const [x, [y, z], w] = nestedArray;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3
console.log(w); // 4
```
