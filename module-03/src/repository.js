import { writeFile, readFile } from 'fs/promises';

export const save = async (data) => {
    // the import.meta.url is a special variable that allows us to get the current file path
    const { pathname } = new URL('./../database.json', import.meta.url); 
    // const databaseFile = pathname.replace('E:\'', '');
    const currentData = JSON.parse(await readFile(pathname));
    currentData.push(data);
    await writeFile(pathname, JSON.stringify(currentData));
}