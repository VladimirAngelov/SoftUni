const {assert} = require('chai');
const {lookupChar} = require('./3.Char Lookup');

describe('charLookUp', () => {
    it('should return undefined with incorrect first param', () => {
        assert.equal(undefined, lookupChar(5, 0))
    })

    it('should return undefined with incorrect second param', () => {
        assert.equal(undefined, lookupChar('5', '0'))
    })

    it('should return incorrect index with incorrect first param length', () => {
        assert.equal('Incorrect index', lookupChar('Vladimir', 8))
    })

    it('should return incorrect index with incorrect second param lower then 0', () => {
        assert.equal('Incorrect index', lookupChar('Vladimir', -1))
    })

    it('should return correct character', () => {
        assert.equal('V', lookupChar('Vladimir', 0))
    })
})