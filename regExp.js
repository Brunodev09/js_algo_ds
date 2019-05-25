// regExp is used for pattern matching or pattern searching of chars

let re;
// re = /hello/;
re = /hello/i; // i --> makes it case insensitive
// re = /hello/g; // g --> makes a global search and not only the first match in a string

// console.log(re);
// console.log(re.source);

// exec() - return result in Array or null
// in this case 'hello' matches our /hello/
const result = re.exec('hello world');

// console.log(result);

// test() - returns true/false for a match
const resultTest = re.test('Hello');

// console.log(resultTest);

//match() - returns result Array or null --> very similiar to exec but with a string 
const str = 'hey there hello';
// const res = str.match(re);

// console.log(res);

// search() - returns index of the first match if not found returns -1
const str2 = 'hello there';
const res2 = str2.search(re);

// console.log(res2);

// replace() - will return new string with some or all matches of a pattern
const str3 = 'hello there';
const newString = str3.replace(re, 'hi');

// console.log(newString);

