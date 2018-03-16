// ad.1

const hello = 'Hello ';
const world = 'World!';

console.log(`${hello}, ${world}`);


// ad.2


const multiply = (a=1,b=1) => console.log(`${a * b}`);

multiply(2,5);
multiply(2);
multiply();

// ad.3


const average = (...numbers) => console.log(numbers.reduce((a, b) => a + b)/numbers.length);
average(1,2,3);
average(5,3,9,2);
average(10,10,167);

// ad.4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...grades) => console.log(grades.reduce((a, b) => a + b)/grades.length);
console.log(average(...grades));

// ad.5

const sth = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = sth;

console.log(`${firstname} ${lastname}`);