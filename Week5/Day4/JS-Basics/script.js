// let selectedColors = ['red', 'blue'];
// selectedColors[4] = 'green';
// selectedColors[2] = 'yellow';
// selectedColors[3] = 1.5;
// console.log(selectedColors);

// let firstName = 'Mosh';
// console.log(firstName);
// let age = 30.2
// console.log(age)

// console.log(typeof selectedColors)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(selectedColors.length)

// let longString = 'lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem';
// console.log(longString.length);

// Create a structured HTML file linked to a JS file
// 1. Create these variables and give them values:
// addressNumber
// addressStreet
// country

// 2. Write a variable named globalAddress, and concatenate inside, the variables:
// addressNumber
// addressStreet
// country
// In order to create a sentence

// 3. Display globalAddress Example: globalAddress should display « I live in BenYehuda 5, in Israel »

// const addressNumber = 44;
// const addressStreet = 'Ibn Gabirol ';
// const country = 'Israel';

// const globalAddress = 'I live in ' + addressStreet + addressNumber + ',' + ' in ' + country

// console.log(globalAddress)

// let globalAddressButBetter = `I live in ${addressStreet}${addressNumber}, in ${country}`
// console.log(globalAddressButBetter)

// console.log("isNaN is checking whether it is not a number ? if it is not output is True if it is output is False")
// let op = 'me'
// let num = 1
// console.log("'me' is not a number output: TRUE")
// console.log(isNaN(op))
// console.log("1 is a number output: FALSE")
// console.log(isNaN(num))

// // 1. Store your birth year in a variable.
// myBirthYear = 1997

// // 2. Store a future year in a variable.
// futureYear = 2024

// // 3. Calculate your possible ages for that year based on the stored values.
// my_Age_In_Future_Year = futureYear - myBirthYear

// // 4. Display : "I will be NN in YYYY", substituting the values.
// console.log(`I will be ${my_Age_In_Future_Year} in ${futureYear}`)

// console.log(1 == '1'); // true (compares the value)
// console.log(1 === '1'); // false (compares type and value)
// console.log(1 != '1'); // false (copmapres whether 1 is not equal to '1' by value)
// console.log(1 !== '1');// true (copmapres whether 1 is not equal to '1' by value and type)

// let user1 = 'John';
// let user2 = 'Bill';
// let user3 = 'Nancy';

// let users = [user1, user2, user3];
// console.log(users)

// let users1 = ['John', 'Bill', 'Nancy', 'Sam']
// console.log(users1)
// console.log(users[2])

// users1.push('Egor', 'Yulia', 'Daria')
// console.log(users1)

// users1.pop()
// console.log(users1)

// users1.splice(3,1) // starting from possition 3 and remove 1 element
// console.log(users1)

// users1.splice(3, 0, 'Andrey', 'Alex'); // starting from 3 remove 0 add Andrey and Alex
// console.log(users1)

// users1.slice(1, 2) // returns a new array
// console.log(users1) // nothing changed becuase it returns a new array but we did not save it

// let slicedUsers1 = users1.slice(5, 7)
// console.log(slicedUsers1)

// let users1String = users1.toString();
// console.log(users1String)
// console.log(users1)

// // 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']
// let pets = ['cat', 'dog','fish', 'rabbit', 'cow']
// let dogIndex = pets.indexOf('dog')
// // 2. Display dog
// console.log(pets[dogIndex])
// // 3. Add to the array pets, the pet horse. Remove the pet rabbit
// // pets.push('horse')
// // pets.splice(3,1)
// let rabbitIndex = pets.indexOf('rabbit')
// pets.splice(rabbitIndex,1, 'horse')
// console.log(pets)
// // 4. Display the array length
// console.log(pets.length)

// let person = {
//     fname: "Dani",
//     lname: "Robb",
//     age: 27,
// }
// console.log(person)
// console.log(person.fname)
// console.log(person.lname)
// console.log(person.age)

// // 1. Write a JavaScript for loop that will go through the variable names.

// let names= ["john", "sarah", 23, "Rudolf",34]

// // if the item is not a string, pass.

// for (let i in names) {
//     // Check if the item is not a string, then skip to the next iteration
//     if (typeof names[i] !== 'string') {
//         continue;
//     }

//     // Check if the first letter is not uppercase
//     if (names[i][0] !== names[i][0].toUpperCase()) {
//         // Change the first letter to uppercase and concatenate with the rest of the string
//         names[i] = names[i][0].toUpperCase() + names[i].substring(1);
//     }
//     // Display the name
//     console.log(names[i]);
// }

// // 2. Write a JavaScript for loop that will go through the variable names
// for (let i in names) {
//     if (typeof names[i] === 'string') {
//         console.log(i)
//     else continue
//     }
// }
// // if the item is not a string, go out of the loop.
// // if the item is a string, display it.

let names = ["john", "sarah", 23, "Rudolf", 34];

for (let name of names) {
  if (typeof name !== "string") {
    continue; // Skip to the next item if the current item is not a string.
  }

  // If the first letter isn't uppercase, change it to uppercase.
  if (name[0] !== name[0].toUpperCase()) {
    name = name[0].toUpperCase() + name.slice(1);
  }

  console.log(name); // Print the name (with the first letter in uppercase if it was changed).
}
