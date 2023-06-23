// Write a method that returns the factorial of a number.

// Recursive Method
function factorialRecursive(number) {
    if (number <= 2) {
        return number;
    }
    return number * factorialRecursive(number-1);
}

console.log(factorialRecursive(10));

// Iterative Method
function factorialIterative(number) {
    let answer = 1;
    for (let i=2; i<=number; i++) {
        console.log(answer);
        answer *= i;
    }
    return answer;
}

console.log(factorialIterative(4));