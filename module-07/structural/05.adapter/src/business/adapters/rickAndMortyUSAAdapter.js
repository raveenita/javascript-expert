
import RickAndMortyUSA from '../../services/RickAndMortyUSA.js';

export default class RickAndMortyUSAAdapter {
    async getCharacters() {
        return this.RickAndMortyUSA.getCharactersFromXML();
    }
}