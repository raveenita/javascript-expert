import RickAndMortyBRL from '../../services/RickAndMortyBRL.js';

export default class RickAndMortyBRLAdapter {
    async getCharacters() {
        return this.RickAndMortyBRL.getCharactersFromJSON();
    }
}