import chalk from 'chalk';
import chalkTable from 'chalk-table';
import DraftLog from 'draftlog';

import readline from 'readline';
import Person from './person.js';

export default class TerminalController {
    constructor() {
        this.print = {};
        this.data = {};
        this.terminal = {};
    }

    initializeTerminal(database, language) {
        DraftLog(console).addLineListener(process.stdin);
        this.terminal = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        this.initializeTable(database, 'pt-BR');
    }

    initializeTable(database, language) {
        const data =  database.map(item => new Person(item).formatted(language));

        const table = chalkTable(this.getTableOptions(), data);
        this.print = console.draft(table);
        this.data = data;
    }

    closeTerminal() {
        this.terminal.closeTerminal
    }

    question(message = '') {
        return new Promise(resolve => this.terminal.question(message, resolve));
    }

    getTableOptions() { 
        return {
            leftPad: 2,
            columns: [
                { field: 'id', name: chalk.cyan('ID') },
                { field: 'vehicles', name: chalk.magenta('Vehicles') },
                { field: 'kmTravelled', name: chalk.cyan('km Travelled') },
                { field: 'from', name: chalk.cyan('From') },
                { field: 'to', name: chalk.green('To') },
            ],
        }
    }

    updateTable(item) {
        this.data.push(item);
        this.print(chalkTable(this.getTableOptions(), this.data));
    }
}