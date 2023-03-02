const fizzBuzz = require('../challenges/412-fizz-buzz');

describe('Main Cases', () => {
    test('Example 1', () => {
        expect(fizzBuzz(3)).toStrictEqual(['1', '2', 'Fizz']);
    });

    test('Example 2', () => {
        expect(fizzBuzz(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    });

    test('Example 3', () => {
        const sol = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11',
            'Fizz', '13', '14', 'FizzBuzz'];
        expect(fizzBuzz(15)).toStrictEqual(sol);
    });
});

describe('Edge Cases', () => {
    test('Empty', () => {
        expect(fizzBuzz(0)).toStrictEqual([]);
    });
});
