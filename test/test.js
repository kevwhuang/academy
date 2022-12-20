const assert = require('chai').assert;
const fizzBuzz = require('../challenges/fizz-buzz.js').fizzBuzz;
const inverseDiagonal = require('../challenges/inverse-diagonal.js').inverseDiagonal;
const twoSum = require('../challenges/two-sum.js').twoSum;

describe('0. Inverse Diagonal', function () {
    describe('Main Cases', function () {
        const case_1 = [
            ['a'],
        ];
        const case_2 = [
            ['a', 'b'],
            ['c', 'd'],
        ];
        const case_3 = [
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i'],
        ];
        const case_4 = [
            ['a', 'b', 'c', 'd'],
            ['e', 'f', 'g', 'h'],
            ['i', 'j', 'k', 'l'],
            ['m', 'n', 'o', 'p'],
        ];
        const case_5 = [
            ['a', 'b', 'c', 'd', 'e'],
            ['f', 'g', 'h', 'i', 'j'],
            ['k', 'l', 'm', 'n', 'o'],
            ['p', 'q', 'r', 's', 't'],
            ['u', 'v', 'w', 'x', 'y'],
        ];
        const solution_1 = [
            ['a'],
        ];
        const solution_2 = [
            ['c'],
            ['a', 'd'],
            ['b'],
        ];
        const solution_3 = [
            ['g'],
            ['d', 'h'],
            ['a', 'e', 'i'],
            ['b', 'f'],
            ['c'],
        ];
        const solution_4 = [
            ['m'],
            ['i', 'n'],
            ['e', 'j', 'o'],
            ['a', 'f', 'k', 'p'],
            ['b', 'g', 'l'],
            ['c', 'h'],
            ['d'],
        ];
        const solution_5 = [
            ['u'],
            ['p', 'v'],
            ['k', 'q', 'w'],
            ['f', 'l', 'r', 'x'],
            ['a', 'g', 'm', 's', 'y'],
            ['b', 'h', 'n', 't'],
            ['c', 'i', 'o'],
            ['d', 'j'],
            ['e'],
        ];

        it('1x1', function () {
            assert.deepEqual(inverseDiagonal(case_1), solution_1);
        });
        it('2x2', function () {
            assert.deepEqual(inverseDiagonal(case_2), solution_2);
        });
        it('3x3', function () {
            assert.deepEqual(inverseDiagonal(case_3), solution_3);
        });
        it('4x4', function () {
            assert.deepEqual(inverseDiagonal(case_4), solution_4);
        });
        it('5x5', function () {
            assert.deepEqual(inverseDiagonal(case_5), solution_5);
        });
    });

    describe('Edge Cases', function () {
        it('0x0', function () {
            assert.deepEqual(inverseDiagonal([]), []);
        });
    });
});

describe('1. Two Sum', function () {
    describe('Main Cases', function () {
        const solution_1 = [0, 1];
        const solution_2 = [1, 2];
        const solution_3 = [0, 1];

        it('Example 1', function () {
            assert.deepEqual(twoSum([2, 7, 11, 15], 9), solution_1);
        });
        it('Example 2', function () {
            assert.deepEqual(twoSum([3, 2, 4], 6), solution_2);
        });
        it('Example 3', function () {
            assert.deepEqual(twoSum([3, 3], 6), solution_3);
        });
    });

    describe('Edge Cases', function () {
        it('0', function () {
            assert.deepEqual(twoSum([0, 0], 0), [0, 1]);
        });
    });

    describe('Custom Cases', function () {
        it('- nums - result', function () {
            assert.deepEqual(twoSum([-5, 0, 5, -1, 1], -4), [0, 4]);
        });
        it('- nums + result', function () {
            assert.deepEqual(twoSum([2, 5, -3, 1, 5], 2), [1, 2]);
        });
    });
});

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
