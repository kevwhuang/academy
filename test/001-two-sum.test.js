const twoSum = require('../challenges/001-two-sum');

describe('Main Cases', () => {
    test('Example 1', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    });

    test('Example 2', () => {
        expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
    });

    test('Example 3', () => {
        expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
    });
});

describe('Edge Cases', () => {
    test('0', () => {
        expect(twoSum([0, 0], 0)).toStrictEqual([0, 1]);
    });
});

describe('Custom Cases', () => {
    test('- nums + result', () => {
        expect(twoSum([2, 5, -3, 1, 5], 2)).toStrictEqual([1, 2]);
    });

    test('- nums - result', () => {
        expect(twoSum([-5, 0, 5, -1, 1], -4)).toStrictEqual([0, 4]);
    });
});
