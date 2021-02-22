const {assert} = require('chai');
const PaymentPackage = require('./7.Payment Package');

describe('PaymentPackage', () => {
    let paymentPackage;
    describe('constructor', () => {

        it('constructor should work properly with 2 params', () => {
            paymentPackage = new PaymentPackage('Vladimir', 20);
            let expected = new PaymentPackage('Vladimir', 20);
            assert.deepEqual(paymentPackage, expected)
        })

        it('should throw exception with incorrect name', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage(10, 20);
            }, 'Name must be a non-empty string')
        })

        it('should throw exception with incorrect name length 0', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('', 20);
            }, 'Name must be a non-empty string')
        })

        it('should throw exception with incorrect value', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('Vladimir', 'Vladimir');
            }, 'Value must be a non-negative number')
        })

        it('should throw exception with negative number', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('Vladimir', -1);
            }, 'Value must be a non-negative number')
        })

        it('should throw exception with negative number on VAT property', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('Vladimir', 20);
                paymentPackage.VAT = -1;
            }, 'VAT must be a non-negative number')
        })

        it('should throw exception with property different than number', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('Vladimir', 20);
                paymentPackage.VAT = 'a';
            }, 'VAT must be a non-negative number')
        })

        it('should throw exception when value of Active is not a boolean', () => {
            assert.throw(() => {
                paymentPackage = new PaymentPackage('Vladimir', 20);
                paymentPackage.active = 'a';
            }, 'Active status must be a boolean')
        })

        it('toString return a string, containing an overview of the instance if Active is true', () => {
            paymentPackage = new PaymentPackage('Vladimir', 20);
            const output = [
                `Package: Vladimir`,
                `- Value (excl. VAT): 20`,
                `- Value (VAT ${20}%): ${24}`
            ];
            assert.equal(output.join('\n'), paymentPackage.toString());
        })

        it('toString return a string, containing an overview of the instance if Active is false', () => {
            paymentPackage = new PaymentPackage('Vladimir', 20);
            paymentPackage.active = false;

            const output = [
                `Package: Vladimir (inactive)`,
                `- Value (excl. VAT): 20`,
                `- Value (VAT ${20}%): ${24}`
            ];
            assert.equal(output.join('\n'), paymentPackage.toString());
        })
    })
})