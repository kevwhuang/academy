const assert = require('chai').assert;
const twoSum = require('../challenges/001-two-sum').twoSum;

describe('001. Two Sum', function () {
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
