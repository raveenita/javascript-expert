const Service = require('../src/service');
const sinon = require('sinon');
const assert = require('assert');

const BASE_URL_ONE = 'https://swapi.dev/api/planets/1/';
const BASE_URL_TWO = 'https://swapi.dev/api/planets/2/';

const MOCKS = {
    tatooine: require('../__mocks__/tatooine.json'),
    alderaan: require('../__mocks__/alderaan.json')
};

;(async () => {
    {
        const service = new Service();
        const stub = sinon.stub(service, service.makeRequest.name);

        stub.withArgs(BASE_URL_ONE).resolves(MOCKS.tatooine);
        stub.withArgs(BASE_URL_TWO).resolves(MOCKS.alderaan);

        {
            const response = await service.makeRequest(BASE_URL_ONE);

           assert.deepStrictEqual(response, MOCKS.tatooine)
        }
        {
            const response = await service.makeRequest(BASE_URL_TWO);

           assert.deepStrictEqual(response, MOCKS.alderaan)
        }
    }

})();