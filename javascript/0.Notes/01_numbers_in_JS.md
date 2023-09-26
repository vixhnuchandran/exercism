# Numbers
In JavaScript, there are indeed two primary types for representing numbers: Number and BigInt. However, there is a key distinction between these two types:

## Number
The Number type represents regular, floating-point numbers, including integers and floating-point values with decimals. 
##### Examples of Number values:

```
42
-3.14
0.1
```
## BigInt
The BigInt type was introduced in modern JavaScript (ES11/ES2020) to handle arbitrarily large integers. Unlike regular numbers, BigInt can represent very large integers without losing precision.

Examples of BigInt values:

```
1234567890123456789012345678901234567890n
-9876543210987654321098765432109876543210n
```

#### Notes
Here's how you can distinguish between the two:

- If a number does not have a trailing n, it is treated as a regular Number.
- If a number has a trailing n, it is treated as a BigInt.
```
const regularNumber = 42; // Regular Number
const bigIntNumber = 1234567890123456789012345678901234567890n; // BigInt
```
<hr>
<br>





## Built-in Object
There are two built-in objects that are useful when dealing with numbers:
### Number Object
The Number object in JavaScript provides properties and methods for working with numeric values.

#### Properties:
- `Number.MAX_VALUE`: Represents the maximum positive numeric value that JavaScript can handle.
- `Number.MIN_VALUE: Represents the smallest positive `numeric value greater than 0.
- `Number.POSITIVE_INFINITY`: Represents positive infinity.
- `Number.NEGATIVE_INFINITY`: Represents negative infinity.
- `Number.MAX_SAFE_INTEGER`: Represents the largest safe integer value.
- `Number.MIN_SAFE_INTEGER`: Represents the smallest safe integer value.
#### Methods:
- `Number(value)`: Converts a value to a numeric type. Useful for type conversion.
```
const numericValue = Number("42");
console.log(numericValue); // Output: 42
```
- `Number.parseFloat(string)`: Parses a string and returns a floating-point number.
```
const floatValue = Number.parseFloat("3.14");
console.log(floatValue); // Output: 3.14
```
- `Number.parseInt(string, radix)`: Parses a string and returns an integer.
Instance methods for formatting numbers as strings and performing type conversions.
```
const integerValue = Number.parseInt("1010", 2); // Parsing binary "1010"
console.log(integerValue); // Output: 10
```

### Math Object
properties and methods for mathematical constants and functions, does not work with BigInt.
#### Methods:
- `Math.floor(x)`: Rounds a number down to the nearest integer.
```
const roundedDown = Math.floor(5.8);
console.log(roundedDown); // Output: 5
```
- `Math.ceil(x)`: Rounds a number up to the nearest integer.
```
const roundedUp = Math.ceil(5.1);
console.log(roundedUp); // Output: 6
```
- Methods for rounding numbers, including `Math.round(x)` for standard rounding.
```
const roundedNumber = Math.round(3.7);
console.log(roundedNumber); // Output: 4
```


## Special Numbers Values



#### More methods provided by the Math object

#### 1. Math.abs(x)
Returns the absolute (positive) value of a number x.
```
const number = 4.3;
const roundedUp = Math.ceil(number);
console.log(roundedUp); // Output: 5
```

#### 2. Math.ceil(x)
Rounds a number x up to the nearest integer.
```
const number = 4.3;
const roundedUp = Math.ceil(number);
console.log(roundedUp); // Output: 5
```

#### 3. Math.floor(x)
Rounds a number x down to the nearest integer.
```
const number = 4.9;
const roundedDown = Math.floor(number);
console.log(roundedDown); // Output: 4
```

#### 4. Math.round(x)
Rounds a number x to the nearest integer.
```
const number = 4.6;
const rounded = Math.round(number);
console.log(rounded); // Output: 5
```
#### 5. Math.max(x1, x2, ...)
Returns the largest of one or more numbers.
```
const largest = Math.max(3, 7, 2, 9);
console.log(largest); // Output: 9
```
#### 6. Math.min(x1, x2, ...)
Returns the smallest of one or more numbers.
```
const smallest = Math.min(3, 7, 2, 9);
console.log(smallest); // Output: 2
```

#### 7. Math.pow(x, y)
Returns the result of raising x to the power of y.
```
const result = Math.pow(2, 3);
console.log(result); // Output: 8
```

### 8. Math.sqrt(x)
Returns the square root of a number x.
```
const squareRoot = Math.sqrt(25);
console.log(squareRoot); // Output: 5
```

#### 9. Math.random()
Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
```
const randomValue = Math.random();
console.log(randomValue); // Output: A random number between 0 and 1
```

#### 10. Math.PI
Returns the mathematical constant Pi (approximately 3.141592653589793).
```
const piValue = Math.PI;
console.log(piValue); // Output: 3.141592653589793
```