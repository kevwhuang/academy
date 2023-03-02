const isValid = require('../challenges/020-valid-parentheses');

describe('Main Cases', () => {
    test('Example 1', () => {
        expect(isValid('()')).toBeTruthy();
    });

    test('Example 2', () => {
        expect(isValid('()[]{}')).toBeTruthy();
    });

    test('Example 3', () => {
        expect(isValid('(]')).toBeFalsy();
    });
});

describe('Edge Cases', () => {
    test('Empty', () => {
        expect(isValid('')).toBeTruthy();
    });

    test('Single', () => {
        expect(isValid('{')).toBeFalsy();
    });
});

describe('Custom Cases', () => {
    test('Complex', () => {
        expect(isValid('()[[]{({})[({})]}()][{}]')).toBeTruthy();
    });

    test('Nested', () => {
        expect(isValid('{{{[[[((()))]]]}}}')).toBeTruthy();
    });

    test('Staggered', () => {
        expect(isValid('{[}]')).toBeFalsy();
    });
});
