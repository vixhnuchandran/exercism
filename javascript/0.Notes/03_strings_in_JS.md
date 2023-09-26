# Strings
A string is the JavaScript data type to store text data.

## Creating a String 
You create a string by wrapping the text in single quotes or double quotes.

```
'Hello, World!'
"Hello, World!"
```
## Strings as Lists of Characters
```
'cat'[1];
// => 'a'
```
You can determine the number of characters in a string by accessing the length property.
```
'cat'.length;
// => 3 
```
## Concatenation and Methods
The simplest way to concatenate strings is to use the addition operator +.
```
'I like' + ' ' + 'cats.';
// => "I like cats."
```
## Other helpful string methods

### toUpperCase()
The `toUpperCase()` method in JavaScript is used to convert all the characters in a given string to uppercase (capital letters). This method does not modify the original string but instead returns a new string with all characters converted to uppercase.
```
const originalString = "Hello, World!";
const uppercaseString = originalString.toUpperCase();

console.log(uppercaseString); // Output: "HELLO, WORLD!"
```

#### Notes
- The `toUpperCase()` method does not modify the original string; it returns a new string with the uppercase conversion.
- This method is useful for tasks such as case-insensitive string comparisons and ensuring consistent letter casing in text.
<hr>

### toLowerCase()
The `toLowerCase()` method in JavaScript is used to convert all the characters in a given string to lowercase (small letters). This method does not modify the original string but instead returns a new string with all characters converted to lowercase.

```
const mixedString = "Hello,123";
const lowercaseString = mixedString.toLowerCase();

console.log(lowercaseString); // Output: "hello,123"
```
#### Notes
- The `toLowerCase()` method does not modify the original string; it returns a new string with the lowercase conversion.
- This method is useful for tasks such as case-insensitive string comparisons and ensuring consistent letter casing in text.

<hr>

### trim() , trimEnd(), trimStart()
The `trim()` method in JavaScript is used to remove leading and trailing whitespace (spaces, tabs, and line breaks) from a string. It does not modify the original string but instead returns a new string with the whitespace removed.

The `trimEnd()` method in JavaScript is used to remove trailing whitespace (spaces, tabs, and line breaks) from the end of a string. It does not modify the original string but instead returns a new string with the trailing whitespace removed.

The `trimStart()` method in JavaScript is used to remove leading whitespace (spaces, tabs, and line breaks) from the beginning of a string. It does not modify the original string but instead returns a new string with the leading whitespace removed.
```
const stringWithWhitespace = "  Hello, World!   ";
const trimmedString = stringWithWhitespace.trim();

console.log(trimmedString); // Output: "Hello, World!"
---------------------------------------------------------



const stringWithTrailingWhitespace = "JavaScript     ";
const trimmedString = stringWithTrailingWhitespace.trimEnd();

console.log(trimmedString); // Output: "JavaScript"
---------------------------------------------------------


const stringWithLeadingWhitespace = "     JavaScript";
const trimmedString = stringWithLeadingWhitespace.trimStart();

console.log(trimmedString); // Output: "JavaScript"
```
<hr>

### slice()
The `slice()` method in JavaScript is used to extract a portion of a string or an array and create a new string or array containing the extracted elements. This method does not modify the original string or array but instead returns a new one with the selected elements.
```
const originalString = "Hello, World!";
const slicedString = originalString.slice(7);

console.log(slicedString); // Output: "World!"
```
#### Notes
- The `slice()` method is commonly used for extracting substrings from strings and subarrays from arrays without modifying the original data.
- When using the `slice()` method with arrays, negative indices can be used to count elements from the end of the array.
- The `slice()` method is versatile and allows you to extract portions of data efficiently in both strings and arrays.
<hr>

### subString()
The `substring()` method in JavaScript is used to extract a portion of a string and create a new string containing the extracted characters. This method does not modify the original string but instead returns a new one with the selected characters.
```
const originalString = "Hello, World!";
const substring = originalString.substring(7);

console.log(substring); // Output: "World!"
```
#### Notes
- The `substring()` method is commonly used for extracting substrings from strings without modifying the original data.
- If the startIndex is greater than the endIndex, the `substring()` method swaps the two values before extraction.
- The `substring()` method is versatile and allows you to extract portions of a string efficiently.
<hr>

### includes()
The `includes()` method in JavaScript is used to determine whether a string or an array includes a specified value. It checks for the presence of the value and returns true if found; otherwise, it returns false. This method is commonly used for searching for a particular item within a collection.
##### Basic Usage
```
const text = "Hello, World!";
const hasWorld = text.includes("World");

console.log(hasWorld); // Output: true
```
##### Specifying a Start Position
```
const text = "Hello, World!";
const hasWorld = text.includes("World", 7);

console.log(hasWorld); // Output: false
```
#### Notes
- The includes() method simplifies the process of searching for a value within a string or an array and returns a Boolean result.
- It is case-sensitive for strings, meaning it distinguishes between uppercase and lowercase characters.
<hr>

### startsWith()
The `startsWith()` method in JavaScript is used to determine whether a string begins with a specified substring. It returns true if the string starts with the specified substring; otherwise, it returns false. This method is often used for string validation and pattern matching.
##### Basic usage

```
const str = "Hello, World!";
const startsWithHello = str.startsWith("Hello");

console.log(startsWithHello); // Output: true
```
##### Specifying a Length

```
const str = "Hello, World!";
const startsWithWorld = str.startsWith("World", 7);

console.log(startsWithWorld); // Output: true
```
#### Notes
- The `startsWith()` method is case-sensitive, meaning it distinguishes between uppercase and lowercase characters. If you need a case-insensitive comparison, you can convert the string to lowercase or uppercase before using this method.
- It is a useful method for checking if a string starts with a specific prefix or for filtering strings based on their beginning.
<hr>

### endsWith()
The `endsWith()` method in JavaScript is used to determine whether a string ends with a specified substring. It returns true if the string ends with the specified substring; otherwise, it returns false. This method is often used for string validation and pattern matching.
##### Basic usage
``` 
basic usage
const str = "Hello, World!";
const endsWithWorld = str.endsWith("World!");

console.log(endsWithWorld); // Output: true
```
##### Specifying a Length
```const str = "Hello, World!";
const endsWithHello = str.endsWith("Hello", 5);

console.log(endsWithHello); // Output: true
```
<hr>

### substring()
The `substring()` method in JavaScript is used to extract a portion of a string and create a new string containing the extracted characters. This method does not modify the original string but instead returns a new one with the selected characters.
##### Basic Usage
```
const originalString = "Hello, World!";
const substring = originalString.substring(7);

console.log(substring); // Output: "World!"
```
##### Specifying Start and End Indices
```
const originalString = "Hello, World!";
const substring = originalString.substring(0, 5);

console.log(substring); // Output: "Hello"

```
#### Notes
- The `substring()` method is commonly used for extracting substrings from strings without modifying the original data.
- If the startIndex is greater than the endIndex, the `substring()` method swaps the two values before extraction.
- The `substring()` method is versatile and allows you to extract portions of a string efficiently.
<hr>

### split()
The `split()` method in JavaScript is used to split a string into an array of substrings based on a specified delimiter or regular expression pattern. It allows you to divide a string into smaller parts, making it easier to work with text data.
##### Basic Usage with Space Separator
```
const sentence = "Hello, World!";
const words = sentence.split(" ");

console.log(words); // Output: ["Hello,", "World!"]

```
##### Splitting by Comma
```
const csvData = "John,Doe,30,New York";
const fields = csvData.split(",");

console.log(fields); // Output: ["John", "Doe", "30", "New York"]

```
##### Limiting the Number of Splits
```
const sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(" ", 3);

console.log(words); // Output: ["The", "quick", "brown"]
```
#### Notes
- The `split()` method is a versatile tool for parsing and tokenizing text data in JavaScript.
- You can use regular expressions as separators for more complex splitting patterns.
- Be mindful of empty strings in the resulting array, especially if there are leading or trailing separators in the original string.

<hr>

### concat()
The `concat()` method in JavaScript is used to combine two or more arrays or strings and create a new array or string without modifying the original ones. This method is useful for joining arrays or concatenating strings to create a new composite value.
##### Basic Usage
``` 
const str1 = "Hello, ";
const str2 = "World!";
const newStr = str1.concat(str2);

console.log(newStr); // Output: "Hello, World!"
```
##### Appending Individual Strings
```
const str = "JavaScript";
const newStr = str.concat(" is", " awesome!");

console.log(newStr); // Output: "JavaScript is awesome!"
```
#### Notes
- The concat() method is a non-destructive operation, meaning it doesn't modify the original arrays or strings but creates new ones.
- It's an efficient way to concatenate multiple strings without repeated + operators.

<hr>


### replace()
The `replace()` method in JavaScript is used to replace one or more occurrences of a specified substring or regular expression pattern in a string with a new substring or a function callback. It allows you to perform text substitution and manipulation within a string.
#####  Basic Usage with Substring Replacement
```
const text = "Hello, World!";
const newText = text.replace("World", "Universe");

console.log(newText); // Output: "Hello, Universe!"
```
##### Using Regular Expression for Global Replacement
```
const text = "apple orange apple banana apple";
const newText = text.replace(/apple/g, "fruit");

console.log(newText); // Output: "fruit orange fruit banana fruit"
```
#### Notes
- The `replace()` method is a powerful tool for text manipulation in JavaScript and can be used with both simple substrings and complex regular expressions.
- To replace all occurrences, use the global flag (g) with regular expressions.

<hr>

### charAt()
The `charAt()` method in JavaScript is used to retrieve the character at a specified index position within a string. The index is zero-based, meaning the first character is at index 0, the second character is at index 1, and so on. This method allows you to access individual characters in a string by their position.
##### Basic Usage
```
const text = "Hello, World!";
const character = text.charAt(7);

console.log(character); // Output: "W"
``` 
#### Notes
- The `charAt()` method is useful for accessing individual characters in a string, especially when you need to work with or manipulate them individually.
- If the index provided is out of range (e.g., negative or greater than or equal to the string's length), the method returns an empty string.
- Keep in mind that JavaScript strings are immutable, so `charAt()` does not modify the original string but returns the character at the specified position.

<hr>

### indexOf() and lastIndexOf()
The `indexOf()` and lastIndexOf() methods in JavaScript are used to search for the first and last occurrence of a specified element or substring within a string or array. They return the index of the found element or substring or -1 if not found.
##### Basic Usage with `indexOf()`
```
const text = "Hello, World!";
const index = text.indexOf("World");

console.log(index); // Output: 7
```
##### Basic Usage with `lastIndexOf()`
```
const text = "Hello, World, World!";
const lastIndex = text.lastIndexOf("World");

console.log(lastIndex); // Output: 13
```
#### Notes
- The `indexOf()` and `lastIndexOf()` methods are useful for finding the position of elements or substrings within arrays or strings.
- If the element or substring is not found, both methods return -1.
- You can use the optional fromIndex parameter to start the search from a specific index, which is particularly useful for searching for multiple occurrences.
##
references: 
<br>
 <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String> https://developer.mozilla.org </a> 
 <br>
<a href="https://javascript.info/string"> https://javascript.info/string </a>
<br>

