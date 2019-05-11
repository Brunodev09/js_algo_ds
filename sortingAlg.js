let arr = ['Bruno', 'Maysa', 'Amanda'];

console.log(arr.sort());

// This built in method sorts strings but not numbers

// But I can use a comparator function inside the sort method to tell JS how I want to sort
// It will look at pairs of elements (a,b) and will determine the sort order based on the return value
// If the return is negative, a should come before b
// If the return is positive, a should come after b
// If the return is zero, it doesn't matter

// ascending numerical order
function numCompare(num1, num2) {
    return num1 - num2;
}

// descending numerical order
function numCompare2(num1, num2) {
    return num2 - num1;
}

let numberArr = [6, 4, 15, 10];

// console.log(numberArr.sort(numCompare));

console.log(optBubbleSort([8,1,2,3,4,5,6,7]));

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function optBubbleSort(arr) {
    let swap;
    for (let i = arr.length; i > 0; i--) {
        swap = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } 
        }
        if (!swap) break;
    }
    return arr;
}