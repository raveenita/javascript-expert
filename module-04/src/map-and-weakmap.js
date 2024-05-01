const assert = require('assert');

const myMap = new Map();

myMap
    .set('name', 'John')
    .set('age', 30)
    .set('isStudent', false);


const myMapWithConstructor = new Map([
    ['name', 'Raven'],
    ['age', 25],
    ['isStudent', true]
]);

assert.deepStrictEqual(myMap.get('name'), 'John');
assert.deepStrictEqual(myMapWithConstructor.get('name'), 'Raven');

const onlyReferenceWorks = { id: 1 }

myMap.set(onlyReferenceWorks, { name: 'Geovana' });

assert.deepStrictEqual(myMap.get({ id: 1 }), undefined); 
assert.deepStrictEqual(myMap.get(onlyReferenceWorks), { name: 'Geovana' }); // { name: 'Geovana' }

// verify if the key exists
// in an object, we can use 'hasOwnProperty' method
assert.ok(myMap.has(onlyReferenceWorks));

// remove an item
assert.ok(myMap.delete(onlyReferenceWorks));

assert.deepStrictEqual(JSON.stringify([...myMap]), JSON.stringify([['name', 'John'], ['age', 30], ['isStudent', false]]));