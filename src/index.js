/**
 * GOALS
 * teach programming for newbies
 * teach syntax specific to JavaScript for intermediates
 */

// printing to the console
console.log('Hello World!');

/**
 * JavaScript Variables
 */
// const for variables that do not change
const hello = 'hello';
// let for variables that change
let greeting = 'hi';
// set variables equal to a new value
greeting = 'hi hi';

console.log(hello);
console.log(greeting);
// * you may see 'var' from legacy JavaScript

/**
 * JavaScript Value Types
 */
// Use camel case
const myString = 'A String of Characters';
const myTemplateLiteral = `
  A
  Multiline
  ${myString}
`;
console.log(myTemplateLiteral);
const myNumber = 3;
const myBoolean = true; // or false
let myUndefinedVariable; // = undefined;
let myNullVariable = null;

/**
 * JavaScript Reference Types
 */
const myObject = {
  key: 'value',
};
const myArray = [1, 2, 3, 'fish'];

// accessing objects
let myCar = {
  maker: 'Buick',
  year: 2003,
  key: `
     8 8 8 8                     ,ooo.
     8a8 8a8                    oP   ?b
    d888a888zzzzzzzzzzzzzzzzzzzz8     8b
     '""^""'                    ?o___oP'
  `,
  'Legal Jargon': 'tl;dr legal',
};

// accessing and mutating objects
console.log('Old Car:', myCar.year);
myCar.year = 2010;
console.log('New Car:', myCar.year);

// accessing irregular keys
console.log(myCar['Legal Jargon']);

// accessing objects with variables
const myCarKey = 'key';
console.log(myCar[myCarKey]);

// accessing arrays
let groceryList = ['cheese', 'more cheese', 'CHEESE'];
// zero indexing
console.log(groceryList[3]);
console.log(groceryList[0]);

// mutating arrays
console.log(groceryList[1]);
groceryList[1] = 'tortillas';
console.log(groceryList[1]);

// Complex Data Structures
const books = [
  {
    title: 'Crime and Punishment',
    ratings: [5, 4, 5],
  },
  {
    title: 'Programming is Hard',
    ratings: [5, 4, 3],
  },
];
console.log('Nested rating', books[0].ratings[0]);

/**
 * JavaScript Math
 */
let myLuckyNumber = 7;
console.log('Plus 1', myLuckyNumber + 1);
console.log('Variable', myLuckyNumber);

// set equal to update
myLuckyNumber = myLuckyNumber + 1;
myLuckyNumber += 1;
myLuckyNumber++;
console.log('+3 setting variable equal', myLuckyNumber);

const myEquation = 1 + (((2 / 3) * 7) % 8);

/**
 * JavaScript Conditions
 */
// understand equals
myLuckyNumber = 20;
console.log(myLuckyNumber == '20');
console.log(myLuckyNumber === '20');

// inequalities
if (myLuckyNumber > 10) {
  console.log('Choose a number less than 10.');
}
// truthy and falsey
if (myLuckyNumber || myLuckyNumber === 0) {
  console.log('You chose', myLuckyNumber);
}
if (myLuckyNumber > 1 && myLuckyNumber < 10) {
  console.log('finally');
}

/**
 * JavaScript Functions
 */
function greeterOne() {
  return 'Hello World 1';
}
console.log(greeterOne());

const greeterTwo = () => {
  return 'Hello World 2';
};
console.log(greeterTwo());

const greeterThree = () => 'Hello World 3';
console.log(greeterThree());

/**
 * Methods
 */
const greeterObject = {
  greeterFour: function() {
    return 'Hello World 4';
  },
  greeterFive() {
    return 'Hello World 5';
  },
  greeterSix: () => {
    return 'Hello World 6';
  },
};
console.log(greeterObject.greeterFour());
console.log(greeterObject.greeterFive());
console.log(greeterObject.greeterSix());

/**
 * JavaScript Parameters and Arguments
 */
let friendlyGreeter = (name, greeting) =>
  console.log(`${greeting} ${name}!`);
friendlyGreeter('Bob', 'Hi');

// Default values
friendlyGreeter();
friendlyGreeter = (name = 'there', greeting = 'Hi') =>
  console.log(`${greeting} ${name}!`);
friendlyGreeter();

/**
 * JavaScript Destructuring
 */
const person = {
  name: 'Billy',
  age: 7,
  favoriteColor: 'green',
  country: 'USA',
};
const { name, age, ...rest } = person;

const rgb = ['red', 'green', 'blue'];
const [firstColor, ...otherColors] = rgb;

// destructuring inside a function
friendlyGreeter = ({ name }) =>
  console.log(`Hello ${name}`);

friendlyGreeter(person);
person.name = undefined;
friendlyGreeter(person);

// with default variables
friendlyGreeter = ({ name = 'there' }) =>
  console.log(`Hello ${name}`);

friendlyGreeter(person);

// safe without object
friendlyGreeter = ({ name = 'there' } = {}) =>
  console.log(`Hello ${name}`);

friendlyGreeter();

/**
 * Destructuring with Renaming
 */
const { name: firstName } = person;

friendlyGreeter = ({ name: firstName = 'there' } = {}) =>
  console.log(`Hello ${firstName}`);

/**
 * JavaScript Import
 */
import { cyan, magenta } from './cmyk';
console.log(cyan, magenta);

import cmyk, { yellow } from './cmyk';
console.log(cmyk);

import * as colors from './cmyk';
console.log(colors.magenta);

/**
 * Loops
 */
for (let i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i].toUpperCase());
}

groceryList.forEach((item, index) =>
  console.log(item.toUpperCase(), index),
);

console.log(groceryList);

// changing items
// * note .forEach does not return an array like map
groceryList = groceryList.map(item => item.toUpperCase());
console.log(groceryList);

// map takes a function
const addTwo = num => num + 2;
let ratings = [6, 7, 8];
ratings = ratings.map(addTwo);
console.log(ratings);

// reduce
const average =
  ratings.reduce((acc, val) => acc + val, 0) /
  ratings.length;
console.log(average);

// Objects
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

/**
 * Asynchronous Functions
 */
const takesTimeCallback = setTimeout(
  () => console.log('callback done'),
  500,
);

const takesTimePromise = new Promise((resolve, reject) =>
  setTimeout(() => resolve('done'), 500),
);
takesTimePromise
  .then(data => console.log('promise', data))
  .catch(error => console.log(error));

const outerAsyncFunction = async () => {
  const takesTimeAsync = await new Promise(
    (resolve, reject) =>
      setTimeout(() => resolve('done'), 500),
  );
  console.log('await', takesTimeAsync);
};
outerAsyncFunction();

// import 3rd party library
// async example
import fs from 'fs-extra';

// often called main or start, not outerAsyncFunction
// alternative is iffe
(async () => {
  let meaningOfLife;
  try {
    meaningOfLife = await fs.readFile(
      './src/meaningOfLife.txt',
      'utf-8',
    );
  } catch (error) {
    console.log(error);
  }
  console.log(meaningOfLife.trim());
})();

/**
 * JavaScript Looping async and await
 */
(async () => {
  const addThree = num =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(num + 3), 500),
    );

  // undefined
  let grades = [97, 90, 85];
  grades = grades.map(addThree);
  console.log('grades', grades);

  // parallel
  grades = await Promise.all(grades);
  console.log('grades', grades);

  // synchronous
  let curvedGrades = [];
  for (const grade of grades) {
    const curvedGrade = await addThree(grade);
    curvedGrades.push(curvedGrade);
  }
  console.log('curved grades', curvedGrades);
})();

// learn more about the event loop
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
