import { expect, describe, test, jest, beforeEach } from '@jest/globals';

import RickAndMortyBRLAdapter from "../../src/business/adapters/rickAndMortyBRLAdapter";
import RickAndMortyBRL from "../../src/business/integrations/rickAndMortyBRL";

describe('RickAndMortyBRLAdapter', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('#getCharacters RickAndMortyBRLshould be an adapter for RickAndMorteBRL.getCharactersJSON', async () => {
        const BRLIntegration = jest.spyOn(RickAndMortyBRL, RickAndMortyBRL.getCharactersFromJson.name).mockResolvedValue([]);
        
        const result = await RickAndMortyBRLAdapter.getCharacters();

        expect(result).toEqual([]);
        
        expect(BRLIntegration).toHaveBeenCalled();
    });
});