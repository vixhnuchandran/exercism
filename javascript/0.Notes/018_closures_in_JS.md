# Closures
Closures allow functions to retain access to variables from their containing (enclosing) scope, even after the outer function has finished executing. This behavior enables a wide range of advanced programming techniques and is commonly used in many JavaScript applications.

To understand closures, let's break down how they work step by step:

## 1. Function Definitions and Lexical Scopes
In JavaScript, when you define a function inside another function, the inner function has access to the variables and parameters of the outer (enclosing) function. This is known as lexical scoping, and it forms the basis of closures.
```
function outer() {
  let outerVar = 10;
  
  function inner() {
    console.log(outerVar);
  }
  
  return inner;
}

const closureFn = outer(); // outer() is called, and it returns inner
```
## 2. Creating a Closure
 In the example above, when outer() is called, it returns the inner function. At this point, closureFn becomes a closure because it "closes over" the outerVar variable. This means that closureFn retains access to outerVar even after outer() has completed execution.

## 3. Accessing Enclosed Variables
 You can now call closureFn, and it will still have access to outerVar, even though outer() has finished executing:
 ```
 closureFn(); // Prints 10
```
This is the essence of a closure: the ability of a function (closureFn in this case) to access and remember variables from its containing scope (outer() in this case).

<hr><br>

## Common Use Cases
Closures are widely used in JavaScript for various purposes:

### 1. Data Privacy and Encapsulation
 Closures allow you to create private variables. Variables inside the outer function are not directly accessible from the outside, providing a level of data privacy and encapsulation.
```
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
 ### 2. Callbacks and Event Handling
Closures are essential for handling asynchronous operations, callbacks, and event listeners. They ensure that callback functions retain access to the necessary data.
```
document.getElementById('myButton').addEventListener('click', function() {
  // This function is a closure, accessing variables from the surrounding scope
});
```

### 3. Functional Programming
Functional programming techniques like currying and memoization heavily rely on closures. Closures enable functions to remember their previous results and improve performance.
```
function memoize(func) {
  const cache = {};
  return function(arg) {
    if (arg in cache) {
      return cache[arg];
    } else {
      const result = func(arg);
      cache[arg] = result;
      return result;
    }
  };
}
```