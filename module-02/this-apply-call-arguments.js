'use strict';

const { watch, promises: { readFile } } = require('fs');

class File {
    watch(event, filename) {
        console.log('this', this);
        console.log('arguments', Array.prototype.slice.call(arguments));
        this.showContent(filename);
    }

    async showContent() {
        console.log(((await readFile(filename)).toString()));
    }
}

const file = new File();

// in this way, it ignore the context 'this' of the class File
// inherit the context of the watch function

// not a good practice by using arrow function, 
watch(__filename, (event, filename) => file.watch(event, filename));

// explicit bind thart returns a new function with the context of the class File, 
// ignoring the context of the watch function

// watch(__filename, file.watch.bind(file));

file.watch.call(
    { showContent: () => console.log('Call: Hey guys!') },
    null,
    __filename
);

file.watch.apply(
    { showContent: () => console.log('Call: Hey guys!') },
    [null, __filename]
);



// watch(__filename, async (event, filename) => {
//     console.log((await readFile(filename)).toString());
// });