const assert = require('assert');
const obj = {};
const arr = [];
const fn = () => {};


//literal objects became explicit functions

console.log('new Object() is {}?', new Object().__proto__ === {}.__proto__);

assert.deepStrictEqual(new Object().__proto__, {}.__proto__);

// __proto__ is the Object instance with its owns properties
// prototype is where is all the functions and properties 
assert.deepStrictEqual(obj.__proto__, Object.prototype);


// __proto of Object.prototype is null
console.log('obj.__proto__.__proto__ === null', obj.__proto__.__proto__ === null);
assert.deepStrictEqual(obj.__proto__.__proto__, null);


function Employee() {}
Employee.prototype.salary = () => 'salary**';

function Supervisor() {}
// prototype of Supervisor is Employee
Supervisor.prototype = Object.create(Employee.prototype);
Supervisor.prototype.profitShare = () => 'profitShare**';

function Manager() {}
// prototype of Manager is Supervisor
Manager.prototype = Object.create(Supervisor.prototype);
Manager.prototype.monthlyBonuses = () => 'monthlyBonuses**';

const manager = new Manager();

console.log('manager.salary()', manager.salary());
console.log('manager.profitShare()', manager.profitShare());
console.log('manager.monthlyBonuses()', manager.monthlyBonuses());

assert.deepStrictEqual(manager.__proto__, Manager.prototype);
assert.deepStrictEqual(manager.__proto__.__proto__, Supervisor.prototype);
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__, Employee.prototype);
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__.__proto__, Object.prototype);
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__.__proto__.__proto__, null);

class T1 {
    ping() { return 'ping' }
}

class T2 extends T1 {
    pong(){ return 'pong' }
}

class T3 extends T2 {
    shoot() { return 'shoot' }
}

const t3 = new T3();

assert.deepStrictEqual(t3.__proto__,T3.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__, T2.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__.__proto__, T1.prototype)