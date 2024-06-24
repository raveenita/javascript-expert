import { describe, it } from 'mocha';
import { expect } from 'chai';
import { InvalidRegexError, evaluaterRegex } from '../src/util/invalid-regex';

describe('InvalidRegexError', () => {
    it('#evaluateRegex should throw an InvalidRegexError using an unsafe regex', () => {
        const unsafeRegex = '/^([a-z|A-Z|0-9]+\s?)+$/';

        expect(() => evaluaterRegex(unsafeRegex)).to.throw(InvalidRegexError);
    });   
    
    it('#evaluateRegex should throw an InvalidRegexError using an unsafe regex', () => {
        const unsafeRegex = '/^([a-z])$/';

        expect(() => evaluaterRegex(unsafeRegex)).not.to.throw(InvalidRegexError);
        expect(evaluaterRegex).to.be.ok;
    });   
});