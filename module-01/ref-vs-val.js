let counter = 0;
let counter2 = counter;

counter2++;

console.log('counter', counter);
console.log('counter2', counter2);

const item = { counter: 0 };
const item2 = item;

item2.counter++;

console.log('item counter', item.counter);
console.log('item2 counter', item2.counter);