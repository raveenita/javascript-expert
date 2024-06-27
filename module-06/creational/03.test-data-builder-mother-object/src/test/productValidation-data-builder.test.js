const { expect } = require('chai');
const { it, describe } = require('mocha');
const productValidator = require('..');

describe('Test Data Builder', () => {
    it('shouldnt return error with valid product', ()=> {
        const product = ProductDataBuilder.aProduct().build();
        const result = productValidator(product);

        const expected = {
            errors: [],
            result: true
        }

        expect(result).to.be.deep.equal(expected);
    });

    describe('Product Validation Runes', () => {
        it('should return error when product id is invalid', () => {
            const product = ProductDataBuilder.aProduct().withInvalidId().build();
            const result = productValidator(product);

            const expected = {
                errors: [`id: invalid length, current [1] expected to be between 2 and 20`],
                result: false
            }

            expect(result).to.be.deep.equal(expected);
        });
        it('should return error when product name is invalid', () => {
            const product = ProductDataBuilder.aProduct().withInvalidName().build();
            const result = productValidator(product);

            const expected = {
                errors: [`name: invalid value, current [abc123] expected to have only words`],
                result: false
            }

            expect(result).to.be.deep.equal(expected);
        });
        it('should return error when product price is invalid', () => {
            const product = ProductDataBuilder.aProduct().withInvalidPrice().build();
            const result = productValidator(product);

            const expected = {
                errors: [`name: invalid value, current [abc123] expected to have only words`],
                result: false
            }

            expect(result).to.be.deep.equal(expected);
        });

        it('should return error when product category is invalid', () => {
            const product = ProductDataBuilder.aProduct().withInvalidCategory().build();
            const result = productValidator(product);

            const expected = {
                errors: [`category: invalid value, current [shopping] expected to be one of the following: 'electronics', 'organic'`],
                result: false
            }

            expect(result).to.be.deep.equal(expected);
        })
    });
});
