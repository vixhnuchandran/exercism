# Arrays
In JavaScript, arrays are a fundamental data type, and they can contain elements of different data types, including numbers, strings, objects, and even other arrays. 
## Creating Arrays

### 1. Literal Notation
```
const fruits = ["apple", "banana", "cherry"];
```
### 2. Array Constructor
```
const cars = new Array("Toyota", "Honda", "Ford");
```
### 3. Empty Array
```
const emptyArray = [];
```

 ## Accessing Array Elements
 Array elements can be accessed using their index, with the first element at index 0.
 ```
 const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
```
## Array Properties and Methods

##  Properties
- `length`: Returns the number of elements in the array.
```
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // 3
```
## Common Methods
- `push()`: Adds one or more elements to the end of the array.
```
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "cherry", "orange"]
```
- `pop()`: Removes the last element from the array and returns it.
```
const removedFruit = fruits.pop();
console.log(removedFruit); // "orange"
console.log(fruits); // ["apple", "banana", "cherry"]
```
- `splice()` : Used for adding or removing elements from an array by specifying the index at which to start the modification and the number of elements to remove.
#### array.splice(start, deleteCount, item1, item2, ...);

```const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1);

console.log(fruits); // Output: ["apple", "cherry"]

```
- `unshift()`: Adds one or more elements to the beginning of the array.
```
fruits.unshift("grape");
console.log(fruits); // ["grape", "apple", "banana", "cherry"]
```
- `shift()`: Removes the first element from the array and returns it.
```
const removedFruit = fruits.shift();
console.log(removedFruit); // "grape"
console.log(fruits); // ["apple", "banana", "cherry"]
```
- `concat()`: Combines two or more arrays and returns a new array.
```
const moreFruits = ["pear", "kiwi"];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits); // ["apple", "banana", "cherry", "pear", "kiwi"]
```
- `slice()`: Returns a shallow copy of a portion of an array.
```
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ["banana", "cherry"]
```
