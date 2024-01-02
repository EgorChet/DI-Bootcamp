// let b = 3, d = b, u = b; // b, d, and u are all 3

// const tree = 
//     ++d * d * b * b++ +  // pre-increment d (d is now 4), then use the old value of b (3) and then post-increment b (b is now 4)
//     + --d + + +b-- +     // pre-decrement d (d is now 3), then use the old value of b (4) and then post-decrement b (b is now 3)
//     + + d * b +          // use the current values of d (3) and b (3)
//     u;                   // add the value of u (which is 3 and hasn't changed)

// Breaking it down:
// ++d * d * b * b++  => 4 * 4 * 3 * 3 = 144
// + --d + + +b--     => (3) + (4) = 7
// + + d * b +        => 3 * 3 = 9
// u                  => 3

// So tree = 144 + 7 + 9 + 3 = 163
// console.log(tree);  // This will output 163

// let obj = { 
//     name:'dan', 
//     age: 16
// };

// obj.email = 'dan@gmail.com';

// let obj1 = new Object();

// obj.name = 'john';
// obj1["email"] = 'john@gmail.com';

// console.log(obj);
// console.log(obj1);

// let name = obj.name;
// console.log(name);
// let email = obj["email"];
// console.log(email);

// // dynamic key

// let a = "bnbnbmnb";
// let obj2 = {
//     [a] : 'Marry'
// }
// console.log(obj2[a]);


// let e = "email"
// let un = 'username'

// let obj3 = {
//     [e]:'egor@gmail.com',
//     [un]: 'egorchet'
// }

// console.log(obj3);
// console.log(obj3.email)
// console.log(obj3['email'])
// console.log(obj3[e])

// let obj = { 
//     name:'dan', 
//     age: 16
// };

// for(x in obj){
//     console.log(x, obj[x]);
// }

// console.log("Object.keys")
// const keys =Object.keys(obj);
// console.log(keys);
// keys.forEach(item => {
//     console.log(item);
// })

// console.log("Object.values")
// const values = Object.values(obj);
// console.log(values);

// Object.values(obj).forEach((item) => {
//     console.log(item);
// });

// console.log("Object.entries")
// const entries = Object.entries(obj);
// console.log(entries);
// for (x of entries) {
//     console.log(x);
// }

// console.log('Object.FromEntries')
// let cities = [
//     ['tokyo', 30000000],
//     ['delhi', 7000000],
//     ['Tel-Aviv', 1000000]
// ]
// console.log(cities)

// let fromEntries = Object.fromEntries(cities)
// console.log(fromEntries);




// // copy always same 
// // let obj1 = obj;

// // obj1.age = 20
// // console.log("obj=>", obj)
// // console.log("obj1=>", obj1)

// // clone same when clone not same after altering 
// // let obj1 = {...obj};

// // obj1.age = 20
// // console.log("obj=>", obj)
// // console.log("obj1=>", obj1)

// // GO BACK HERE 
// let objMy = {...obj};
// objMy.address = {city: "Tel Aviv"};
// objMy.name = "Mary"
// objMY.age = 25
// objMy.address.city = "Paris"
// console.log(objMy);


// // JSON
// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj)

// let newObj = JSON.parse(jsonObj);
// console.log("newObj=>", newObj);

// // newObj.address.city = 'New York';
// // GO BACK HERE 

// // Merging 
// let obj3 = {...obj, ...objMy}
// console.log(obj3)


// // Destructuring 
// con



//EXERCISE PRACTISE
// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys
const users = {
    user1: { age: 44, name: 'picard' },
    user2: { age: 12, name: 'sisko' },
    user3: { age: 109, name: 'janeway'}
};

// Convert the 'users' object into an array of its values
const usersArray = Object.keys(users).map(key => users[key]);

// Filter out users older than 30
const usersFiltered = usersArray.filter(user => user.age > 30);

console.log(usersFiltered);

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



