const assert = require('chai').assert;
const functionToTest = require('./solution.js').isOddOrEven;

describe('isOddOrEven', () => {
    it('should return undefined when parameter is not a string', () => {
        assert.equal(functionToTest(5), undefined);
        assert.equal(functionToTest([]), undefined);
        assert.equal(functionToTest({}), undefined);
    });
    it('should return even on string with an even length', () => {
        assert.equal(functionToTest('even'), 'even');
        assert.equal(functionToTest('meow'), 'even');
        assert.equal(functionToTest('bark'), 'even');
    });
    it('should return odd on string with an odd length', () => {
        assert.equal(functionToTest('odd'), 'odd');
        assert.equal(functionToTest('cat'), 'odd');
        assert.equal(functionToTest ('dog'), 'odd');
    });
});