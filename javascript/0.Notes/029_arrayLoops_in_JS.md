# Array Loops
Array loops are fundamental constructs in programming used for iterating through arrays to access, modify, or perform operations on their elements. 

## For Loop:
A for loop is a common choice for iterating through arrays when you know the starting and ending conditions.
```
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```
## For...of Loop:
A modern loop that simplifies iterating through arrays, especially when you don't need to track an index.
```
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}
```
## For...in Loop:
While primarily used for objects, you can also use for...in to iterate over array indices.
```
const numbers = [1, 2, 3, 4, 5];
for (const index in numbers) {
  console.log(numbers[index]);
}
```
## ForEach Method:
The forEach() method is a built-in array method that allows you to iterate through each element of an array and execute a provided function for each element.
```
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});
```
## While Loop:
You can use a while loop when you want to iterate based on a condition.
```
const numbers = [1, 2, 3, 4, 5];
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
```

## Do...While Loop:
A do...while loop is similar to a while loop, but it guarantees that the loop body is executed at least once.
```
const numbers = [1, 2, 3, 4, 5];
let i = 0;
do {
  console.log(numbers[i]);
  i++;
} while (i < numbers.length);
```