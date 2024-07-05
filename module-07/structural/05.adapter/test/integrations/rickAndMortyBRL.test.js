import { expect, describe, test, jest, beforeEach } from '@jest/globals';

describe('RickAndMortyBRL', () => {
    test('#getCharactersJSON should return a list of CharacterEntity', async () => {
        const response = JSON.parse(await fs.readFile('./test/integrations/characters.json'));
        const expected = response.results.map((data) => new Character(data));
        const result = await RickAndMortyBRL.getCharactersFromJSON();
        
        expect(result).toEqual(expected);
    });
    test.todo('#getCharactersJSON should return an empty list if the API returns nothing');
});