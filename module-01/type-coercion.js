9999999999 // 6
// 10000000000

true + 2
// 3

'21' + true

// '21true'

'21' - true

// 20

'21' - -1

// 22

'21' - - 1

// 22

0.1 + 0.2 === 0.3
// false
// 0.30000000000000004

3 > 2 > 1
// false

3 > 2 >= 1
// true

console.assert(String(123) === '123', 'Explicit conversion to string');
console.assert(123 + '' === '123', 'Implicit conversion to string');
console.assert(('hello' || 123) === 'hello', '|| returns the first operand if it is truthy');
console.assert(('hello' && 123) === 123, '&& returns the second operand if both are truthy');


