
// console.log(strCount('aabccdaa'));

// ==================== FREQUENCY COUNTER PATTERN  ====================

function strCount(string) {
  // create obj to return at the end
  // loop over the string
  // if char is a key in the obj, add one (1)
  // if not, add it and set it to one
  // return the object

  let result = {};
  let str = string.toLowerCase().split("");
  for (let i = 0; i < string.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else result[str[i]] = 1;
  }
  return result;
}

// Refactor

function strCount(string) {
  let result = {};
  for (let char of string) {
    char = char.toLowerCase();
    if (result[char]) {
      result[char]++;
    } else result[char] = 1;
  }
  return result;
}

// console.log(same([1, 1, 2, 3], [1, 1, 4, 9]));
function same(array1, array2) {
  // check notebook to remember the problem
  // 1 - have the same values
  // 2 - have the same frequency
  let objectArr = {};
  let objectArr2 = {};
  array1.forEach(function(item, index) {
    if (objectArr[item]) {
      objectArr[item]++;
    } else objectArr[item] = 1;
  });
  array2.forEach(function(item, index) {
    if (objectArr2[item]) {
      objectArr2[item]++;
    } else objectArr2[item] = 1;
  });
  for (let key in objectArr) {
    // this will check if there is a property in obj2 named with the property of obj1 ** 2
    // if there isn't, that means we don't have a correspondent squared value
    if (!(key ** 2 in objectArr2)) {
      return false;
    }
    // this will make sure that the values inside the correspondent properties are different
    // if it isn't it means that the value is not squared
    if (objectArr2[key ** 2] !== objectArr[key]) {
      return false;
    }
  }
  return true;
}

// anagram
// checks if one string is an anagram of the other (same chars but rearranged)
// my try on giving this problem an O(n) solution
// console.log(anagram('sbanandas', 'ananabssd'))
function anagram(string, string2) {
  // create 2 objects to count the frequency of each char
  // if they have the same frequency and the same properties the strings are anagrams
  let frequency1 = {};
  let frequency2 = {};

  // calculating the frequency of the chars in the first string
  for (let char of string) {
    if (frequency1[char]) frequency1[char]++;
    else frequency1[char] = 1;
  }
  // calculating the frequency of the chars in the second string
  for (let char of string2) {
    if (frequency2[char]) frequency2[char]++;
    else frequency2[char] = 1;
  }
  for (let key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  for (let key in frequency2) {
    if (!(key in frequency1)) {
      return false;
    }
    if (frequency2[key] !== frequency1[key]) {
      return false;
    }
  }
  return true;
}

// better solution - still O(n)

function anagram(first, second) {
  let frequency = {};
  for (let i = 0; i < first.length; i++) {
    let char = first[i];
    frequency[char] ? frequency[char]++ : (frequency[char] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let char = second[i];
    if (!frequency[char]) return false;
    else frequency[char]--;
  }
  return true;
}

// ==================== MULTIPLE POINTER PATTERN  ====================

// my solution not applying the pattern
// console.log(sumZero2([-3,-2,-1,0,1,2,3]));

function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) return [array[i], array[j]];
    }
  }
}

function sumZero2(arr) {
  // start of the arr
  let left = 0;
  // end of the arr
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) right--;
    else left++;
  }
}

// console.log(countUniqueValues([1, 2, 3, 3, 3, 4, 5, 6, 7, 8]));

// my solution trying to use the pattern
// count unique values in array
// accepts a sorted array and counts the unique values in the array.
// there can be negative numbers in the array but it must be sorted
function countUniqueValues(array) {
  let left = 0;
  let right = 1;
  let counter = 0;
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    if (array[left] === array[right]) {
      if (obj[array[left]]) {
        right++;
      } else {
        obj[array[left]] = 1;
        right++;
      }
    } else {
      counter++;
      left = right;
      right++;
    }
  }
  return counter;
}

// solution using only the pattern

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// ==================== SLIDING WINDOW PATTERN  ====================

// accepts an array and a number
// returns the maximum sum of N consecutive elements

function maxSubarraySum(array, n) {
  // making sure the number of elements to sum is not greater than the array lenght
  if (n > array.length) return null;
  // this is to make sure any number we sum for the first time is already bigger than maxTotal
  let maxTotal = -Infinity;

  for (let i = 0; i < array.length - n + 1; i++) {
    // making sure that at every iteration from the outer loop the total is set to zero
    // that way we can compare the total with maxTotal every n*j iterations
    let total = 0;
    for (let j = 0; j < n; j++) {
      // this will add the indexes i and j n number of times
      total += array[i + j];
    }
    // this is to explicit to comment anything
    if (total > maxTotal) {
      maxTotal = total;
    }
  }
  return maxTotal;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3));

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // sliding window will instead of summing every element again with the difference of one digit
    // will subtract the first digit and add the next  
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


// ==================== DIVIDE AND CONQUER PATTERN  ====================

// given an ordered array, find the index of the value passed as an argument
console.log(search([1,2,3,4,5,6,7,8,9], 5));

function search(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return -1;
}

// the binary search approach would be to get a middle point in the array and compare it to the entered value
// as the array is sorted, if the value is greater/smaller we can ignore the other half of the array
// then we proceed to do the same thing, finding a middle point and comparing to the value
