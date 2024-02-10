const { readFile } = require('fs/promises');
const { join } = require('path');
const { error } = require('./constants');
const { User } = require('./user');

const DEFAULT_OPTION = {
    maxLines: 3,
    fields: ["id","name","profession","age"]
}

class File {
    static async csvToJson(filePath) {
        const content = await File.getFileContent(filePath);
        const validation = File.isValid(content);

        if (validation.valid === false) throw new Error(validation.error);

        const users = File.parseCSVToJSON(content);

        return users;
    }

    static async getFileContent(filePath) {
        const filename = join(__dirname, filePath);

        return (await readFile(filename)).toString('utf-8');
    }

    static isValid (csvString, options = DEFAULT_OPTION) {
        const [header, ...content] = csvString.split('\n');
        const headerFields = options.fields.join(',');
        const isHeaderValid = header === headerFields;
        if (!isHeaderValid) return { 
            error: error.FILE_FIELDS_ERROR_MESSAGE, 
            valid: false 
        }

        const isContetLengthAccepted = (
            content.length > 0 && 
            content.length <= options.maxLines
        )

        if (!isContetLengthAccepted) {
            return {
                error: error.FILE_LENGTH_ERROR_MESSAGE,
                valid: false
            }
        }

        return {
            valid: true
        }

    }

    static parseCSVToJSON(csvString) {
        const lines = csvString.split('\n');
        const firstLine = lines.shift();
        const header = firstLine.split(',');
        const users = lines.map(line => {
            const columns = line.split(',');
            let user = {};

            for(const index in columns) {
                user[header[index]] = columns[index];
            }

            return new User(user);

        });

        return users;
    }
} 

// (async () => {
//     // const result = await File.csvToJson('./../__mocks__/threeItems-valid.csv');
//     // const result = await File.csvToJson('./../__mocks__/invalid-header.csv');
//     console.log(result);
// })();

module.exports = File;