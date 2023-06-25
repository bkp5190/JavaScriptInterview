// Write an implementation of Bubble Sort in JavaScript
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<array.length; j++) {
            if (array[i] < array[j]) {
                // Swap
                let holdingValue = array[j];
                array[j] = array[i];
                array[i] = holdingValue;
                console.log(array);
            }
        }
    }
}
bubbleSort(numbers);
console.log(numbers);