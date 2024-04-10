import chalk from 'chalk';
import chalkTable from 'chalk-table';
import DraftLog from 'draftlog';
import readline from 'readline';
import database from './../database.json';
import read from 'fs';
import Person from './person.js';

DraftLog(console).addLineListener(process.stdin);

const options = {
    leftPad: 2,
    columns: [
        { field: 'id', name: chalk.cyan('ID') },
        { field: 'vehicles', name: chalk.magenta('Vehicles') },
        { field: 'kmTravelled', name: chalk.cyan('km Travelled') },
        { field: 'from', name: chalk.cyan('From') },
        { field: 'to', name: chalk.green('To') },
    ],
};

const table = chalkTable(options, database.map(item => new Person(item).formatted('pt-BR')));

const print = console.draft(table);

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

terminal.question('Please type a command: ', (command) => {
    console.log('You typed:', command);
    terminal.close();
});