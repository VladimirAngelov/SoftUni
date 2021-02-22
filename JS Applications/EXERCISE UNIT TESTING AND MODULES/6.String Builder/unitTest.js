const {assert} = require('chai');
const StringBuilder = require('./6.String Builder');

describe('StringBuilder', () => {
    let sb;
    beforeEach(() => {
        sb = new StringBuilder();
    })

    describe('verifyParams', () => {
        it('should throw exception when param is not a string', () => {
            assert.throw(() => {
                new StringBuilder({});
            }, 'Argument must be string')
        })
    })

    describe('constructor', () => {
        it('should work properly without argument', () => {
            assert.equal('', sb.toString());
        })

        it('should work properly with argument', () => {
            sb = new StringBuilder('Vladimir');

            assert.equal('Vladimir', sb.toString());
        })
    })

    describe('append', () => {
        it('should append text at the end of a string', () => {
            sb.append('Vladimir');

            assert.equal('Vladimir', sb.toString())
        })
    })

    describe('prepend', () => {
        it('should prepend text at the start of a string', () => {
            sb.append('ladimir')
            sb.prepend('V');
            assert.equal('Vladimir', sb.toString())
        })
    })

    describe('insertAt', () => {
        it('should insert text at index', () => {
            sb.append('ladimir')
            sb.insertAt('V', 0);
            assert.equal('Vladimir', sb.toString())
        })
    })

    describe('remove', () => {
        it('should remove text from index to length', () => {
            sb.append('Vladimir')
            sb.remove(0, 1);
            assert.equal('ladimir', sb.toString())
        })
    })

    describe('toString', () => {
        it('should return correct string', () => {
            sb.append('Vladimir')
            assert.equal('Vladimir', sb.toString())
        })
    })
});