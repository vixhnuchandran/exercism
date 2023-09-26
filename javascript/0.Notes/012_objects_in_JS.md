# Objects
In JavaScript, an object is a collection of key-value pairs. It's a versatile data structure that allows you to represent and manipulate complex data. Objects can store various types of values as properties, including numbers, strings, functions, and even other objects.

## Object Literals
You can create objects using object literals, which consist of curly braces {} and a list of key-value pairs inside them:
```
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};
```
## Accessing Object Properties
You can access object properties using dot notation or bracket notation:
```
console.log(person.name); // Using dot notation
console.log(person["age"]); // Using bracket notation
```

## Object Properties
### Creating Object Properties
You can add properties to an object by assigning values to them:
```
person.gender = "Male";
```
### Modifying Object Properties
To change the value of an existing property, simply assign a new value to it:
```person.age = 31;
```
### Removing Object Properties
You can remove a property from an object using the delete operator:
```
delete person.isStudent;
```
<hr>

### Object Iteration
You can iterate through an object's properties using for...in loops:
```
for (const key in person) {
  console.log(key, person[key]);
}
```
### Object.keys(), Object.values(), and Object.entries()
You can also obtain arrays of object keys, values, and key-value pairs:
```
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);
```

## Nested Objects
### Creating Nested Objects
Objects can be nested within other objects to represent hierarchical data:
```
const address = {
  street: "123 Main St",
  city: "Cityville",
};

const person = {
  name: "Bob",
  address: address,
};
```
### Accessing Nested Object Properties
You can access properties of nested objects using multiple dot or bracket notations:
```
console.log(person.address.city); // Using dot notation
console.log(person["address"]["street"]); // Using bracket notation
```
