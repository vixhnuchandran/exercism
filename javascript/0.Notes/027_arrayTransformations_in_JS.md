# Array Transformations 
Array transformations are essential operations that allow you to manipulate arrays in JavaScript. These transformations help you create new arrays, modify existing ones, or extract specific information from arrays. Understanding and using these transformations is a fundamental skill for any JavaScript developer.

## Table of Contents

1. [Map](#map)
2. [Filter](#filter)
3. [Reduce](#reduce)
4. [ForEach](#foreach)

### 1. Map

The `map()` method creates a new array by applying a provided function to each element in the original array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

### 2. Filter

The `filter()` method creates a new array containing elements from the original array that satisfy a given condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

### 3. Reduce

The `reduce()` method allows you to reduce an array to a single value by applying a provided function cumulatively to the elements.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15
```

### 4. ForEach

The `forEach()` method is used to iterate through an array and perform an action on each element without creating a new array.

```javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit) => {
  console.log(`I like ${fruit}`);
});
```
