const { expect } = require('chai');
const { it, describe } = require('mocha');
const productValidator = require('..');
const ProductMotherObject = require('./model/productMotherObject');

describe('Test Mother Object', () => {
    it('shouldnt return error with valid product', ()=> {
        const product = ProductMotherObject.valid();
        const result = productValidator(product);

        const expected = {
            errors: [],
            result: true
        }

        expect(result).to.be.deep.equal(expected);
    });

    describe('Product Validation Runes', () => {
        it('should return error when product id is invalid', () => {
            const product = ProductMotherObject.withInvalidId();
            const result = productValidator(product);

            const expected = {
                errors: [`id: invalid length, current [1] expected to be between 2 and 20`],
                result: false
            }

            expect(result).to.be.deep.equal(expected);
        });
        it('should return error when product name is invalid', () => {
            const product = ProductMotherObject.withInvalidName();
            const result = productValidator(product);

            const expected = {
                errors: [`name: invalid value, current [abc123] expected to have only words`],
                result: false
            }

            expect(result).to.be.deep.equal(expected);
        });
        it('should return error when product price is invalid', () => {
            const product = ProductMotherObject.withInvalidPrice();
            const result = productValidator(product);

            const expected = {
                errors: [`name: invalid value, current [abc123] expected to have only words`],
                result: false
            }

            expect(result).to.be.deep.equal(expected);
        });

        it('should return error when product category is invalid', () => {
            const product = ProductMotherObject.withInvalidCategory();
            const result = productValidator(product);

            const expected = {
                errors: [`category: invalid value, current [shopping] expected to be one of the following: 'electronics', 'organic'`],
                result: false
            }

            expect(result).to.be.deep.equal(expected);
        })
    });
});
