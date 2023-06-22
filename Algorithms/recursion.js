// Write a Recursive function and determine the output when called.

let counter = 0;
function inception() {
    debugger;
    if (counter > 3) {
        return "done!"
    }
    counter++;
    // It will return "done!" on the last call but the result gets lost
    // as the call stack is emptied.
    inception()
}

console.log(inception());

// Always return during recursion to ensure the result is bubbled up from calls.

let counter1 = 0;
function correct_inception() {
  debugger;
  if (counter > 3) {
    return "done!";
  }
  counter++;
  // Returns "done!" all the way up.
  return correct_inception();
}

console.log(correct_inception());