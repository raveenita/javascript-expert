const { readFile } = require('fs/promises');
const { join } = require('path');
const { error } = require('./constants');

const DEFAULT_OPTION = {
    maxLines: 3,
    fields: ["id" ,"name" , "profession" , "birthDate"]
}

class File {
    static async csvToJson(filePath) {
        const content = await File.getFileContent(filePath);

        return content;
    }

    static async getFileContent(filePath) {
        const filename = join(__dirname, filePath);

        return (await readFile(filename)).toString('utf');
    }

    static isValid (csvString, options = DEFAULT_OPTION) {
        const [header, content] = csvString.split('\n');

        const isHeaderValid = header === options.fields.join(',');

        if (!isHeaderValid) return { 
            error: error.FILE_FIELDS_ERROR_MESSAGE, 
            valid: false 
        }

    }
}

(async () => {
    const result = await File.csvToJson('./../__mocks__/threeItems-valid.csv');
    console.log('result', result);
})();