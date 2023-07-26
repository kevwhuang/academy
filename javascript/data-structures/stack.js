class Stack {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    clear() {
        this.items = [];
        this.length = 0;
        return this.items;
    }

    pop() {
        if (!this.length) return undefined;
        const removed = this.items[this.length - 1];
        delete this.items[this.length - 1];
        this.length -= 1;
        return removed;
    }

    print() {
        for (let i = 0; i < this.length; i++) console.log(this.items[i]);
        return 'success';
    }

    push(data) {
        this.items[this.length] = data;
        this.length += 1;
        return this.length - 1;
    }

    tail() {
        return this.items[this.length - 1];
    }
}
