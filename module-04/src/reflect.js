'use strict';

const assert = require('assert');

const myObject = {
    add(myValue) {
        return this.arg1 + this.arg2 + myValue;
    }
}


assert.deepStrictEqual(myObject.add.apply({ arg1: 10, arg2: 20 }, [100]), 130);


// Overriding the Function.prototype.apply method
//Function.prototype.apply = () => { throw new TypeError('I am an error') };

//myObject.add.apply = function () { throw new TypeError('I am an error') };

// assert.throws(
//     () => myObject.add.apply({ }, []),
//     {
//         name: 'TypeError',
//         message: 'I am an error'
//     }
// )

const result = Reflect.apply(myObject.add, { arg1: 40, arg2: 20 }, [200]);

assert.deepStrictEqual(result, 260);

function MyDate() { }

Object.defineProperty(MyDate, 'withObject', { value: () => 'Hey there' });
Reflect.defineProperty(MyDate, 'withReflection', { value: () => 'Hey dude' });

assert.deepStrictEqual(MyDate.withObject(), 'Hey there');
assert.deepStrictEqual(MyDate.withReflection(), 'Hey dude');

// -- deleteProperty

const withDelete = { user: 'Erick Wendel' };
// not performant, avoid it
delete withDelete.user;

assert.deepStrictEqual(withDelete.hasOwnProperty('user'), false);

const withReflection = { user: 'Xuxa Wendel' };
// not performant, avoid it
Reflect.deleteProperty(withReflection, 'user');


// performant
assert.deepStrictEqual(withReflection.hasOwnProperty('user'), false);

// -- get 

// we should get only in reference instances

assert.deepStrictEqual(1['username'], undefined);

// with refletion, it will throw an error

//assert.throws(() => Reflect.get(1, 'username'), TypeError);

/// -- has

assert.ok('superman' in { superman: '' });

// more semantic
assert.ok(Reflect.has({ batman: '' }, 'batman'));

// -- ownKeys

const user = Symbol('user');
const database = {
    id: 1,
    [Symbol.for('password')]: 123,
    [user]: 'Raven'
}

const objectKeys = [
    ...Object.getOwnPropertyNames(database),
    ...Object.getOwnPropertySymbols(database),
]

console.log('objectKeys', objectKeys);

assert.deepStrictEqual(objectKeys, ['id', Symbol.for('password'), user]);
assert.deepEqual(Reflect.ownKeys(database), ['id', Symbol.for('password'), user]);