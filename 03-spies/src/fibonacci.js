class Fibonacci {
    /**
     * Once generators are called, they return an iterator 
     * that can be used to control the execution of the generator function.
     * 
     * It means that the generator function does not run the code, unless:
     * 
     * - The iterator is called with the next method
     * - The iterator is called using for await
     * - The iterator is called using the spread operator
     */
    *execute(input, current = 0, next = 1) {
        if (input === 0) return 0;

        // returns a value 
        yield current; 
        // delegate the function 
        yield* this.execute(input - 1, next, current + next); 
    }
}

module.exports = Fibonacci