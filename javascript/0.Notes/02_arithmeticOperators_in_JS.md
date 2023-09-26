# Arithmetic Operators
JavaScript provides 6 different operators to perform basic arithmetic operations on numbers.
<hr>
 
### `+` : The addition operator 
is used to find the sum of numbers.

```1 + 2; // => 3
2.5 + 3.9; // => 6.5
```
<hr>
 
### `-` : The subtraction operator 
is used to find the difference between two numbers

```19 - 2; // => 17
7.4 - 1.2; // => 6.2

```
<hr>

### `*` : The multiplication operator 
is used to find the product of two numbers

```7 * 5; // => 35
9.2 * 6.3; // => 57.959999999999994
```
<hr>
 
### `/` : The division operator 
is used to divide two numbers. Since JavaScript numbers are always floating-point numbers, there is no integer division.

```8 / 2; // => 4
25 / 3; // => 8.333333333333334
```
<hr>

### `%` : The remainder operator 
is used  to find the remainder of a division performed.

```40 % 4; // => 0
11 % 4; // => 3
-11 % 4; // => -3
```
<hr>
 
### `** `: The exponentiation operator 
is used to raise a number to a power. It is the equivalent of using Math.pow()

```4 ** 3; // => 64
4 ** 1 / 2; // => 2
```
<br>

## Order of Operations

JavaScript uses the PEDMAS (Parentheses, Exponents, Division/Multiplication, Addition/Subtraction) rule we've learnt in elementary math classes.
```
const result = 3 ** 3 + 9 * 4 / (3 - 1);
// => 3 ** 3 + 9 * 4/2
// => 27 + 9 * 4/2
// => 27 + 18
// => 45
```

<br>

## Shorthand Assignment Operators
Shorthand assignment operators are a shorter way of writing code conducting arithmetic operations on a variable, and assigning the new value to the same variable. For example, consider two variables x and y. Then, x += y is same as x = x + y. Often, this is used with a number instead of a variable y. The 5 other operations can also be conducted in a similar style.
```
let x = 5;
x += 25; // x is now 30

let y = 31;
y %= 3; // y is now 1
```

<hr> <br>
references:
<br> <a href="https://javascript.info/operators#maths">  https://javascript.info/operators#maths </a>
<br> <a href="https://javascript.info/operators#modify-in-place">  https://javascript.info/operators#modify-in-place </a>