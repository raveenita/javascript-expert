import { Person } from '../src/person';

/**
 * Execute tasks step by step and in the end build, like the Builder pattern.
 * 
 */
class TextProcessorFluentAPI { 
    #content;

    constructor(content) {
        this.#content = content;
    }

    // (?<=[contratante|contratada]:\s{1})(?!\s)(.*) 
    //  :\s{1} -> pegar um espaço depois do ponto e vírgula
    //  (?!\s)) -> ignora último espaço
    //  (.*\n.*) pega todo o texto depois de contratante
    //  Pega tudo o que vem depois da palavra contratante seguido de um :
    //  ignora o que não tiver um espaço após a palavra contratante
    extractPeopleData() {
        const matchPerson = /(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi
        const onlyPersons = this.#content.match(matchPerson);

        return this
    }

    mapPerson() {
        this.#content = this.#content.map(person => new Person(person));

        return this;
    }
    
    build() {
        return this.#content
    }

}