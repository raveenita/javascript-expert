import axios from 'axios';
import Character from '../../entities/Character.js';
const URL = '';

export default class RickAndMortyBRL {
    async getCharactersFromJSON() {
        const { data: results = [] } = await axios.get(URL);

        return results.map((data) => new Character(data));
    }
}