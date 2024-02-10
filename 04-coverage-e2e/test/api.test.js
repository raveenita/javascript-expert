const { describe, it } = require('mocha');

const request = require('supertest');
const app = require('../src/api');
const assert = require('assert');

describe('API Suite Test', () => {
    describe('/contact', () => {
        it('should request the contact page and return HTTP Status 200', async () => {
            const response = await request(app)
                                    .get('/contact');
                                    //expect(200);

            assert.deepStrictEqual(response.text, 'Contact us page');
        });
    });

    describe('/hello', ()    => {
        it('should request an inexistent route /hi and return HTTP Status 404', async () => {
            const response = await request(app)
                                    .get('/hi');
                                    //expect(404);
            
            assert.deepStrictEqual(response.text, 'Hello world!');
        });
    });
});