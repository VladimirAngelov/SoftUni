const assert = require('chai').assert;
const app = require('./2. Even or Odd');

describe('isOddOrEven', () => {
    it('should return undefined with param different from string', () => {
        assert.equal(undefined, app.isOddOrEven(5))
    })

    it('should return even', () => {
        assert.equal('even', app.isOddOrEven('word'))
    })

    it('should return odd', () => {
        assert.equal('odd', app.isOddOrEven('words'))
    })
})