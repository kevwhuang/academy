afterAll(() => null);
afterEach(() => null);
beforeAll(() => null);
beforeEach(() => null);

describe('Equality', () => {
    const $ = require('../javascript/jest');

    test('toBe', () => {
        expect($.diff(2, 3)).toBe(-1);
        expect($.sum(0, 1)).toBe(1);
    });

    test('toBeDefined', () => expect($.diff).toBeDefined());

    test('toBeUndefined', () => expect($.sum).not.toBeUndefined());
});

describe('Type Equality', () => {
    test('toBeFalsy', () => expect(false).toBeFalsy());

    test('toBeInstanceOf', () => expect(new Number()).toBeInstanceOf(Number));

    test('toBeNaN', () => expect(NaN).toBeNaN());

    test('toBeNull', () => expect(null).toBeNull());

    test('toBeTruthy', () => expect(0).not.toBeTruthy());
});

describe('Comparison', () => {
    test('toBeGreaterThan', () => expect(1).toBeGreaterThan(0));

    test('toBeGreaterThanOrEqual', () => expect(0).toBeGreaterThanOrEqual(0));

    test('toBeLessThan', () => expect(1).toBeLessThan(2));

    test('toBeLessThanOrEqual', () => expect(0).toBeLessThanOrEqual(0));
});

describe('Deep Match', () => {
    test('toContain', () => expect([1]).toContain(1));

    test('toEqual', () => expect([]).toEqual([]));

    test('toMatch', () => expect('string').toMatch(/\w+/));

    test('toStrictEqual', () => expect({ 1: 1 }).toStrictEqual({ 1: 1 }));

    test('toThrow', () => expect(() => { throw Error(); }).toThrow());
});

describe('Asynchronous', () => {
    test('assertions', async () => {
        const url = 'https://jsonplaceholder.typicode.com/users/1';
        const res = await fetch(url);
        const data = await res.json();

        expect(res.ok).toBeTruthy();
        expect(res.redirected).toBeFalsy();
        expect(res.status).toBe(200);
        expect(data.username).toBe('Bret');
        expect(Object.keys(data).length).toBe(8);
        expect.assertions(5);
    });
});
