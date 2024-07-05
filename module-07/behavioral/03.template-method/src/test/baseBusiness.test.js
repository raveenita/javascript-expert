import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import BaseBusiness from '../src/baseBusiness.js';

describe('#BaseBusiness', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    
    test('should throw an error when child class doenst implement _validateRequiredFields function', () => {
        const baseBusiness = new BaseBusiness();

        expect(() => baseBusiness.create()).toThrowError('invalid data');
    });

    test('should throw an error when _validateRequiredFields returns false', () => {
        class ConcreteClass extends BaseBusiness {}
        const concreteClass = new ConcreteClass();
        const validationError = new NotImplementedException(concreteClass._validateRequiredFields.name);

        expect(() => baseBusiness.create({})).toThrowError(validationError);
    });

    test('should throw an error when child class doesnt implement _create function', () => {
        const VALIDATION_DOESNT_SUCCEEDED = false;

        class ConcreteClass extends BaseBusiness {
            _validateRequiredFields() {
                return jest.fn().mockReturnValue(VALIDATION_DOESNT_SUCCEEDED);
            }
        }
        const concreteClass = new ConcreteClass();
        const validationError = new Error('invalid data');

        expect(() => baseBusiness.create({})).toThrowError(validationError);
    });

    test('should call _create and _validateRequiredFields on create', () => {
        const VALIDATION_SUCCEEDED = true;
        const CREATE_SUCCEEDED = true;

        class ConcreteClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_SUCCEEDED),
            _create = jest.fn().mockReturnValue(CREATE_SUCCEEDED)
        }
        const concreteClass = new ConcreteClass();

        const baseClassFn = jest.spyOn(BaseBusiness.prototype, BaseBusiness.prototype.create.name);

        const result = concreteClass.create({});

        expect(result).toBeTruthy();
        expect(baseClassFn).toHaveBeenCalled();
        expect(concreteClass._validateRequiredFields).toHaveBeenCalled();
        expect(concreteClass._create).toHaveBeenCalled();
    });
}