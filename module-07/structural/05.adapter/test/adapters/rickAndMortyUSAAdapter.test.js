import { expect, describe, test, jest, beforeEach } from '@jest/globals';

import RickAndMortyUSAAdapter from "../../src/business/adapters/rickAndMortyUSAAdapter";
import RickAndMortyUSA from "../../src/business/integrations/rickAndMortyUSA";

describe('RickAndMortyUSAAdapter', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('#getCharacters RickAndMortyUSAshould be an adapter for RickAndMorteUSA.getCharactersJSON', async () => {
        const USAIntegration = jest.spyOn(RickAndMortyUSA, RickAndMortyUSA.getCharactersFromJson.name).mockResolvedValue([]);
        
        const result = await RickAndMortyUSAAdapter.getCharacters();

        expect(result).toEqual([]);
        
        expect(USAIntegration).toHaveBeenCalled();
    });
});