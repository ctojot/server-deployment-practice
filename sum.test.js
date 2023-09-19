// Use code as intended
const sum = require('./sum.js');


// Built in jest, used to give developers some justification for what code does
describe('Testing the sum package', () => {
    test('Should be able to sum 2 numbers', () => {
        let result = sum(4,8);

        expect(result).toEqual(12); // Built in functions the jest loads for us
    });
});