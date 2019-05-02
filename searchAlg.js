// Linear search O(n)

function search(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6],3));
// Binary search
function binarySearch(array, val) {
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    while (array[middlePointer] !== val && leftPointer <= rightPointer) {
        if (array[middlePointer] < val) {
            leftPointer = middlePointer + 1;
        }
        else {
            rightPointer = middlePointer - 1;
        }
        middlePointer = Math.floor((leftPointer + rightPointer) / 2); 
    }
    if (array[middlePointer] === val) return middlePointer;
    return -1;
}