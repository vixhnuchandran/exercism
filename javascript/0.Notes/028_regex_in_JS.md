# Regular Expressions (Regex) in JavaScript

Regular expressions, often referred to as regex or regexp, are powerful tools for pattern matching and text manipulation in JavaScript. They allow you to search for, match, and replace text based on specific patterns. In JavaScript, regex patterns are created using the `RegExp` object, and various methods are available for working with regex.

## Creating a Regular Expression

You can create a regex pattern using the `RegExp` constructor or by using a regex literal with forward slashes (`/pattern/`). For example:

```javascript
const pattern1 = new RegExp('pattern');
const pattern2 = /pattern/;
```

## Regex Methods

### `test()`

The `test()` method checks if a string matches a regex pattern and returns a boolean value.

```javascript
const pattern = /abc/;
const str = 'abcdef';

console.log(pattern.test(str)); // true
```

### `exec()`

The `exec()` method searches for a regex pattern in a string and returns an array with information about the match or `null` if no match is found.

```javascript
const pattern = /abc/;
const str = 'abcdef';

const result = pattern.exec(str);
console.log(result); // ["abc", index: 0, input: "abcdef", groups: undefined]
```

### `match()`

The `match()` method finds all matches of a regex pattern in a string and returns an array of matched substrings or `null` if no match is found.

```javascript
const pattern = /abc/g;
const str = 'abcdefabcdef';

const matches = str.match(pattern);
console.log(matches); // ["abc", "abc"]
```

### `search()`

The `search()` method searches for a regex pattern in a string and returns the index of the first match or `-1` if no match is found.

```javascript
const pattern = /abc/;
const str = 'abcdef';

const index = str.search(pattern);
console.log(index); // 0
```

### `replace()`

The `replace()` method replaces all or the first occurrence of a regex pattern in a string with a specified replacement.

```javascript
const pattern = /abc/g;
const str = 'abcdefabcdef';

const newStr = str.replace(pattern, 'XYZ');
console.log(newStr); // "XYZdefXYZdef"
```

## Regex Patterns

Regex patterns consist of characters and special metacharacters that define the matching rules. Common metacharacters include:

- `.`: Matches any single character except a newline.
- `*`: Matches zero or more occurrences of the preceding character or group.
- `+`: Matches one or more occurrences of the preceding character or group.
- `?`: Matches zero or one occurrence of the preceding character or group.
- `[]`: Defines a character set; for example, `[aeiou]` matches any vowel.
- `()`: Groups characters together.
- `|`: Alternation; for example, `a|b` matches either 'a' or 'b'.
- `^`: Matches the start of a string.
- `$`: Matches the end of a string.

## Flags

Regex patterns can include flags that modify the behavior of matching. Common flags include:

- `i`: Case-insensitive matching.
- `g`: Global matching (find all matches, not just the first).
- `m`: Multiline matching (match line beginnings and endings).

```javascript
const pattern = /abc/gi;
```

## Conclusion

Regular expressions in JavaScript are a powerful tool for text manipulation and pattern matching. Understanding regex patterns, metacharacters, and methods allows you to perform complex operations on strings with ease.
```

This Markdown document provides an overview of regex in JavaScript, including methods, patterns, metacharacters, and flags. You can use this as a reference or as a starting point for your regex documentation.