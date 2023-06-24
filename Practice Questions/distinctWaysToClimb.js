// Write a function that determines how many distinct ways you can
// climb a set of stairs if you can only climb 1 or 2 stairs at a time

let mem = [];
var climbStairs = function(n) {
    if (n <= 2) return n;
    if (mem[n] != undefined) return mem[n];
    mem[n] = climbStairs(n-1) + climbStairs(n-2);
    return mem[n];
}

console.log(climbStairs(30));
console.log(climbStairs(40));
console.log(climbStairs(45));
