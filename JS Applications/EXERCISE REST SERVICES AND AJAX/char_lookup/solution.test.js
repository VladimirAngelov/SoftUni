const assert = require('chai').assert;
const functionToTest = require('./solution.js').lookupChar;

describe('lookupChar', () => {
    it('should return undefined with invalid parameter types', () => {
        assert.equal(functionToTest('index will be', 'invalid'), undefined);
        assert.equal(functionToTest(1, 1), undefined);
        assert.equal(functionToTest(1, 'index'), undefined);
        assert.equal(functionToTest('floating-poing index', 1.23), undefined);
    });

    it('should return "Incorrect index" on index greater than length', () => {
        assert.equal(functionToTest('too', 4), 'Incorrect index');
        assert.equal(functionToTest('short', 5), 'Incorrect index');
    });

    it('should return "Incorrect index" on index less than zero', () => {
        assert.equal(functionToTest('long string', -1), 'Incorrect index');
        assert.equal(functionToTest('', -1), 'Incorrect index');
    });

    it('should return correct index index', () => {
        assert.equal(functionToTest('index 6', 6), '6');
        assert.equal(functionToTest('chaR', 3), 'R');
    });
});