// Sets --> Store UNIQUE values of any type 

const set1 = new Set();

// Add values to set

set1.add(100);
set1.add('str');
set1.add({name: 'John'});
set1.add(true);

console.log(set1);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));

// Delete from sets
set1.delete(100);

// Iterating through sets

for (let item of set1) {
    console.log(item);
}

set1.forEach(function(item) {
    console.log(item);
})