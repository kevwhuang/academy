const blank = () => { };

beforeAll(blank);
beforeEach(blank);
afterEach(blank);
afterAll(blank);

describe('Matching', () => {
    let funcs = {};

    try {
        funcs = require('../javascript/common');
    } catch {
        funcs.diff = (a, b) => a - b;
        funcs.sum = (a, b) => a + b;
    }

    test('toBe', () => {
        const { getType } = require('jest-get-type');

        expect(funcs.diff(2, 3)).toBe(-1);
        expect(funcs.sum(0, 1)).toBe(1);
        expect(getType([])).toBe('array');
    });

    test('toBeCloseTo', () => expect(0.1 + 0.2).toBeCloseTo(0.3, 5));

    test('toHaveLength', () => expect([0, 1]).toHaveLength(2));

    test('toBeDefined', () => expect(funcs.diff).toBeDefined());

    test('toBeUndefined', () => expect(funcs.sum).not.toBeUndefined());
});

describe('Type Matching', () => {
    test('toBeTruthy', () => expect(1).toBeTruthy());

    test('toBeFalsy', () => expect('').toBeFalsy());

    test('toBeNaN', () => expect(NaN).toBeNaN());

    test('toBeNull', () => expect(null).toBeNull());

    test('toBeInstanceOf', () => expect(new Number()).toBeInstanceOf(Number));
});

describe('Comparisons', () => {
    test('toBeGreaterThan', () => expect(1).toBeGreaterThan(0));

    test('toBeGreaterThanOrEqual', () => expect(0).toBeGreaterThanOrEqual(0));

    test('toBeLessThan', () => expect(1).toBeLessThan(2));

    test('toBeLessThanOrEqual', () => expect(0).toBeLessThanOrEqual(0));
});

describe('Deep Matching', () => {
    test('toEqual', () => expect([]).toEqual([undefined]));

    test('toStrictEqual', () => expect({ 1: undefined }).toStrictEqual({ 1: undefined }));

    test('toMatch', () => expect('string').toMatch(/\w+/));

    test('toMatchObject', () => expect({ a: 1, b: 2 }).toMatchObject({ b: 2 }));

    test('toContain', () => expect([1]).toContain(1));

    test('toContainEqual', () => expect([{ 1: 1 }]).toContainEqual({ 1: 1 }));

    test('toHaveProperty', () => expect({ a: { b: 2 } }).toHaveProperty('a.b', 2));

    test('toThrow', () => expect(() => { throw Error('ab'); }).toThrow('b'));
});

describe('Asynchronous Testing', () => {
    const URL = 'https://jsonplaceholder.typicode.com/users/1';

    test('hasAssertions', () => fetch(URL)
        .then(res => res.json())
        .then(data => {
            expect.hasAssertions();
            expect(data).not.toBeNull();
        }));

    test('assertions', async () => {
        const res = await fetch(URL);
        const data = await res.json();

        expect.assertions(4);
        expect(res.status).toBe(200);
        expect(res.ok).toBeTruthy();
        expect(Object.keys(data)).toHaveLength(8);
        expect(data.username).toBe('Bret');
    });

    test('resolves', () => expect(fetch(URL)).resolves.toBeDefined());

    test('rejects', () => expect(fetch('')).rejects.toBeDefined());
});

describe('Globals', () => {
    const table1 = [
        [Infinity, true],
        [NaN, false],
        ['', false],
        [[], true],
        [{}, true],
    ];
    const table2 = [
        [{ NaN }, expect.anything(), 'anything'],
        [0, expect.any(Number), 'any'],
        ['abc', expect.stringContaining('b'), 'stringContaining'],
        ['abc', expect.stringMatching(/a?c/), 'stringMatching'],
        [{ a: 1 }, expect.objectContaining({ a: 1 }), 'objectContaining'],
    ];

    let counter = 1;

    describe/*.only*/.each(table1)('Describe', (a, exp) => {
        test/*.only*/(`Test ${counter++}`, () => expect(Boolean(a)).toBe(exp));
    });

    describe.each(table2)('Asymmetric Matching', (a, exp, desc) => {
        test.each([null])(desc, () => expect(a).toEqual(exp));
    });

    describe.skip('', () => {
        jest.fn();
        jest.mock('axios');
    }, timeout);

    test.skip('', blank, timeout);

    it.todo('');
});
