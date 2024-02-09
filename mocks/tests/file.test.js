const File = require('../src/file');
const { error } = require('../src/constants');
const { rejects, deepStrictEqual } = require('assert');

(async() => {
    {
        const filePath = '../__mocks__/emptyFile-invalid.csv';
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);

        await rejects(result, rejection);
    }
    // {
    //     const filePath = '../__mocks__/fourItems-invalid.csv';
    //     const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    //     const result = File.csvToJson(filePath);

    //     await rejects(result, rejection);
    // }
    // {
    //     const filePath = '../__mocks__/threeItems-valid.csv';
    //     const result = await File.csvToJson(filePath);
    //     const expected = [
    //         {
    //             id: 123,
    //             name: 'Djinn',
    //             profession: 'Bruxa',
    //             birthDate: 1995
    //         },
    //         {
    //             id: 311,
    //             name: 'Xuxa da Silva',
    //             profession: 'Atriz',
    //             birthDate: 1940
    //         },
    //         {
    //             id: 444,
    //             name: 'José Raimundo',
    //             profession: 'Pedreiro',
    //             birthDate: 1990
    //         },

    //     ]

    //     deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    // }
})();