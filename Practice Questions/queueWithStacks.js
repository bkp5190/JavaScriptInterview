// Create a Queue using only 2 Stacks
class Queue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i=0; i<length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
          this.first.push(this.last.pop());
        }
        return this.first.pop();
    }

    peek() {
        if (this.first.length === 0) {
            return this.last[0];
        }
        return this.first[this.first.length-1]
    }

    empty() {
        return ((this.first.length === 0) && (this.last.length === 0))
    }
}

let queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
console.log(queue);
console.log(queue.peek());