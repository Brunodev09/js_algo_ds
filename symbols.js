// Symbols are a primitive values and therefore does not inherit constructors
// const sym1 = Symbol;
// const sym2 = Symbol('mySymbol');

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';

// console.log(myObj[KEY1]);

// Symbols are not enumerable in for...in
// for (let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);
// }

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));