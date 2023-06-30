// Write a recursive implementation of the Fibonacci Sequence in JavaScript
let calculations = 0;
function fibonacciRecursive(target) {
    calculations++;
    if (target < 2) {
        return target;
    }
    return fibonacciRecursive(target-1) + fibonacciRecursive(target-2);
}

console.log(fibonacciRecursive(10));
console.log("Recursive: We did " + calculations + " calculations.");


calculations = 0;
function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }

        }
    }
}

const fasterFib = fibonacciMaster();
console.log(fasterFib(10));
console.log('Dynamic Programming and Memoization: We did ' + calculations + ' calculations.')