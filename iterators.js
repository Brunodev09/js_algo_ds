// Iterator example

function nameIterator(names) {
    let nextIndex = 0;

    return {    
        next: function() {
            return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }
        }
    }
}

// Array of names
const namesArr = ['Bruno', 'Pai', 'Dino'];
// Initialize the iterator
const names = nameIterator(namesArr);

// console.log(names.next());

// Generator example

function* sayNames() {
    yield "Jack";
    yield "Bruno";
    yield "Maysa";

}

const name2 = sayNames();
// console.log(name2.next());

// ID Generator

function* IdGenerator() {
    let index = 0;

    while(true) {
        yield index++;

    }
}

const gen = IdGenerator();
for (let i = 0; i <= 10; i++) console.log(gen.next().value);