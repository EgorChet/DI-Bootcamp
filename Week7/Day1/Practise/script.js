let b = 3,
  d = b,
  u = b; // b, d, and u are all 3

const tree =
  ++d * d * b * b++ + // pre-increment d (d is now 4), then use the old value of b (3) and then post-increment b (b is now 4)
  +--d +
  +(+b--) + // pre-decrement d (d is now 3), then use the old value of b (4) and then post-decrement b (b is now 3)
  +(+d) * b + // use the current values of d (3) and b (3)
  u; // add the value of u (which is 3 and hasn't changed)

console.log(`Google interview question:
Breaking it down:
// ++d * d * b * b++  => 4 * 4 * 3 * 3 = 144
// + --d + + +b--     => (3) + (4) = 7
// + + d * b +        => 3 * 3 = 9
// u                  => 3

// So tree = 144 + 7 + 9 + 3 = 163`);
console.log(tree); // This will output 163
console.log("-----");

let obj = {
  name: "dan",
  age: 16,
};

obj.email = "dan@gmail.com";

let object3 = new Object();

obj.name = "john";
object3["email"] = "john@gmail.com";

console.log(obj);
console.log(object3);

let name = obj.name;
console.log(name);
let email = obj["email"];
console.log(email);

console.log("-----");
console.log("\ndynamic key\n\n");

let w = "bnbnbmnb";
let obj2 = {
  [w]: "Marry",
};
console.log(obj2[w]);

let e = "email";
let un = "username";

let obj3 = {
  [e]: "egor@gmail.com",
  [un]: "egorchet",
};

console.log(obj3);
console.log(obj3.email);
console.log(obj3["email"]);
console.log(obj3[e]);

for (x in obj) {
  console.log(x, obj[x]);
}
console.log("-----");
console.log("\nObject.keys\n\n");
const keys = Object.keys(obj);
console.log(keys);
keys.forEach((item) => {
  console.log(item);
});
console.log("-----");
console.log("\nObject.values\n\n");
const values = Object.values(obj);
console.log(values);

Object.values(obj).forEach((item) => {
  console.log(item);
});
console.log("-----");
console.log("\nObject.entries\n\n");
const entries = Object.entries(obj);
console.log(entries);
for (x of entries) {
  console.log(x);
}
console.log("-----");
console.log("\nObject.FromEntries\n\n");
let cities = [
  ["tokyo", 30000000],
  ["delhi", 7000000],
  ["Tel-Aviv", 1000000],
];
console.log(cities);

let fromEntries = Object.fromEntries(cities);
console.log(fromEntries);
console.log("-----");

console.log("\nCopy always same\n\n");
let object1 = obj;

object1.age = 20;
console.log("obj=>", obj);
console.log("obj1=>", object1);
console.log("-----");

console.log(
  "\nClone creating an editable copy that will not affect the initial array\n\n",
);
let obj1 = { ...obj };

obj1.age = 20;
console.log("obj=>", obj);
console.log("obj1=>", obj1);

let objMy = { ...obj };
objMy.address = { city: "Tel Aviv" };
objMy.name = "Mary";
objMy.age = 25;
objMy.address.city = "Paris";
console.log(objMy);

console.log("\nJSON\n\n");
console.log("Type of objMy:", typeof objMy);
console.log("stringifying the object =>");
let jsonObj = JSON.stringify(objMy);
console.log("jsonObj=>", jsonObj);
console.log("Type of jsonObj:", typeof jsonObj);

console.log("parsing the stringifyed object  =>");
let newObj = JSON.parse(jsonObj);
console.log("newObj=>", newObj);
console.log("Type of newObj:", typeof newObj);
console.log("Updating city to New York insdie newObj");
newObj.address.city = "New York";
console.log(newObj);

console.log("\nMerging\n\n");
console.log("merging ...obj and ...objMy inside obj4 and console liggin it");
let obj4 = { ...obj, ...objMy };
console.log(obj4);

console.log("\nDestructuring\n\n");
delete obj.name; // Remove the 'name' property
obj.fname = "john";
//first way
// const name = obj.fname;
// const age = obj["age"];

//second way
const { age, fname } = obj;
console.log("console.log(fname, age); =>");
console.log(fname, age);

console.log(`let arr = ["one","two","three"];
const [r, t] = arr;
console.log(t, r);`);
let arr = ["one", "two", "three"];

const [r, ...t] = arr;

console.log(t, r);

console.log("\nSpreading\n\n");
console.log(`obj => ${JSON.stringify(obj)}`);
console.log("let object2 = {...obj, city:'tlv', lname:'cohen', age:30}; =>");
let object2 = { ...obj, city: "tlv", lname: "cohen", age: 30 };
console.log(`object2 => ${JSON.stringify(object2)}`);

//EXERCISE PRACTISE
// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys
const users = {
  user1: { age: 44, name: "picard" },
  user2: { age: 12, name: "sisko" },
  user3: { age: 109, name: "janeway" },
};

console.log(`EXERCISE PRACTISE
 filter for all users older than 30
 and store their data in an array
 use Array.filter Array.map Object.keys
const users = {
    user1: { age: 44, name: 'picard' },
    user2: { age: 12, name: 'sisko' },
    user3: { age: 109, name: 'janeway'}
};`);

// Convert the 'users' object into an array of its values
const usersArray = Object.keys(users).map((key) => users[key]);

// Filter out users older than 30
const usersFiltered = usersArray.filter((user) => user.age > 30);

console.log(`console.log(usersFiltered) => ${JSON.stringify(usersFiltered)}`);

//[
//     {id:'user1',age:44, name: 'picard'},
//     {id:'user3',age:109, name: 'janeway'}
//   ]

// Step 1: Understanding the Data Structure
// javascript
// Copy code
// const users = {
//     user1: { age: 44, name: 'picard' },
//     user2: { age: 12, name: 'sisko' },
//     user3: { age: 109, name: 'janeway'}
// };
// const users declares a constant variable named 'users'.
// {} denotes an object. Inside this object, there are three properties (user1, user2, and user3), each with its own object as a value.
// Each user object contains two properties: age and name.
// Step 2: Converting an Object into an Array of Its Values
// javascript
// Copy code
// const usersArray = Object.keys(users).map(key => users[key]);
// Object.keys(users) is a method that takes an object as an argument and returns an array of its keys. In this case, it returns ['user1', 'user2', 'user3'].
// .map(key => users[key]) is an array method that creates a new array by transforming each element in the original array. It takes a function as its argument. Here, for each key in the original array (the user keys), it returns the corresponding value from the users object (users[key]). Essentially, it's converting the array of user keys into an array of user objects.
// Step 3: Filtering the Array Based on Age
// javascript
// Copy code
// const usersFiltered = usersArray.filter(user => user.age > 30);
// .filter(user => user.age > 30) is another array method. It also takes a function as its argument and creates a new array. This function should return true for elements you want to keep and false for those you want to discard. Here, it's keeping only the user objects where the age property is greater than 30.
// Step 4: Printing the Result
// javascript
// Copy code
// console.log(usersFiltered);
// console.log(usersFiltered) will output the final filtered array to the console. If everything has worked as expected, this will be an array of user objects where each user is older than 30.
// Summary of Syntax:
// Objects {}: Collections of key-value pairs.
// Array methods: .map() and .filter() are methods that create new arrays by transforming (map) or filtering (filter) the elements of the original array.
// Arrow functions () => {}: A concise way to write functions in JavaScript. In this case, used as callbacks for .map() and .filter().
// Dot notation .: Used to access the properties or methods of an object or class.
// By combining these elements, you've transformed an object into an array, filtered that array based on a condition, and printed the results. This is a common pattern in JavaScript for handling and processing data.

//ZIVs solution just in case.
// const usersKeys = Object.keys(users);
// console.log(usersKeys);

// const usersMore30 = usersKeys.filter((key) => users[key].age > 30);
// console.log(usersMore30);

// const arrmap = usersMore30.map(id=> id);
// console.log('arrmap=>',arrmap);

// const result = usersMore30.map((id) => ({id, ...users[id] }));

// console.log(result);

// const adult = Object.keys(users)
//   .filter((key) => users[key].age > 30)
//   .map((id) => ({ id, ...users[id] }));
// console.log(adult);

// let firstName = "marry";
// let gmail = "m@gmail.com";
// let id = "user1";

// let obj7 = {
//   firstname,
//   gmail,
//   id,
// };

// console.log(obj7);
//ZIVs solution just in case.

/** object method */
console.log("\nObject Methods\n\n");
let obj6 = {
  name: "john",
  getName: function () {
    return this.name;
  },
};

let username = obj6.getName();
console.log(username);
// .bind
// console.log();

/** Class */
console.log("\nClasses in JavaScript\n\n");
class Animal {
  constructor(animalname) {
    this.name = animalname;
  }
  makeSound() {
    return `${this.name} makes a sound`;
  }
}

const animalA = new Animal("Dog");
const animalB = new Animal("Lion");

let sounda = animalA.makeSound();
let soundb = animalB.makeSound();

console.log(sounda);
console.log(soundb);

class Dog extends Animal {
  constructor(animal, name) {
    super(animal);
    this.mydogname = name;
  }
  // getters
  bark() {
    return `My ${this.name}, ${this.mydogname} bark`;
  }
  makeSound() {
    return "how how";
  }
  getName() {
    return this.mydogname;
  }
  //setter
  setName(val) {
    this.mydogname = val;
  }
}

class Chinto extends Dog {}

const myDog = new Dog("Dog", "Tony");
myDog.setName("Boby");
let sound = myDog.bark();

let soundanimal = myDog.makeSound();

console.log(sound);
console.log(soundanimal);
