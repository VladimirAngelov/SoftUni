const assert = require('chai').assert;
const {PaymentPackage} = require('./PaymentPackage.js');
let classInstance;

describe('PaymentPackage', function() {
    
    describe('constructor', function() {
        it('should assign correct values from parameters', function() {
            classInstance = new PaymentPackage('Name', 100);
            assert.equal(classInstance.name, 'Name');
            assert.equal(classInstance.value, 100);
            assert.equal(classInstance.VAT, 20);
            assert.equal(classInstance.active, true);
        });
    });

    describe('name', function() {
        it('should throw error when parameter is not a string', function() {
            classInstance = new PaymentPackage('name', 0);
            assert.throw(() => classInstance.name = 15, Error);
        });
        it('should throw error when parameter is an empty string', function() {
            classInstance = new PaymentPackage('name', 0);
            assert.throw(() => classInstance.name = '', Error);
        });
        it('should assign correct name from parameter', function() {
            classInstance = new PaymentPackage('old name', 0);
            classInstance.name = 'new name';
            assert.equal(classInstance.name, 'new name');
        });
        it('should return correct name', function() {
            classInstance = new PaymentPackage('correct name', 100);
            assert.equal(classInstance.name, 'correct name');
        });
    });

    describe('value', function() {
        it('should throw error when parameter is not a number', function() {
            classInstance = new PaymentPackage('name', 0);
            assert.throw(() => classInstance.value = 'not a number', Error);
        });
        it('should throw error when parameter is a negative number', function() {
            classInstance = new PaymentPackage('name', 0);
            assert.throw(() => classInstance.value = -1, Error);
        });
        it('should assign correct value from parameter', function() {
            classInstance = new PaymentPackage('name', 0);
            classInstance.value = 999;
            assert.equal(classInstance.value, 999);
        });
        it('should return correct value', function() {
            classInstance = new PaymentPackage('name', 100);
            assert.equal(classInstance.value, 100);
        });
    });

    describe('VAT', function() {
        it('should throw error when parameter is not a number', function() {
            classInstance = new PaymentPackage('name', 0);
            assert.throw(() => classInstance.VAT = 'not a number', Error);
        });
        it('should throw error when parameter is a negative number', function() {
            classInstance = new PaymentPackage('name', 0);
            assert.throw(() => classInstance.VAT = -1, Error);
        });
        it('should assign correct value from parameter', function() {
            classInstance = new PaymentPackage('name', 0);
            classInstance.VAT = 30;
            assert.equal(classInstance.VAT, 30);
        });
        it('should return correct value', function() {
            classInstance = new PaymentPackage('name', 0);
            assert.equal(classInstance.VAT, 20);
        });
    });

    describe('active', function() {
        it('should throw error when parameter is not a boolean', function() {
            classInstance = new PaymentPackage('name', 0);
            assert.throw(() => classInstance.active = 'not a boolean', Error);
        });
        it('should assign correct value from parameter', function() {
            classInstance = new PaymentPackage('name', 0);
            classInstance.active = false;
            assert.equal(classInstance.active, false);
        });
        it('should return correct value', function() {
            classInstance = new PaymentPackage('name', 0);
            assert.equal(classInstance.active, true);
        });
    });


    describe('toString', function() {
        it ('should return correct information when active', function() {
            classInstance = new PaymentPackage('name', 100);
            let expectedResult = [`Package: name`,
                                `- Value (excl. VAT): 100`,
                                `- Value (VAT 20%): 120`].join('\n');
            assert.equal(classInstance.toString(), expectedResult);
        });

        it ('should return correct information when inactive', function() {
            classInstance = new PaymentPackage('name', 100);
            classInstance.active = false;
            let expectedResult = [`Package: name (inactive)`,
                                `- Value (excl. VAT): 100`,
                                `- Value (VAT 20%): 120`].join('\n');
            assert.equal(classInstance.toString(), expectedResult);
        });
    });

});

