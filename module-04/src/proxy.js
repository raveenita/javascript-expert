'use strict';

const Event = require('events');
const event = new Event();

const eventName = 'counter';

event.on(eventName, counter  => console.log('counter updated', counter))

const myCounter = {
    counter: 0
}

const proxy = new Proxy(myCounter, {
    set: (target, property, newValue) => {
        event.emit(eventName, { newValue, previousValue: target[property]});
        target[property] = newValue;

        return true;
    },
    get: (object, prop) => {
        return object[prop];
    }
});

setInterval(() => {
    proxy.counter ++;
    console.log('[3] setInterval', proxy.counter);

    if (proxy.counter === 10) {
        clearInterval();
    } 
}, 200);

// future
setTimeout(() => {
    proxy.counter = 4;
    console.log('[2] timeout', proxy.counter);
}, 100);

// immediate
setImmediate(() => {
    console.log('[1] setImmediate()', proxy.counter);
});

process.nextTick(() => {
    proxy.counter = 2;
    console.log('[0] nextTick()');
})