# Errors in JavaScript

JavaScript, like any programming language, can encounter errors during execution. These errors are categorized into different types and can be helpful for debugging and improving code quality. In this markdown document, we will explore common error types in JavaScript, provide examples, and explanations.

## Syntax Errors

Syntax errors occur when the code violates the rules of the JavaScript language. These errors are typically detected by the JavaScript engine during parsing before the code is executed.

**Example:**
```javascript
if (x > 10 {
    console.log("x is greater than 10");
}
```

**Explanation:**
In this example, the missing closing parenthesis in the `if` statement will result in a syntax error. The JavaScript engine can't understand the code due to the violation of language syntax rules.

## Reference Errors

Reference errors occur when trying to access variables or functions that do not exist or are not in scope.

**Example:**
```javascript
console.log(nonExistentVariable);
```

**Explanation:**
In this example, `nonExistentVariable` is not defined, which results in a reference error. The variable does not exist in the current scope.

## Type Errors

Type errors occur when a value is not of the expected type. For example, trying to call a method on an undefined variable or using an incompatible operation.

**Example:**
```javascript
let x = "Hello";
x.push(" World");
```

**Explanation:**
In this example, `push` is used on a string (`x`), but it's a method for arrays. This leads to a type error because you cannot push to a string.

## Range Errors

Range errors occur when trying to manipulate an object with some kind of length, and the manipulation is not allowed due to the length of the object.

**Example:**
```javascript
let arr = [1, 2, 3];
arr.length = -1;
```

**Explanation:**
In this example, setting the `length` of the array to a negative value results in a range error. The length of an array cannot be negative.

## Custom Errors

1. You can also create custom errors in JavaScript by extending the `Error` object or using the `throw` statement.

**Example:**
```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error(error.message);
}
```

**Explanation:**
In this example, a custom error is thrown when attempting to divide by zero. The error message is defined in the `Error` constructor and can be caught and handled with a `try...catch` block.

Certainly! Here's an extension to the previous section that includes information on creating custom errors by extending the `Error` class using the `extends` keyword:
<hr>

2. You can also create custom errors in JavaScript by extending the `Error` object using the `extends` keyword. This allows you to define your own error types with custom properties and behaviors.

**Example:**

```javascript
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyCustomError";
    }
}

function throwError() {
    throw new MyCustomError("This is a custom error.");
}

try {
    throwError();
} catch (error) {
    if (error instanceof MyCustomError) {
        console.error("Custom Error Caught:", error.message);
    } else {
        console.error("An unexpected error occurred:", error.message);
    }
}
```

**Explanation:**

In this example:

1. We create a custom error class `MyCustomError` that extends the built-in `Error` class. This custom error class can have its own constructor and properties.

2. In the `MyCustomError` constructor, we call `super(message)` to set the error message and set the `name` property to identify our custom error type.

3. We define a function `throwError` that throws an instance of `MyCustomError` with a custom error message.

4. Inside the `try...catch` block, we catch the error and check if it is an instance of `MyCustomError` using `instanceof`. If it is, we handle it as a custom error; otherwise, we treat it as an unexpected error.

Creating custom errors allows you to add context and specific behavior to different error scenarios in your application, making it easier to debug and maintain your code.
## Handling Errors

To gracefully handle errors, you can use `try...catch` blocks. This allows you to capture and handle exceptions, preventing them from crashing your program.

**Example:**
```javascript
try {
    // Code that may throw an error
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
}
```

**Explanation:**
In this example, the `try` block contains code that may throw an error. If an error occurs, it's caught in the `catch` block, where you can handle it gracefully.

Understanding and effectively handling errors is essential for writing robust and reliable JavaScript code. By recognizing different error types and using appropriate error-handling techniques, you can improve the quality and reliability of your JavaScript applications.