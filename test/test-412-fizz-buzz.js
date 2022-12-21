const assert = require('chai').assert;
const fizzBuzz = require('../challenges/412-fizz-buzz').fizzBuzz;

describe('412. Fizz Buzz', function () {
    describe('Main Cases', function () {
        const solution_1 = ['1', '2', 'Fizz'];
        const solution_2 = ['1', '2', 'Fizz', '4', 'Buzz'];
        const solution_3 = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11',
            'Fizz', '13', '14', 'FizzBuzz'];

        it('Example 1', function () {
            assert.deepEqual(fizzBuzz(3), solution_1);
        });

        it('Example 2', function () {
            assert.deepEqual(fizzBuzz(5), solution_2);
        });

        it('Example 3', function () {
            assert.deepEqual(fizzBuzz(15), solution_3);
        });
    });

});
