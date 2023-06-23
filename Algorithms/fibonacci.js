// Write a recursive implementation of the Fibonacci Sequence in JavaScript
function fibonacciRecursive(target) {
    if (target < 2) {
        return target;
    }
    return fibonacciRecursive(target-1) + fibonacciRecursive(target-2);
}


console.log(fibonacciRecursive(30));