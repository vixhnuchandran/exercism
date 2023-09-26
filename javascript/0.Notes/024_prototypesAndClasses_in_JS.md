# Classes in JavaScript
Classes in JavaScript are a way to create objects with shared properties and methods. They provide a blueprint or template for creating objects, making it easier to manage and structure your code. Classes were introduced in ECMAScript 6 (ES6), bringing a more structured and organized approach to object-oriented programming in JavaScript.

## Class Declaration
To declare a class, you use the class keyword followed by the class name. The class body contains the properties and methods that define the behavior of objects created from the class.
```
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound.");
  }
}
```
In this example, we declare an Animal class with a constructor method and a makeSound method.
## Constructor Method
The constructor method is a special method called when you create a new object from the class. It initializes the object's properties. You can pass arguments to the constructor to set initial values.
```
const cat = new Animal("Whiskers");
```
Here, we create an instance of the Animal class called cat with the name "Whiskers."

## Instance Properties
Instance properties are variables that store data specific to each object created from the class. They are defined within the constructor method using the this keyword.
```
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.engineRunning = false;
  }
}
```
In this example, make, model, and engineRunning are instance properties.

## Instance Methods
Instance methods are functions defined within the class that operate on the instance's data. They are called on objects created from the class.
```
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.engineRunning = false;
  }

  startEngine() {
    this.engineRunning = true;
    console.log("Engine started.");
  }

  stopEngine() {
    this.engineRunning = false;
    console.log("Engine stopped.");
  }
}
```
In this Car class, startEngine and stopEngine are instance methods.



## Creating Objects from a Class
To create an object from a class, you use the new keyword followed by the class name and any required constructor arguments.
```
const myCar = new Car("Toyota", "Camry");
```
Here, myCar is an instance of the Car class.

## Class Inheritance
Classes support inheritance, allowing you to create a new class based on an existing one. The extends keyword is used to create a subclass (child class) that inherits properties and methods from a superclass (parent class).
```
class ElectricCar extends Car {
  constructor(make, model) {
    super(make, model); // Call the parent class constructor
    this.isCharging = false;
  }

  charge() {
    this.isCharging = true;
    console.log("Charging...");
  }
}
```
In this example, ElectricCar is a subclass of the Car class. It inherits the startEngine, stopEngine, and other properties/methods from Car while adding its own properties/methods.
## Encapsulated Properties
Encapsulation is the practice of bundling the internal state (private fields) and behaviors (getters and setters) of an object into a single unit or class. This concept allows you to control access to the internal data and apply validation or logic when interacting with it, promoting data integrity and security.
Here's an example of encapsulation in JavaScript:
```
class Person {
  #name = ''; // Private field

  // Constructor
  constructor(name) {
    this.#name = name; // Initialize the private field
  }

  // Getter
  get name() {
    return this.#name;
  }

  // Setter
  set name(newName) {
    if (newName.trim() !== '') {
      this.#name = newName;
    } else {
      console.log('Name cannot be empty.');
    }
  }
}

// Create a person
const person = new Person('Alice');
console.log(person.name); // Accessing the name using the getter

// Update the name using the setter
person.name = 'Bob';
console.log(person.name);

// Attempt to set an empty name (validation handled by the setter)
person.name = '';
console.log(person.name); // Name cannot be empty.

```
In this example:

- We have a Person class with a private field #name.
- The getter get name() allows us to access the #name field.
- The setter set name(newName) enables us to update the #name field while performing a simple validation to ensure it's not empty.
