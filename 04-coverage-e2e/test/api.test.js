const { describe, it } = require('mocha');

const request = require('supertest');
const app = require('../src/api');
const assert = require('assert');

describe('API Suite Test', () => {
    describe('/contact', () => {
        it('should request the contact page', async () => {
            const response = await request(app)
                                    .get('/contact');
                                    //expect(200);

            assert.deepStrictEqual(response.text, 'Contact us page');
        });
    });

    describe('/hello', ()    => {
        it('should request an inexistent route /hi', async () => {
            const response = await request(app)
                                    .get('/hi');
                                    //expect(404);
            
            assert.deepStrictEqual(response.text, 'Hello world!');
        });
    });

    describe('/login', () => {
        it('should login successfully on the login route', async () => {
            const response = await request(app)
                                    .post('/login')
                                    .send({ username: 'Raveenita', password: '123' });
            
            assert.deepStrictEqual(response.text, 'Logging has succeeded!');
        });

        it('should unauthorize a request when requesting it using wrong credentials', async () => {
            const response = await request(app)
                .post('/login')
                .send({ username: 'Govana', password: '321' });
                assert.ok(response.unauthorized);
        });
    });
});