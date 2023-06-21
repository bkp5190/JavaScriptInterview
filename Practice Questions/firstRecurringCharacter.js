// Given an array return the first repeating character
const firstRecurringCharacter = (array) => {
    let characterMap = {}

    for (let i=0; i<array.length; i++) {
        if (characterMap[array[i]] !== undefined) {
            return array[i];
        } else {
            characterMap[array[i]] = i;        
        }
    }
    return undefined;
}


// Input
// [2,5,1,2,3,5,1,2,4];
// Output
// 2
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));


// Input
// [2,1,1,2,3,5,1,2,4];
// Output
// 1
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));

// Input
// [2,3,4,5];
// Output
// undefined
console.log(firstRecurringCharacter([2, 3, 4, 5]));