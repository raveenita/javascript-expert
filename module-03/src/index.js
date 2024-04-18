import TerminalController from "./terminalController.js";
import database from './../database.json';
import Person from './person.js';
import { save } from './repository.js';

const DEFAULT_LANG = 'pt-BR';
const STOP_TERMINAL_COMMAND = ':q';

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, DEFAULT_LANG);

async function mainLoop() {
    try {
        const answer = await terminalController.question('Register a car: [id, vehicle, kmTravelled, from, to]');

        if (answer === STOP_TERMINAL_COMMAND) {
            terminalController.closeTerminal();
            console.log('process finished!');
            return;
        }

        const person = Person.generateInstanceFromString(answer);
        terminalController.updateTable(person.formatted(DEFAULT_LANG));
        await save(person);

        return mainLoop();
    }
    catch (error) {
        console.error('DEU RUIM', error);
    }
}

await mainLoop();