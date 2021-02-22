const {assert} = require('chai');
const {addFive, subtractTen, sum} = require('./4.Math Enforcer');

describe('MathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined with incorrect type', () => {
            assert.equal(undefined, addFive('Vladimir'))
        })

        it('should return correct number', () => {
            assert.equal(10, addFive(5))
        })
    });

    describe('substractTen', () => {
        it('should return undefined with incorrect type', () => {
            assert.equal(undefined, subtractTen('Vladimir'))
        })

        it('should return correct value', () => {
            assert.equal(0, subtractTen(10))
        })
    })

    describe('sum', () => {
        it('should return undefined with incorrect first param', () => {
            assert.equal(undefined, sum('Vladimir', 5));
        })

        it('should return undefined with incorrect second param', () => {
            assert.equal(undefined, sum(5, 'Vladimir'));
        })

        it('should return correct sum', () => {
            assert.equal(10, sum(5,5));
        })
    })
})