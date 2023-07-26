const inverseDiagonal = require('../challenges/inverse-diagonal');

describe('Main Cases', () => {
    test('1x1', () => {
        expect(inverseDiagonal([['a']])).toStrictEqual([['a']]);
    });

    test('2x2', () => {
        const input = [
            ['a', 'b'],
            ['c', 'd'],
        ];
        const sol = [
            ['c'],
            ['a', 'd'],
            ['b'],
        ];

        expect(inverseDiagonal(input)).toStrictEqual(sol);
    });

    test('3x3', () => {
        const input = [
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i'],
        ];
        const sol = [
            ['g'],
            ['d', 'h'],
            ['a', 'e', 'i'],
            ['b', 'f'],
            ['c'],
        ];

        expect(inverseDiagonal(input)).toStrictEqual(sol);
    });

    test('4x4', () => {
        const input = [
            ['a', 'b', 'c', 'd'],
            ['e', 'f', 'g', 'h'],
            ['i', 'j', 'k', 'l'],
            ['m', 'n', 'o', 'p'],
        ];
        const sol = [
            ['m'],
            ['i', 'n'],
            ['e', 'j', 'o'],
            ['a', 'f', 'k', 'p'],
            ['b', 'g', 'l'],
            ['c', 'h'],
            ['d'],
        ];

        expect(inverseDiagonal(input)).toStrictEqual(sol);
    });

    test('5x5', () => {
        const input = [
            ['a', 'b', 'c', 'd', 'e'],
            ['f', 'g', 'h', 'i', 'j'],
            ['k', 'l', 'm', 'n', 'o'],
            ['p', 'q', 'r', 's', 't'],
            ['u', 'v', 'w', 'x', 'y'],
        ];
        const sol = [
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

        expect(inverseDiagonal(input)).toStrictEqual(sol);
    });
});

describe('Edge Cases', () => {
    test('Empty', () => {
        expect(inverseDiagonal([])).toStrictEqual([]);
    });
});
