const assert = require('chai').assert;
const inverseDiagonal = require('../challenges/000-inverse-diagonal').inverseDiagonal;

describe('000. Inverse Diagonal', function () {
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
