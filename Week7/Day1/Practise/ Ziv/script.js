// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u
//  // 163
/** 
let obj = {
  name: "dan",
  age: 16,
};

obj.email = "dan@gmail.com";
let obj1 = new Object();

obj1.name = "john";
obj1["email"] = "john@gmail.com";

console.log(obj);
console.log(obj1);

let name = obj.name;
console.log(name);

let email = obj["email"];
console.log(email);
*/

/* dynamic key */
/** 
let a = "bnbnbmnb";
let obj2 = {
  [a]: "Marry",
};
console.log(obj2[a]);

let e = "org_email";
let un = "username";

let obj3 = {
  [e]: "jjj@aaa.com",
  [un]: "johnjohn",
};
console.log(obj3);

console.log(obj3.org_email);
console.log(obj3["org_email"]);
console.log(obj3[e]);
*/

// loop

// let obj = {
//   name: "dan",
//   age: 16,
//   empty:null
// };

// for (x in obj) {
//   console.log(x, obj[x]);
// }

/** Object.keys */
// const keys = Object.keys(obj);
// console.log(keys);
// keys.forEach((item) => {
//   console.log(item);
// });

/** Object.values */
// const values = Object.values(obj);
// console.log(values);

// Object.values(obj).forEach((item) => {
//   console.log(item);
// });

/** Object.entries */
// const entries = Object.entries(obj);
// console.log(entries);
// for (x of entries) {
//   console.log(x);
// }

/** Object.FromEntries */
// let cities = [
//     ["a", 1],
//     ["b", 2],
//     ["c", 3]
// ]

// console.log(cities);

// let fromEntries = Object.fromEntries(cities)
// console.log(fromEntries);

// let obj = {
//   name: "dan",
//   age: 16,
// };

/** clone */
// let obj1 = {...obj};

// obj1.age = 20

// console.log('obj=>', obj);
// console.log('obj1=>', obj1);

/** deep cloning */
// let obj = {
//   name: "dan",
//   age: 16,
//   address: {
//     city:'Tel Aviv'
//   }
// };

// let obj2 = {...obj}

// obj2.name = 'Marry'
// obj2["age"] = 25
// obj2.address.city = "Paris";

// console.log('obj=>', obj);
// console.log('obj2=>', obj2);

// /** JSON */
// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);

// let newObj = JSON.parse(jsonObj);
// console.log("newObj=>",newObj);

// newObj.address.city = "New York";

/** Merging */
// let obj = {
//   name: "dan",
//   age: 16,
// };

// let obj2 = {
//   city: "TLV",
//   name: "marry"
// };
// let obj3 = {...obj2, ...obj}
// // obj.city = obj2.city
// console.log(obj3);

/** Destructuring */
// let obj = {
//   fname: "dan",
//   age: 16,
// };

// const name = obj.fname;
// const age = obj["age"];

// const {age, fname} = obj

// console.log(fname, age);

// let arr = ["one","two"];

// const [b, a] = arr;

// console.log(a,b);

/** Spreading */
// let obj1 = {...obj, city:'tlv', lname:'cohen', age:30}

// console.log(obj1);

/** Nested Object Destructuring */
// let obj = {
//   fname: "dan",
//   age: 16,
//   address: {
//     city: "ny",
//     country: "usa",
//   },
// };

// const {
//   fname,
//   age,
//   address: { country, city },
// } = obj;

// console.log(fname, age, city, country);

// function fullName(obj) {
//   const { fname, lname } = obj;
//   return fname + " " + lname;
// }

// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys

// const users = {
//   user1: { age: 44, name: "picard" },
//   user2: { age: 12, name: "sisko" },
//   user3: { age: 109, name: "janeway" },
// };
/** 
Results:
[
  {id:'user1',age:44, name: 'picard'},
  {id:'user3',age:109, name: 'janeway'}
]
*/

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

// let name = "marry";
// let email = "m@gmail.com";
// let id = "user1";

// let obj = {
//   name,
//   email,
//   id,
// };

// console.log(obj);

/** object method */
let obj = {
  name: "john",
  getName: function () {
    return this.name;
  },
};

let username = obj.getName();
console.log(username);
// .bind
// console.log();

/** Class */
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

// console.log(sounda);
// console.log(soundb);

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
