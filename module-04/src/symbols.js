const assert = require('assert');
const  Intl = require('intl');
const uniqueKey = Symbol('username');
const user = {};

user['username'] = 'Raveenita';
user[uniqueKey] = 'Geovana'; // always unique in level of memory

console.log('getting normal Object', user.username);
console.log('getting Symbol Object', Symbol['username']);

assert.deepStrictEqual(user.username, 'Raveenita');
assert.deepStrictEqual(user[uniqueKey], 'Geovana');

// Symbols are not secret, just hard to access
console.log('symbols', Object.getOwnPropertySymbols(user)[0]);

assert.deepStrictEqual(Object.getOwnPropertySymbols(user)[0], uniqueKey);

// bypass, but not recommended

user[Symbol.for('password')] = 123;

const kItems = Symbol('kItems');

class MyDate {
    constructor(...args) {
        this[kItems] = args.map(arg => new Date(...arg));
    } 

    [Symbol.toPrimitive](coercionType) {
        if (coercionType === 'string') {
            const items = this[kItems].map(item => new Intl.DateTimeFormat('pt-BR').format(item));
            return new Intl.ListFormat('pt-BR').format(items);
        }
    }

    *[Symbol.iterator]() {
        for (const item of this[kItems]) {
            yield item;
        }
    }

    async *[Symbol.asyncIterator]() {
        const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
        for( const item of this[kItems]) {
            await timeout(100);
            yield item.toISOString();
        }
    }
    
    get [Symbol.toStringTag]() {
        return 'WHAT?'
    }
}

const myDate = new MyDate(
    [2020, 3, 1],
    [2020, 3, 1]
);

const expectedDates = [
    new Date(2020, 3, 1),
    new Date(2020, 3, 1)
];


assert.deepStrictEqual(Object.prototype.toString.call(myDate), '[object WHAT?]');
assert.deepStrictEqual(String(myDate), '01 de abril de 2020 e 02 de março de 2018');
assert.deepStrictEqual ([...myDate], expectedDates);