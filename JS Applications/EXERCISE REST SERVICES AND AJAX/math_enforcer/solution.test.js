const assert = require('chai').assert;
const objectToTest = require('./solution.js').mathEnforcer;

describe('mathEnforcer', () => {

    describe('addFive', () => {
        it('should return undefined on invalid argument type', () => {
            assert.equal(objectToTest.addFive('seven'), undefined);
            assert.equal(objectToTest.addFive(false), undefined);
        });
    
        it('should return correct result', () => {
            assert.equal(objectToTest.addFive(7), 12);
            // negative number check     
            assert.equal(objectToTest.addFive(-7), -2);
            // floating point number check (delta of 0.01)
            assert.equal(objectToTest.addFive(8.88), 13.88, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined on invalid argument type', () => {
            assert.equal(objectToTest.subtractTen('twelve'), undefined);
            assert.equal(objectToTest.subtractTen(true), undefined);
        });
    
        it('should return correct result', () => {
            assert.equal(objectToTest.subtractTen(12), 2);
            // negative number check
            assert.equal(objectToTest.subtractTen(7), -3);
            // floating point number check (delta of 0.01)
            assert.closeTo(objectToTest.subtractTen(5.55), -4.45, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined on invalid argument types', () => {
            assert.equal(objectToTest.sum('invalid', 1), undefined);
            assert.equal(objectToTest.sum(1, 'invalid'), undefined);
            assert.equal(objectToTest.sum('ten', 'five'), undefined);
            assert.equal(objectToTest.sum(true, false), undefined);
        });
    
        it('should return correct result', () => {
            assert.equal(objectToTest.sum(10, 5), 15);
            // negative number check
            assert.equal(objectToTest.sum(7, -2), 5);
            // floating point numbers check (delta of 0.01)
            assert.closeTo(objectToTest.sum(2.33, 2.44), 4.77, 0.01);
        });
    });
})