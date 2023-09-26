# Conditionals in JavaScript
Conditionals in JavaScript allow you to make decisions in your code based on whether a specified condition evaluates to true or false. JavaScript provides several conditional statements to control the flow of your programs.

## 1. if Statement
The `if` statement is the fundamental conditional statement in JavaScript. It executes a block of code only if a specified condition is `true`.

#### Syntax:
```
if (condition) {
  // Code to be executed if the condition is true
}
```
#### Example:
```
if (condition) {
  // Code to be executed if the condition is true
}
```
<br>

## 2. if-else Statement
The if-else statement allows you to specify code to be executed if a condition is true, and an alternative code block to be executed if the condition is false.
#### Syntax:
```
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}

```
#### Example:
```
const isRaining = true;

if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("No need for an umbrella.");
}

```
<br>

## 3. if-else if-else Statement
The if-else if-else statement allows you to specify multiple conditions and corresponding code blocks to execute based on which condition is true.
#### Syntax:
```
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition2 is true
} else {
  // Code to be executed if none of the conditions are true
}

```
#### Example:
```
const temperature = 28;

if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature >= 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's cold outside.");
}

```
