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
