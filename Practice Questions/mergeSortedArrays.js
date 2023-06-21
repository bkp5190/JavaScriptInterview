// Given two sorted arrays, merge into one sorted array
const mergeSortedArrays = (arr1,arr2) => {
    
    arr1Item = arr1[0];
    arr2Item = arr2[0];
    sorted = [];
    let i = 1;
    let j = 1;

    if (arr1.length === 0) {
        return arr2
    }
    if (arr2.length === 0) {
        return arr1
    }

    while (arr1Item !== undefined || arr2Item !== undefined) {
        if (arr1Item < arr2Item) {
            sorted.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            sorted.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }

    return sorted;
}

console.log(mergeSortedArrays([1, 4], [0, 2, 100]));
console.log(mergeSortedArrays([1, 4], []));
console.log(mergeSortedArrays([], [0, 2, 100]));