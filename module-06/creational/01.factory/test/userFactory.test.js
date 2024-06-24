const rewireMock = require('rewiremock/node');
const { deepStrictEqual } = require('assert');

const dbData = [
    {name: 'Mariazinha' },
    {name: 'Joãozin' }
]

class MockDatabase {
    connect = () => this
    find = async (query) => dbData
}

rewireMock(() => require('../src/util/database')).with(MockDatabase);

;(async () => {
    {
        rewireMock.enable();
        
        const expected = [{ name: 'MARIAZINHA'}, { name: 'JOÃOZIN' }];
        const UserFactory = require('../src/factory/userFactory');
        const userFactory = await UserFactory.createInstance();
        const result = await userFactory.find({ name: 'Erick*' });

        deepStrictEqual(result, expected);

        rewireMock.disable();
    }
})()
