const assert = require('chai').assert;
const {StringBuilder} = require('./string-builder.js');
let classInstance;

describe('StringBuilder', function() {
    
    describe('constructor', function () {
        it('should throw exception when parameter is not a string', function() {
            assert.throw(() => classInstance = new StringBuilder(2), TypeError);
        });
        it('should create an empty array on no parameter', function() {
            classInstance = new StringBuilder();
            assert.equal(classInstance.toString(), '');
        });
        it('should create an array with one item on given parameter', function() {
            classInstance = new StringBuilder('Blank');
            assert.equal(classInstance.toString(), 'Blank');
        });
    });

    describe('toString()', function() {
        it('should return the correct string', function() {
            classInstance = new StringBuilder('Hello, world');
            assert.equal(classInstance.toString(), 'Hello, world');
        });
    });

    describe('append', function() {
        it('should throw exception when parameter is not a string', function() {
            classInstance = new StringBuilder();
            assert.throw(() => classInstance.append(2), TypeError);
        });
        it('should append the given parameter to the array #1', function() {
            classInstance = new StringBuilder('Hello');
            classInstance.append(', world');
            assert.equal(classInstance.toString(), 'Hello, world');
        });
        it('should append the given parameter to the array #2', function() {
            classInstance = new StringBuilder('Goodbye');
            classInstance.append(', John');
            classInstance.append('!');
            assert.equal(classInstance.toString(), 'Goodbye, John!');
        });
    });
    
    describe('prepend', function() {
        it('should throw exception when parameter is not a string', function() {
            classInstance = new StringBuilder();
            assert.throw(() => classInstance.prepend(2), TypeError);
        });
        it('should prepend the given parameter to the array #1', function() {
            classInstance = new StringBuilder(', world');
            classInstance.prepend('Hello');
            assert.equal(classInstance.toString(), 'Hello, world');
        });
        it('should prepend the given parameter to the array #2', function() {
            classInstance = new StringBuilder('math!');
            classInstance.prepend(' love ');
            classInstance.prepend('I');
            assert.equal(classInstance.toString(), 'I love math!');
        });
    });

    describe('insertAt', function() {
        it('should throw exception when parameter is not a string', function() {
            classInstance = new StringBuilder();
            assert.throw(() => classInstance.insertAt(2, 0), TypeError);
        });
        it('should insert the given parameter at the correct index in the array #1', function() {
            classInstance = new StringBuilder('Helloworld');
            classInstance.insertAt(', ', 5);
            assert.equal(classInstance.toString(), 'Hello, world');
        });
        it('should insert the given parameter at the correct index in the array #2', function() {
            classInstance = new StringBuilder('WaitJohn');
            classInstance.insertAt(' for ', 4);
            classInstance.insertAt('!', 13);
            assert.equal(classInstance.toString(), 'Wait for John!');
        });
    });

    describe('remove', function() {
        it('should remove the correct portion of the array #1', function() {
            classInstance = new StringBuilder('Hello, world');
            classInstance.remove(5, 7);
            assert.equal(classInstance.toString(), 'Hello');
        });
        it('should remove the correct portion of the array #2', function() {
            classInstance = new StringBuilder('Wait for the John!!!');
            classInstance.remove(9, 4);
            classInstance.remove(13, 2);
            assert.equal(classInstance.toString(), 'Wait for John!');
        });
    });
});