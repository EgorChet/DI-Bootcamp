# Exercise1
my_fav_numbers = {8, 888, 88, 8888}

my_fav_numbers.add(888888)
my_fav_numbers.add(88888)

my_fav_numbers.remove(88888)

friend_fav_numbers = {4, 44, 444, 4444}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)

# Exercise2
# Answer: No, it's not possible to add more integers or any other elements to an existing tuple in Python.
# Tuples are immutable, which means once they are created, their size and contents cannot be changed

# Exercise3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
basket.clear()
print(basket)
print("Number of Apples: ", apple_count)

# Exercise4
sequence_of_floats = []

for integer in range(3, 11):
    division_result = integer / 2
    if division_result.is_integer():
        sequence_of_floats.append(int(division_result))
    else:
        sequence_of_floats.append(division_result)

print(sequence_of_floats)


# or

sequence_of_floats = [1.5]
current_value = 1.5

while current_value < 5:
    current_value += 0.5
    if current_value.is_integer():
        sequence_of_floats.append(int(current_value))
    else:
        sequence_of_floats.append(current_value)

print(sequence_of_floats)


# Exercise6
my_name = "egor"

while True:
    user_name = input("Please enter your name: ")
    if user_name.lower() == my_name:
        print("Hey, that's my name too!")
        break
    print("That's not my name. Try again!")

# Exercise7
user_favourite_fruits = list(input("Please enter your favourite fruits separated by a space: "))
any_fruit = input("Please enter a name of any fruit: ")
if any_fruit in user_favourite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy.")

# Exercise8
toppings = []

while True:
    topping = input("Please enter a pizza topping one by one. When you are done, input 'quit': ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print(topping, "added to your pizza!")

total_price = 10 + 2.5 * len(toppings)
print("\nYour pizza toppings are:\n")
for topping in toppings:
    print("- " + topping)
print("Total price: " + str(total_price) + ".")

# Exercise9
total_cost = 0

while True:
    age_input = input("Enter the age of a family member (or 'done' to finish): ")
    if age_input.lower() == 'done':
        break
    print("Please enter the age of the next family member")

    age = int(age_input)
    if age < 3:
        pass
    elif age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print(f"Total ticket cost for the family is:", str(total_cost), "Nis!")

teenagers = ["Sveta", "Nadya", "Egor", "Viktor"]
final_list = []

for name in teenagers:
    age = int(input(f"Enter the age of {name}: "))  # Simulated age

    if 16 <= age <= 21:
        final_list.append(name)
        print("Yey,", str(name), "is permitted to watch the movie.")
    else:
        print("Sorry,", str(name), "is not permitted to watch the movie.")

print("The final list of teenagers permitted to watch the movie:", final_list)

# Exercise10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print("\n" + str(sandwich_orders) + "\n")

finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(sandwich)
print("I made your tuna sandwich\nI made your avocado sandwich\nI made your egg sandwich\nI made your chicken sandwich")
print("\n" + str(finished_sandwiches) + "\n")
