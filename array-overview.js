// Array overview
// array hold more than one element at one place at the same time

// Array literal
let myArray = ["first item", "second item", 3, "another item", 7];

// Array indices
// One array contains elements and an element is accessible by its index.
// Note: Array indexes start with 0.

// access the element of an array
console.log(`first element:\t\t\t ${myArray[0]}`);

// access the full array
console.log(`all elements:\t\t\t ${myArray}`);

// changing an array element
myArray[1] = "second element";
console.log(`second element is now:\t\t ${myArray[1]}`);
console.log(`after changing second element:\t ${myArray}\n`);


// Array Properties ==============================================

// * length returns the number of elements
console.log(`length of array:\t\t ${myArray.length}\n`);


// Array Methods =================================================

// add one element to array with push() or unshift()

// * push adds one or more elements to the end of an array and returns the resulting length of the array
myArray.push("Hi");
console.log(`after push():\t\t\t ${myArray}`);

// * unshift() adds one or more elements to the front of an array and returns the new length of the array
myArray.unshift(9);
console.log(`after unshift():\t\t ${myArray}`);


// remove one element from array with pop() or shift()

// * pop() removes the last element from an array and returns that element
myArray.pop();
console.log(`after pop():\t\t\t ${myArray}`);

// * shift() removes the first element from an array and returns that element
myArray.shift();
console.log(`after shift():\t\t\t ${myArray}\n`);


// nested array =================================================

let nestedArray = [["John", 35, ["Hello", "all"]], ["Anna", 28], ["Max", 25]];

// access nested array
console.log(`${nestedArray[0][0]}`);
console.log(`${nestedArray[0][2]}`);
console.log(`${nestedArray[0][2][1]}`);
