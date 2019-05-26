let a, b;

[a, b] = [100, 200];

[a,b,c, ...rest] = [100,200,300,400,500];

({ a, b } = {a: 100, b: 200});

// Array destructuring
const people = ["Bruno", "Maysa", "Pai"];

const [person1, person2, person3] = people;

// console.log(person1);

function getPeople() {
    return ["Bruno", "Maysa", "Pai"];
}

// let person1, person2, person3;
 
// [person1, person2, person3] = getPeople();

// Object destructuring
const someone = {
    name: "Bruno",
    age: 22,
    city: "Sao Paulo"
}

// ES5 way
// const name = person.name;
// const age = person.age;

// ES6 way
const { name, age, city } = someone;
console.log(name, age, city);
