# Switch Statement
The switch statement provides an efficient way to select one of many code blocks to be executed based on the value of an expression.
#### Syntax:
```
switch (expression) {
  case value1:
    // Code to be executed if expression equals value1
    break;
  case value2:
    // Code to be executed if expression equals value2
    break;
  // Additional cases...
  default:
    // Code to be executed if none of the cases match
}

```
#### Example:
```
const dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend.");
    break;
  default:
    console.log("It's a regular day.");
}

```