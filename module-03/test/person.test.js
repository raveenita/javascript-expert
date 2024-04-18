import mocha from 'mocha';
import chai from 'chai';
import Person from '../src/person.js';
const { describe, it } = mocha;
const { expect } = chai;

describe('Person', () => {
    it('should return a person instance from a string', () => {
        const person =  Person.generateInstanceFromString('1 Bike,Car 20000 2000-01-01 2000-01-02');

        const expected = {
            id: '1',
            vehicles: ['Bike', 'Car'],
            kmTravelled: '20000',
            from: '2000-01-01',
            to: '2000-01-02'
        };

        expect(person).to.be.deep.equal(expected);
    });

    it('should format values', () => {
        const person = new Person({
            id: '1',
            vehicles: ['Bike', 'Carro'],
            kmTravelled: '2000',
            from: '2020-01-01',
            to: '2020-02-01'
        });

        const expected = {
            id: 1,
            vehicles: 'Bike e Carro',
            kmTravelled: '2.000 km',
            from: '01 de janeiro de 2020',
            to: '01 de fevereiro de 2020'
        };

        const result = person.formatted('pt-BR');

        expect(result).to.be.deep.equal(expected);
    });
});