const $ = require('../javascript/linked-list');

const list1 = new $.LinkedList();
const list2 = new $.LinkedList();

describe('Linked List 1', () => {
    test('Basic Insertions', () => {
        expect(list1.insert(50)).toBe('success');
        expect(list1.insertLast(70)).toBe('success');
        expect(list1.insert(40)).toBe('success');
        expect(list1.insertLast(80)).toBe('success');
    });

    test('Indexed Insertions', () => {
        expect(list1.insertAt(30, 0)).toBe('success');
        expect(list1.insertAt(90, 5)).toBe('success');
        expect(list1.insertAt(110, 100)).toBe('success');
        expect(list1.insertAt(60, 3)).toBe('success');
    });

    test('Negative Indexed Insertions', () => {
        expect(list1.insertAt(100, -2)).toBe('success');
        expect(list1.insertAt(120, -1)).toBe('success');
        expect(list1.insertAt(10, -11)).toBe('success');
        expect(list1.insertAt(20, -11)).toBe('success');
    });

    test('Macro Methods', () => {
        expect(list1.print()).toBe('success');
        expect(list1.head).toBeInstanceOf($.Node);
        expect(list1.size).toBe(12);
        expect(list1.clear()).toBe('success');
        expect(list1.size).toBe(0);
        expect(list1.head).toBeNull();
    });
});

describe('Linked List 2', () => {
    test('Empty Insertions', () => {
        expect(list2.insertLast(20)).toBe('success');
        expect(list2.insertAt(10)).toBe('success');
        expect(list2.clear()).toBe('success');
        expect(list2.insertAt(10)).toBe('success');
    });

    test('Insufficient Arguments', () => {
        expect(list2.insert()).toBeNull();
        expect(list2.insertLast()).toBeNull();
        expect(list2.insertAt()).toBeNull();
    });

    test('Insufficient Arguments on Empty List', () => {
        expect(list2.clear()).toBe('success');
        expect(list2.insert()).toBeNull();
        expect(list2.insertLast()).toBeNull();
        expect(list2.insertAt()).toBeNull();
    });

    test('Read Data', () => {
        expect(list2.insert(300)).toBe('success');
        expect(list2.insert(200)).toBe('success');
        expect(list2.insert(100)).toBe('success');
        expect(list2.at(0)).toBe(100);
        expect(list2.at(2)).toBe(300);
        expect(list2.at(100)).toBe(300);
        expect(list2.at(-100)).toBe(100);
    });

    test('Basic Deletions', () => {
        expect(list2.removeAt(1)).toBe('success');
        expect(list2.at(1)).toBe(300);
        expect(list2.removeAt(0)).toBe('success');
        expect(list2.at(1)).toBe(300);
        expect(list2.removeAt(2)).toBeNull();
        expect(list2.removeAt()).toBeNull();
    });

    test('Negative Deletions', () => {
        expect(list2.removeAt(-1)).toBe('success');
        expect(list2.removeAt(-1)).toBeNull();
        expect(list2.insert(200)).toBe('success');
        expect(list2.insert(100)).toBe('success');
        expect(list2.removeAt(-2)).toBe('success');
        expect(list2.at(1)).toBe(200);
        expect(list2.size).toBe(1);
    });

    test('Deletions on Empty List', () => {
        expect(list2.clear()).toBe('success');
        expect(list2.removeAt()).toBeNull();
        expect(list2.removeAt(1)).toBeNull();
        expect(list2.removeAt(-1)).toBeNull();
    });
});
