// Given a string, reverse it's contents
function reverseString(string) {
    let reverse = []
    for (let i=string.length; i>=0; i--) {
        reverse.push(string[i])
    }
    return reverse.join("")
}


// Output: "dlroW olleH"
console.log(reverseString("Hello World"));
console.log(reverseString("Hi my name is Boney"));

const revereStringBetter = (string) => {
    return string.split("").reverse().join("");
}

console.log(revereStringBetter("Hello my name is Boney"));