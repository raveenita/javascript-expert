# Javascript Expert

## Mocks

Mocks are alternatives to simulate data to test the behavior of a function or a class without the need to use real data.

We can create a folder called *__mocks__* to store our mocks. They can represent files, objects and functions.

## Stubs

Stubs are alternatives to simulate the behavior of a function or a class without the need to use the real implementation. It's powerful to test our code when we do not want to make a real HTTP request or database call.

By using stubs, you can override the behavior of a function or a class to return a specific value or to simulate an error without instantiating the real implementation.

This is useful when you have external dependencies or third-party services that you cannot control or that are not available during the test.

## Spies

Analyzing the behavior of a function or a class is important to ensure that the code is working as expected, such as how many times it was called, with which parameters and what it returned.

# References vs values

Primitive types generate a copy in memory

´´´javascript
let counter = 0;
let counter2 = counter;

counter2++;

console.log('counter', counter); // 0
console.log('counter2', counter2); // 1
```

And reference types copy the memory address of the object, pointing to the same object in memory:
    
´´´javascript
    const item = { counter: 0 };
const item2 = item;

item2.counter++;

console.log('item counter', item.counter); // 1
console.log('item2 counter', item2.counter); // 1
```

## Primitive types

While dealing with objects, we have to be careful with the way we are copying the object. If we copy the object using the assignment operator, we are copying the reference to the object, not the object itself.

Another way to copy an object is using the spread operator, which creates a new object in memory.


```javascript
const item = { counter: 0 };
const item2 = { ...item };
```

- **toString**: returns a string representing the object. If an object has no primitive value, will call `valueOf()` method.
- **valueOf**: returns a number of the specified object. If an object has no primitive value, will call `toString()` method.

## Generators

To transform functions into lists that can be iterated, we can use generators. The name generators come from the fact that they generate values on the fly.
They are functions that can be paused and resumed, allowing us to iterate over a list of values. For example, we can use generators to iterate over an infinite list of numbers. 
The * symbol is used to define a generator function and the `yield` keyword is used to pause the function and return a value.


```javascript
function* infiniteNumbers() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}
```

And to iterate over the list of values, we can use the `next()` method.

```javascript
const numbers = infiniteNumbers();
console.log(numbers.next().value); // 0
console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
```

## Symbols

Symbols are unique identifiers that can be used as object keys. They are created using the `Symbol()` function and are unique in the level of memory.

```javascript
const uniqueKey = Symbol('username');
const user = {};

user['username'] = 'Raveenita';
user[uniqueKey] = 'Geovana'; // always unique in level of memory

console.log('getting username in normal Object', user.username); // value for normal Objects
console.log('getting username in a Symbol Object', Symbol['username']);	// undefined
```

Besides it's hard to access the value of a symbol, we can use the `Object.getOwnPropertySymbols()` method to get all the symbols and retrieve the value.
So it's not the best way to store sensitive data.

We can use the Symbol to create private properties in a class.

```javascript
const _private = Symbol('private');

class Person {
  constructor(name) {
    this[_private] = name;
  }

  getPrivate() {
    return this[_private];
  }
}
```

## Map 

Almost everything is inherited from an object in JavaScript, and this can be a problem because it duplicates the behavior of the object. To solve this problem, we can use the `Map` and `WeakMap` data structures.

- Maps can validate if a key pair exists;
- Maps have a feature to search for a key pair;

To identify if an item exists in a Map, we can use the `has()` method.

### WeakMap

A weak map just can use objects as keys, and the values are weakly referenced, which means that if the object is removed from the memory, the value will be removed as well. 

## Reflect

Intercept the behavior of objects and change its behavior. It's a way to manipulate the object without changing the object itself.

## Observer Pattern

Allow us to add a list of observers to entities and notify them about any changes.

## Regex

- `\`: literal search
- `?`: delimiter for optional characters
- `\d{3}`: get 3 sequential digits
- `^`: get only the beginning of the string
- `[.-]`: get only the characters . or -
- `\w`: get only the first character
- `\w+`: get all the characters until the end of the string

## Anti patterns

Are solutions not recommended to solve a problem. Are commonly used but are not good practices.

## Design patterns

General and reusable solutions applied to common problems in software design. It's a description, blueprint or template to solve a problem using good practices.

They show the interaction between objects and classes, and the responsibility of each one.

## DRY

Don't Repeat Yourself. It's a principle that aims to reduce repetition in code, avoiding redundancy and making the code easier to maintain.

## KISS 

Keep It Simple, Stupid. It's a principle that aims to keep the code simple and easy to understand.

## YAGI

You Aren't Gonna Need It. It's a principle that aims to avoid adding features that are not necessary at the moment.

## SOLID

### Single Responsibility Principle

A class should have only one reason to change. It means that a class should have only one responsibility.

### Open/Closed Principle

A class should be open for extension but closed for modification. It means that we should be able to extend a class's behavior without modifying it.

### Liskov Substitution Principle

We should be able to replace a parent class with a child class without affecting the program's behavior.

### Interface Segregation Principle

A class should not be forced to implement interfaces it doesn't use. It means that we should create specific interfaces for each class.

### Dependency Inversion Principle

We should depend on abstractions, not implementations.


## Design patterns

### Factory

They abstract the object creation process and avoid repeating the same code to create objects. It will return the final stance of the object.


### N-tiers

It's a design pattern that separates the application into different layers and each layer has a specific responsibility. It's useful to make the code more organized and easier to maintain.

### Repository

It's a design pattern that abstracts the data access layer and provides a way to access the data. It's useful to separate the data access logic from the business logic

### Service or business

It's a design pattern that abstracts the business logic. It's useful to separate the business logic from the data access logic.