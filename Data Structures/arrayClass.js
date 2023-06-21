// Write an implementation of an Array class in JavaScript.
class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) {
            return;
        }
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const targetItem = this.data[index];
        this.shiftItems(index);
        return targetItem;
    }

    shiftItems(index) {
        // Start at the index and shift after
        for (let i=index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const myarray = new Array();
myarray.push(2);
myarray.push(5);
console.log(myarray);
myarray.delete(1);
console.log(myarray);
myarray.delete(0);
console.log(myarray);