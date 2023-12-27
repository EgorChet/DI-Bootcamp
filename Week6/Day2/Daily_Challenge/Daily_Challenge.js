let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries()

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

const cloneGroceries = () => {
    // Create a variable named user that is a copy of the client variable.
    let user = client;

    // Change the client variable to “Betty”.
    client = "Betty";
    console.log(`client: ${client}, user: ${user}`);

    // Create a variable named shopping that is equal to the groceries variable.
    let shopping = groceries;

    // Change the value of the totalPrice key to 35$.
    groceries.totalPrice = "35$";
    console.log(`groceries totalPrice: ${groceries.totalPrice}, shopping totalPrice: ${shopping.totalPrice}`);

    // Change the value of the paid key to false.
    groceries.other.paid = false;
    console.log(`groceries paid: ${groceries.other.paid}, shopping paid: ${shopping.other.paid}`);
};

cloneGroceries();

