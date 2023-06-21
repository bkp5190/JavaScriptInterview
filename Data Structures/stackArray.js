// Write an implementation of a Stack uding Arrays.
class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length-1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}

let myStack = new Stack();
console.log(myStack.push(3));
console.log(myStack.push(2));
console.log(myStack.push(1));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());