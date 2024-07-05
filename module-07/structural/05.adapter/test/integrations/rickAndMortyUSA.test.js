import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import RickAndMortyUSA from '../../src/business/integrations/rickAndMortyUSA';

describe('RickAndMortyUSA', () => {
    test('#getCharactersXML should return a list of Character Entity', async () => {
        const response = await fs.readFile('./test/integrations/characters.xml');
        const expected = {};

        jest.spyOn(axios, 'get').mockResolvedValue({ data: response });

        const result = await RickAndMortyUSA.getCharactersFromXML();
        
        expected(result).toEqual(expected);
    });
    test.todo('#getCharactersJSON should return an empty list if the API returns nothing');
});