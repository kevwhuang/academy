const removeDuplicates = require('../challenges/026-remove-duplicates');

describe('Main Cases', () => {
    test('Example 1', () => {
        expect(removeDuplicates([1, 1, 2])).toStrictEqual([1, 2]);
    });

    test('Example 2', () => {
        expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual([0, 1, 2, 3, 4]);
    });
});

describe('Edge Cases', () => {
    test('Empty', () => {
        expect(removeDuplicates([])).toStrictEqual([]);
    });

    test('Single', () => {
        expect(removeDuplicates([1])).toStrictEqual([1]);
    });
});
