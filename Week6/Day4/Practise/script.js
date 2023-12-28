//foreach
console.log('\nMy Version\n')
const numbers = [10,11,12,15,20];

numbers.forEach((element) => {
  if (element % 2 === 0)
  console.log(element)
})
console.log('\nNew Version\n')
numbers.forEach((element) => {
  element % 2 === 0 && console.log(element)
})


const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.some((element) => {
    element % 2 === 0
}); // false because we do not return anything

//1st example
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.some((value)=> { return (value%2 == 0); });
//output : true 
//because there is at least one even number in the array

//2nd example
myArr.some((value)=> { return (value < 0); });
//output: false 
//because there is no negative number in the array

//If the arrow function is only returning a value you don't need the return keyword
//If the arrow function takes only one parameter you can omit the parentheses
myArr.some(value => value < 0 );
//output: false 
//because there is no negative number in the array

//3rd example
function isEven(x) {
  console.log(x) 
  return (x % 2 == 0);
}

myArr.some((value) => isEven(value));
//output : 1 2 true
//stops iterating as soon as an even number is found 



// EXERCISE
// My Version
const words = ["wow", "hey", "bye"];
let returnedSome = words.some((element) => {
    console.log(element)
    return element[0] === "h"
})

console.log(returnedSome)

let returnedStartsWith = words.some((element) => {
    return element.startsWith("h");
});

console.log(returnedStartsWith)

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

let returnedEvery = myArr.every((element) => {
    console.log(element)
    return element < 9
})

console.log(returnedEvery)


const words = ["hello", "hey", "hola"];
wordsEvery = words.every((element)=> {
    console.log(element)
    return element[0] === "h"
})

console.log(wordsEvery)

Map

const originalArray = [1, 4, 9, 16];

const newArr = originalArray.map((element) => {
    if (element > 4) {
      return element * 2;
    } else {
      return element;
    }
});

console.log(newArr)

const myArr = [10, 20, 30, 40];
const newArr = myArr.map((element, i) => {
    return {
        value: element,
        index: i,
    }
})

console.log(newArr)

Map returns a new array with manipulated elements


Filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const newArr = words.filter((element) => {
    return element.length > 6;
})

console.log(newArr)

let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
  ]

  const totalCalories = party.reduce((acc, dessert) => {
    if (dessert.desert !== 'Apple Pie') {
        return acc + dessert.calories;  // Returns immediately if this is true
    }
    return acc;  // Acts like an 'else' because it returns only if the 'if' condition was false
}, 0);


console.log(totalCalories);