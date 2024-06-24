import { describe, it } from 'mocha';
import { expect } from 'chai';
import { TextProcessorFluentAPI } from '../src/textProcessorFluentAPI';
import { mock } from './mock/valid';

describe('TextProcessorFluentAPI test suite', () => {
    it('#build', () => {
        const result = new TextProcessorFluentAPI(mock).build();
        expect(result).to.be.deep.equal(mock);
    });

    it('#extractPeopleData', () => {
        const result = new TextProcessorFluentAPI(mock)
        .extractPeopleData()
        .build();
    });

    it('#mapPerson' , () => {
        const content = [
            'John Doe',
            'american',
            'married',
            'CPF 235.743.420-12',
            'residente e domiciliada a Rua dos bobos',
            'zero',
            'bairro Alphaville',
            'São Paulo.'
        ];
        
        const result = new TextProcessorFluentAPI(content).mapPerson().build();

        const expect = {
            name: 'John Doe',
            citizenship: 'American',
            maritalStatus: 'Married',
            cpf: '23574342012',
            street: 'Rua dos bobos',
            number: 'zero',
            neighborhood: 'Alphaville',
            city: 'São Paulo'
        };
    });
});