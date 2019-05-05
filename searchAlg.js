// Linear search O(n)

function search(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return -1;
}

// console.log(binarySearch([1,2,3,4,5,6],3));

// Binary search
function binarySearch(array, val) {
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    while (array[middlePointer] !== val && leftPointer <= rightPointer) {
        if (array[middlePointer] < val) {
            // we sum or subtract one because its redudant to set the end of the window to a number we already know is not the correct one
            leftPointer = middlePointer + 1;
        }
        else {
            // we sum or subtract one because its redudant to set the end of the window to a number we already know is not the correct one
            rightPointer = middlePointer - 1;
        }
        // calculating the middle must come after we update the right and left pointer to their new position and its obvious why
        middlePointer = Math.floor((leftPointer + rightPointer) / 2); 
    }
    // if it exits the loop it either found the number in the middle position or the number is not in the array
    if (array[middlePointer] === val) return middlePointer;
    return -1;
}
console.log(stringSearch('zomg', 'omg'));

function stringSearch(str, pattern) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (str[i+j] !== pattern[j]) {
                break;
            }
            if (j === pattern.length - 1) {
                count++;
            }
        }
    }
    return count;
}