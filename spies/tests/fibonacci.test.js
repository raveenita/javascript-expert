const Fibonacci = require('../src/fibonacci');
const sinon = require('sinon');

// O próximo valor corresponde à soma dos dois anteriores
;(async () => {
    {
        const fibonacci = new Fibonacci()
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        const expectedCallCount = 4;

        for await(const i of fibonacci.execute(3)) {}

        assert.deepStrictEqual(spy.callCount, expectedCallCount)
    }
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);
        const [...results] = fibonacci.execute(5);
        const { args } = spy.getCall(2);
        const expectedResult = [0, 1, 1, 2, 3];
        const expectedParams = Object.values({
            input: 3,
            current: 1,
            next: 2
        })


        assert.deepStrictEqual(args, expectedParams);
        assert.deepStrictEqual(results, expectedResult);

    }
})();