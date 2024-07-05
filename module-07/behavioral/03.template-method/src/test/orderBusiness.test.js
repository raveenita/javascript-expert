import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import BaseBusiness from '../src/baseBusiness.js';
import OrderBusiness from '../business/orderBusiness.js';

describe('#Test suite for Template Method design pattern', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    describe('#OrderBusiness', () => {
        test('execute order business without template method', () => {
            const order = new Order({
                customerId: '123',
                amount: 100,
                products: [{ description: 'ferrari'}]
            });

            const orderBusiness = new OrderBusiness();

            const isValid = orderBusiness._validateRequiredFields(order);
            const result = orderBusiness._create(order);

            expect(isValid).toBeTruthy();
            expect(result).toBeTruthy();
        });
        

        test('execute order business with template method', () => {
            const order = new Order({
                customerId: '123',
                amount: 100,
                products: [{ description: 'ferrari'}]
            });

            const orderBusiness = new OrderBusiness();
            const calledValidationFn = jest.spyOn(orderBusiness, orderBusiness._validateRequiredFields.name)
            const calledCreateFn = jest.spyOn(orderBusiness, orderBusiness._create.name)

            const result = orderBusiness.create(order);

            expect(result).toBeTruthy();
            expect(calledValidationFn).toHaveBeenCalled();
            expect(calledCreateFn).toHaveBeenCalled();
        });
    });
});
