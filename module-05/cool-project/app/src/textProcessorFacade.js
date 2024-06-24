class TextProcessorFacade {
    #textProcessorFluentAPI;

    constructor(content) {
        this.#textProcessorFluentAPI = new TextProcessorFluentAPI(content);
    }

    getPeopleFromPDF() {
        return this.#textProcessorFluentAPI
            .extractPeopleData()
            .mapPerson()
            .build();
    }
}

module.exports = TextProcessorFacade;
