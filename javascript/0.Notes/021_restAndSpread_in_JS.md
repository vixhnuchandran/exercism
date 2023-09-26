# Rest and Spread
Rest and spread are two important concepts in modern programming languages. They are often used to work with arrays, objects, and function parameters. 

## Rest Operator
The rest operator, represented by three dots (...), allows you to collect multiple elements into a single variable, usually an array. It is used in function parameter lists or array destructuring to handle variable-length arguments or elements. Here's how it works:


### Rest Parameters in Functions 
In JavaScript, you can use rest parameters in function definitions to collect multiple arguments into a single array-like variable:
```
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40, 50)); // 150
```

### Rest in Array Destructuring 
You can also use the rest operator in array destructuring to collect the remaining elements into an array:
```
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]
```
### Rest in Object Destructuring 
you can use the rest operator with object destructuring to collect remaining properties into a new object
```
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York',
};

const { name, ...info } = person;
console.log(name); // Alice
console.log(info); // { age: 30, city: 'New York' }
```
<hr><br>

## Spread Operator
The spread operator, also represented by three dots (...), is used to expand elements from an iterable (like an array or an object) into another array, object, or function call arguments.

### Spread in Arrays
 you can use the spread operator to combine arrays, clone them, or insert elements:
 ```
 const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2]; // Combine arrays
console.log(combined); // [1, 2, 3, 4, 5, 6]

const cloned = [...arr1]; // Clone an array
console.log(cloned); // [1, 2, 3]

const withElement = [...arr1, 4]; // Insert an element
console.log(withElement); // [1, 2, 3, 4]
 ```

### Spread in Objects
you can use the spread operator to merge objects or create a shallow copy:
```
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const merged = { ...obj1, ...obj2 }; // Merge objects
console.log(merged); // { x: 1, y: 2, z: 3 }

const shallowCopy = { ...obj1 }; // Shallow copy
console.log(shallowCopy); // { x: 1, y: 2 }
```

### Spread in Function Calls
You can also use the spread operator to pass elements of an array as individual arguments to a function:
```
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const result = sum(...numbers);
console.log(result); // 6
```
### Spread in Object Literals
You can use the spread operator to clone an object and add or override properties:
```
const original = { a: 1, b: 2 };
const cloneWithNewProperty = { ...original, c: 3 };

console.log(cloneWithNewProperty); // { a: 1, b: 2, c: 3 }
```
