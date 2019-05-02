// countDown(5);

function countDown(num) {
  // base case
  if (num <= 0) {
    console.log("Done!");
    return;
  }
  console.log(num);
  // different input every time we recursively call
  num--;
  countDown(num);
}

// Non recursive alternative

// function countDown(num) {
//     for (let i = num; i > 0; i--) {
//         console.log(i);
//     }
// }

// console.log(sumRange(10));
// this is going to return the sum of all the elements from n to 1
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(factorial(5));
// 4! = 4 * 3 * 2 * 1 = 24
function factorial(num) {
  if (num === 1) return 1;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorialIterative(5));

function factorialIterative(num) {
  let total = 0;
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
}

// console.log(collectOddValuesIterative([1,2,3,4,5]));
// console.log(collectOddValues([1,2,3,4,5]));
// console.log(collectOddValuesPure([1,2,3,4,5]));

// this logic will avoid us from creating a variable out of the scope of the function to push the result into
// that is the case in a pure recursion example right below
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // calling recursively with an array with every item but the one we just tested
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

function collectOddValuesIterative(arr) {
  let result = [];
  for (let item of arr) {
    if (item % 2 !== 0) result.push(item);
  }
  return result;
}

function collectOddValuesPure(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // this slice will return an array from the first element onward, ignoring the element 0
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// console.log(power(2,5));
// console.log(powerIterative(2,5));
// mimic Math.pow()
function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  return base * power(base, exponent - 1);
}

function powerIterative(base, exponent) {
  let total = base;
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  for (let i = 0; i < exponent - 1; i++) {
    total *= base;
  }
  return total;
}

// console.log(productOfArrayIterative([1,2,3]));
// console.log(productOfArray([1,2,3]));

function productOfArrayIterative(arr) {
  let total = arr[0];
  for (let item of arr) {
    total *= item;
  }
  return total;
}

function productOfArray(arr) {
  let total = 1;
  function helper(arr) {
    if (arr.length === 0) return;
    else if (arr.length === 1) {
      total *= arr[0];
      return;
    }
    total *= arr[0] * arr[1];
    let returnArray = arr.splice(2);
    helper(returnArray);
  }
  helper(arr);
  return total;
}

console.log(fib(5));


function fib(num) {
    let tmp_1 = 0;
    let tmp_2 = 1;
    let total = 1;

    for (let i = 2; i <= num; i++) {
        total = tmp_1 + tmp_2;
        tmp_1 = tmp_2;
        tmp_2 = total;
    }
    return total;
}