class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    at(index) {
        if (typeof index === 'undefined') return null;
        if (!this.size) return null;

        if (index < 0 && -index <= this.size) index = this.size + index;
        if (index < 0 && -index > this.size) index = 0;
        if (index > 0 && index >= this.size) index = this.size - 1;

        let count = 0;
        let current = this.head;

        while (current) {
            if (count === index) return current.data;

            current = current.next;
            count += 1;
        }

        return null;
    }

    clear() {
        this.head = null;
        this.size = 0;

        return 'success';
    }

    insert(data) {
        if (typeof data === 'undefined') return null;

        this.head = new Node(data, this.head);
        this.size += 1;

        return 'success';
    }

    insertAt(data, index) {
        if (typeof data === 'undefined') return null;
        if (typeof index === 'undefined') return this.insert(data);
        if (!this.size) return this.insert(data);

        if (index < 0 && -index <= this.size) index = this.size + index + 1;
        if (index < 0 && -index > this.size) index = 0;
        if (!index) this.insert(data);

        if (index > 0 && index >= this.size) {
            this.insertLast(data);

            return 'success';
        }

        if (index > 0 && index < this.size) {
            const node = new Node(data);
            let count = 0;
            let current = this.head;
            let previous;

            while (count < index) {
                [previous, current] = [current, current.next];
                count += 1;
            }

            [node.next, previous.next] = [current, node];
            this.size += 1;
        }

        return 'success';
    }

    insertLast(data) {
        if (typeof data === 'undefined') return null;
        if (!this.size) return this.insert(data);

        const node = new Node(data);
        let current = this.head;

        if (!this.head) this.head = node;
        while (current.next) current = current.next;

        current.next = node;
        this.size += 1;

        return 'success';
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }

        return 'success';
    }

    removeAt(index) {
        if (typeof index === 'undefined') return null;
        if (!this.size) return null;
        if (index < 0 && -index > this.size) return null;
        if (index > this.size - 1) return null;

        if (index < 0 && -index <= this.size) index = this.size + index;
        if (!index) this.head = this.head.next;

        if (index > 0 && index <= this.size) {
            let count = 0;
            let current = this.head;
            let previous;

            while (count < index) {
                [previous, current] = [current, current.next];
                count += 1;
            }

            previous.next = current.next;
        }

        this.size -= 1;

        return 'success';
    }
}

module.exports = { LinkedList, Node };
