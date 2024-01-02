// Exercises XP
// Last Updated: September 22nd, 2023

// What You Will Learn
// Object methods
// Objects destructuring
// Classes


// 🌟 Exercise 1 : Location
console.log("🌟 Exercise 1: Location");

// Instructions
// Analyze the code below. What will be the output?

// A person object is created with properties for name, age, and location. The location itself is an object with properties for country, city, and coordinates. The coordinates is an array holding two numbers.
const person = {                    
    fullName: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
 }

// Destructuring: The person object is destructured to extract name, country, city, lat (latitude), and lng (longitude) directly into variables.
const {fullName, location: {country, city, coordinates: [lat, lng]}} = person;




// Console Output:
// name will be "John Doe"
// city will be "Vancouver"
// country will be "Canada"
// lat (latitude) will be 49.2827
// lng (longitude) will be -123.1207
console.log(`I am ${fullName} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
console.log('------')

// 🌟 Exercise 2: Display Student Info
// Using the code, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'
console.log("🌟 Exercise 2: Display Student Info");
// Instructions
function displayStudentInfo(objUser) {
    const {first, last} = objUser;
    return `Your full name is ${first} ${last}`;
}

yourName = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(yourName)
console.log('------')



// 🌟 Exercise 3: User & Id
console.log("🌟 Exercise 3: User & Id");
console.log("Part 1 Using methods taught in class, turn the users object into an array:")
// Instructions
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users);
console.log(usersArray);
console.log('---')
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
console.log("Part 2 Modify the outcome of part 1, by multipling the user’s ID by 2.")
const modifiedUsersArray = usersArray.map(([key, value]) => [key, value * 2]);
console.log(modifiedUsersArray);
console.log('------')

// Exercise 4 : Person Class
console.log("🌟 Exercise 4: Person Class");
// Instructions
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(`console.log(typeof member) => ${typeof member}
Because it's an instance of the Person class, and in JavaScript, all class instances are objects. This is a core concept of JavaScript's prototype-based inheritance.`)
console.log('------')

// 🌟 Exercise 5 : Dog Class
console.log("🌟 Exercise 5: Dog Class");
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?

console.log(` Option 1
class Labrador extends Dog {
    constructor(name, size) {
    this.size = size;
   }
 };`)
console.log('Issue: It does not call super() before using this. In JavaScript, if you define a constructor method in a subclass, you need to call super() before you can use this. Failing to do so will cause a reference error.')
console.log('---')

console.log(` Option 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };`)
console.log("Correct: This option correctly calls super(name) before using this. It passes the name to the parent Dog class's constructor, and then it sets the size property on the Labrador instance. This is the correct way to extend the Dog class.")
console.log('---')

console.log(` Option 3
class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };`)
console.log("Issue: The parameter name isn't defined in the constructor(size) method but is passed to super(name). This would result in name being undefined, leading to unexpected behavior.")
console.log('---')

console.log(` Option 4
class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };`)
console.log("Issue: Similar to option 1, this does not call super() before using this. It tries to set this.name and this.size directly without first calling the parent class's constructor, which is necessary when extending another class.")
console.log('------')

// 🌟 Exercise 6 : Challenges
console.log("🌟 Exercise 6: Challenges");
console.log('Part 1 Evaluate these (ie True or False)')

console.log("Comparing two arrays console.log([2] === [2]) => Expected output: False")
console.log(`Explanation:
Both [2] and [2] are arrays containing the number 2. However, each [2] is a separate array object in memory. Even though they contain the same value, they are different instances, and their references in memory are different.

Evaluation: 
False because the arrays are different objects with different references.`)

console.log("Comparing two objects console.log({} === {}) => Expected output: False")
console.log(`Explanation:
Similar to the array comparison, {} creates a new object, and each {} represents a different object in memory. Even if two objects look the same (like two empty objects in this case), they are distinct entities and have different references in memory.

Evaluation: 
False because the objects are different objects with different references.

`)

console.log('Part 2 What is, for each object below, the value of the property number and why?')

console.log(`
const object1 = { number: 5 }; =>

object1 is initialized with a property number set to 5.`)
const object1 = { number: 5 }; 

console.log(`
const object2 = object1; const object3 = object2; =>

object2 and object3 are assigned to reference object1. They don't hold separate values but point to the same object as object1. Therefore, any change in object1 will reflect in object2 and object3 as they are all references to the same object.`)
const object2 = object1; 
const object3 = object2; 

console.log(`
const object4 = { number: 5}; =>

object4 is a new object initialized independently with its number property set to 5. It's entirely separate from the other objects.`)
const object4 = { number: 5};

console.log(`
object1.number = 4; =>

Now we update object1.number is updated to 4, this change is also reflected in object2 and object3, as they are all references to the same underlying object.`)
object1.number = 4;

console.log('Therefore the resutls of the following console.logs will be:')
console.log(`console.log(object2.number) => ${object2.number} 
Reason: object2 references object1 and its current number property is set to 4

`)
console.log(`console.log(object3.number) => ${object3.number} 
Reason: object3 references object1 and its current number property is set to 4

`)
console.log(`console.log(object4.number) => ${object4.number} 
Reason: object4 was a separate object since the declaration therefore it number property remains unchanched 5!

`)
console.log('---')

console.log('\nPart 2 Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …')
class Animal {
    // Constructor to initialize the object with name, type, and color attributes
    constructor(name, type, color) {
      this.name = name; // The name of the animal (e.g., 'Charlie')
      this.type = type; // The type of the animal (e.g., 'dog')
      this.color = color; // The color of the animal (e.g., 'brown')
    }
  }

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal {
    constructor(name, type, color) {
      super(name, type, color);  // Calls the constructor of the parent class (Animal)
    }
  
    // Method to return the details of the animal along with the sound it makes
    sound(animalSound) {
      return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
  }
  // Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
  console.log('Example of creating an instance of the Mammal class and using the sound method');
  const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
  console.log(farmerCow.sound('Moooo')); 
  const myDog = new Mammal('Monica', 'dog', 'cream');
  console.log(myDog.sound("Woof"));
