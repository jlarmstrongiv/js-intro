
# Intro to JS
GOALS
 * teach programming for newbies
 * teach syntax specific to JavaScript for intermediates

## Basics
Printing to the console
```jsx
console.log('Hello World!');
```

### JS variables
Use const for variables that do not change
```jsx
const hello = 'hello';
```

Let for variables that change
```jsx
let greeting = 'hi';
```

Set variables equal to a new value
```jsx
greeting = 'hi hi';
console.log(hello);
console.log(greeting);
```
> output to console
>> hello
>> hi
##### *Note: you may see 'var'  in place of const/let from legacy JavaScript*

### JS value types
Use camel case
```jsx
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
```
JavaScript Reference Types
```jsx
const myObject = {
  key: 'value',
};
const myArray = [1, 2, 3, 'fish'];
```

## Objects
###  accessing objects
```jsx
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
```

accessing and mutating objects
```jsx
console.log('Old Car:', myCar.year);
myCar.year = 2010;
console.log('New Car:', myCar.year);
```

accessing irregular keys
```jsx
console.log(myCar['Legal Jargon']);
```

accessing objects with variables
```jsx
const myCarKey = 'key';
console.log(myCar[myCarKey]);
```
## Arrays
### accessing arrays
```jsx
let groceryList = ['cheese', 'more cheese', 'CHEESE'];
```

zero indexing
```jsx
console.log(groceryList[3]);
console.log(groceryList[0]);
```
mutating arrays
```jsx
console.log(groceryList[1]);
groceryList[1] = 'tortillas';
console.log(groceryList[1]);
```

###  adding and removing items from arrays
add item to end
```jsx
groceryList.push('SO MUCH CHEESE');
console.log(groceryList);
```
remove item from end
```jsx
groceryList.pop();
console.log(groceryList);
```
add item to beginning
```jsx
groceryList.unshift('plates');
console.log(groceryList);
```
remove item from beginning
```jsx
groceryList.shift();
console.log(groceryList);
```

##  Complex Data Structures & JSON
Below we define ```books```, an array. Each member of the array consists of a variable ```title``` and an array ```ratings```
??? (added by me make sure it's right)
```jsx
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
```

###  JSON is valid JavaScript
[JSON ELI5](https://www.reddit.com/r/explainlikeimfive/comments/2m2pb2/eli5what_is_json/)
JavaScript is a programming language, because when you write JS you are writing instructions. JSON stands for JS Object Notation - it is not a programming language. When you write JSON you are specifying the structure of a piece of data.

Below is how to describe the same book structure that we described above, but this time we're using JSON syntax. This code is also acceptable in JavaScript.
```jsx
const booksJson = [
  {
    "title": "Crime and Punishment",
    "ratings": [5, 4, 5]
  },
  {
    "title": "Programming is Hard",
    "ratings": [5, 4, 3]
  },
];
```

 ## JS Math
 ```jsx
let myLuckyNumber = 7;
console.log('Plus 1', myLuckyNumber + 1);
console.log('Variable', myLuckyNumber);
```
> output to console
>> Plus 1: 8
>> Variable: 7

set equal to, update
```jsx
myLuckyNumber = myLuckyNumber + 1;
myLuckyNumber += 1;
myLuckyNumber++;
console.log('+3 setting variable equal', myLuckyNumber);

const myEquation = 1 + (((2 / 3) * 7) % 8);
```
## JS Conditions
understand equals
```jsx
myLuckyNumber = 20;
console.log(myLuckyNumber == '20');
console.log(myLuckyNumber === '20');
```
inequalities
```jsx
if (myLuckyNumber > 10) {
  console.log('Choose a number less than 10.');
}
```
truthy and falsey
```jsx
if (myLuckyNumber || myLuckyNumber === 0) {
  console.log('You chose', myLuckyNumber);
}
if (myLuckyNumber > 1 && myLuckyNumber < 10) {
  console.log('finally');
}
```
ternary operator
```jsx
const isLuckyDay = myLuckyNumber === 7 ? true : false;
```
## JS Functions
***Very important for understanding React!***
Below are many examples of functions that accomplish the same basic task: returning a string like "Hello World"
```jsx
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
```
## Methods
Methods are like functions in almost every way, except that they happen to belong to an object. Below we define a greeterObject which consists of 3 methods. At the end we call these functions. Notice that to call a method we must access it from within the object, in the form ```objectName.functionName()```. Again, the syntax of each function here looks very different but they all accomplish the same task: when called, they return a string.
```jsx
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
```
## JavaScript Parameters and Arguments
Below we define friendlyGreeter, a function written just like greeterThree, except now we are passing the function 2 **arguments** which get stored  as *parameters*.

##### Also note that we see the use of *template literals* here inside of console.log(). Template literals look like ``` `${foo} ```, where ```foo``` is a variable that contains a string.
```jsx
let friendlyGreeter = (name, greeting) =>
  console.log(`${greeting} ${name}!`);
friendlyGreeter('Bob', 'Hi');
```
>Hi Bob
###  Default values
If we called this ```friendlyGreeter()```  without passing it the proper arguments like below, we'd get the following output
```jsx
friendlyGreeter();
```
> undefined undefined!

To fix this, we provide *default values* like so, which would produce the following output
```jsx
friendlyGreeter = (name = 'there', greeting = 'Hi') =>
  console.log(`${greeting} ${name}!`);
friendlyGreeter();
```
>Hi there!

## JS Destructuring
#### *Very important for understanding React!*
To **destructure** an object is to extract information from it. You can think of it like the the object is a whole, and you want to chop it into little parts and pass them out. 

If we define a ```person``` object like this:
```jsx
const person = {
  name: 'Billy',
  age: 7,
  favoriteColor: 'green',
  country: 'USA',
};
```
We can later destructure it like this:
```jsx
const { name, age, ...rest } = person;
```
*this assigns the values of person to the values in the brackets like so*
> *name = person.name*
>*age = person.age*
> *rest = [person.favoriteColor, person.country]*

Similarly, if we have an array of strings like ```rgb``` in the first line, the second line shows us how to destructure it.
```jsx
const rgb = ['red', 'green', 'blue'];
const [firstColor, ...otherColors] = rgb;
```
*Here's what's stored in  ```firstColor ``` and  ```otherColors ``` after this code is executed:*
>firstColor = 'red'
>otherColors = ['green','blue']

###  destructuring inside a function

```jsx
friendlyGreeter = ({ name }) =>
  console.log(`Hello ${name}`);

friendlyGreeter(person);
person.name = undefined;
friendlyGreeter(person);
```

The first line, ```friendlyGreeter = ({ name }) =>
  console.log(`Hello ${name}`);```, is an arrow function


###  with default variables
```jsx
friendlyGreeter = ({ name = 'there' }) =>
  console.log(`Hello ${name}`);

friendlyGreeter(person);
```
###  safe without object
```jsx
friendlyGreeter = ({ name = 'there' } = {}) =>
  console.log(`Hello ${name}`);

friendlyGreeter();
```
### De-structuring with Renaming
```jsx
const { name: firstName } = person;

friendlyGreeter = ({ name: firstName = 'there' } = {}) =>
  console.log(`Hello ${firstName}`);
```


 ### JavaScript Import
 ```jsx
import { cyan, magenta } from './cmyk';
console.log(cyan, magenta);

import cmyk, { yellow } from './cmyk';
console.log(cmyk);

import * as colors from './cmyk';
console.log(colors.magenta);
```

### Loops
```jsx
for (let i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i].toUpperCase());
}
```
>
```jsx
groceryList.forEach((item, index) =>
  console.log(item.toUpperCase(), index),
);
console.log(groceryList);
```
>

###  changing items
######  *note:* ```.forEach``` *does not return an array like map*
```jsx
groceryList = groceryList.map(item => item.toUpperCase());
console.log(groceryList);
```

###  map takes a function
```jsx
const addTwo = num => num + 2;
let ratings = [6, 7, 8];
ratings = ratings.map(addTwo);
console.log(ratings);
```
###  reduce
```jsx
const average =
  ratings.reduce((acc, val) => acc + val, 0) /
  ratings.length;
console.log(average);
```
###  Objects
```jsx
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
```
## Asynchronous Functions
```jsx
const takesTimeCallback = setTimeout(
  () => console.log('callback done'),
  500,
);
```
```jsx
const takesTimePromise = new Promise((resolve, reject) =>
  setTimeout(() => resolve('done'), 500),
);
takesTimePromise
  .then(data => console.log('promise', data))
  .catch(error => console.log(error));
```
```jsx
const outerAsyncFunction = async () => {
  const takesTimeAsync = await new Promise(
    (resolve, reject) =>
      setTimeout(() => resolve('done'), 500),
  );
  console.log('await', takesTimeAsync);
};
outerAsyncFunction();
```
###  import 3rd party library

import fs from 'fs-extra';

###  async example
##### often called main or start, not outerAsyncFunction
#####  alternative is iffe
```jsx
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
```
/**
 * JavaScript Looping async and await
 */
 ```jsx
(async () => {
  const addThree = num =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(num + 3), 500),
    );
```
  ###  undefined
  ```jsx
  let grades = [97, 90, 85];
  grades = grades.map(addThree);
  console.log('grades', grades);
```
  ###  parallel
  ```jsx
  grades = await Promise.all(grades);
  console.log('grades', grades);
```
  ###  synchronous
  ```jsx
  let curvedGrades = [];
  for (const grade of grades) {
    const curvedGrade = await addThree(grade);
    curvedGrades.push(curvedGrade);
  }
  console.log('curved grades', curvedGrades);
})();
```
###  learn more about the event loop
###  https:### www.youtube.com/watch?v=8aGhZQkoFbQ

