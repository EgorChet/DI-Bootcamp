# Exercise 1
import green

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
my_dict = dict(zip(keys, values))
print(my_dict)

# Exercise 2
family = {}

while True:
    name = input("Enter the family member's name: ")
    age = int(input("Enter their age: "))
    family[name] = age

    another = input("Do you want to add another family member? (yes/no): ")
    if another.lower() != 'yes':
        break

total_cost = 0

for name, age in family.items():
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15

    print(f"{name}'s ticket price: ${ticket_price}")
    total_cost += ticket_price

print(f"The total cost for the family is: ${total_cost}")

# Exercise 2 Version 2
names_input = input("Please enter the names of your family members separated by commas: ")
ages_input = input("Please enter the ages of your family members separated by commas: ")

names = names_input.split(',')
ages = [int(age) for age in ages_input.split(',')]

family = dict(zip(names, ages))
TotalPrice = 0
for age in family.values():
    if age < 3:
        TotalPrice += 0
    elif 3 <= age < 12:
        TotalPrice += 10
    else:
        TotalPrice += 15
print('The total price is:', TotalPrice, 'Nis!')

# Exercise 3
# Part 2
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# Part 3. Change the number of stores to 2.
brand.update({'number_stores': 2})
value = brand["number_stores"]
print("Number of stores: " + str(value))

# Part 4. Print a sentence that explains who Zara's clients are.
client_type = brand["type_of_clothes"]
clients_sentence = f"Zara's clients are seeking clothing for {', '.join(client_type[:-1])}, and {client_type[-1]}."

print(clients_sentence)

# Part 5. Add a key called country_creation with a value of Spain.
brand.update({'country_creation': 'Spain'})
value = brand["country_creation"]
print("Country of brand creation is: " + str(value) + " !")

# Part 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if 'international_competitors' in brand.keys():
    brand['international_competitors'].append("Desigual")
    print(brand['international_competitors'])

# Part 7. Delete the information about the date of creation.
# del brand['creation_date']
brand.pop("creation_date", None)
print(brand)

# Part 8. Print the last international competitor.
last_competitor = brand["international_competitors"][-1]
print(last_competitor)

# Part 9. Print the major clothes colors in the US.
US_colors = brand['major_color']['US']
US_colors = ', '.join(US_colors)
print(US_colors)

# Part 10. Print the amount of key value pairs (i.e. length of the dictionary).
print(len(brand))

# Part 11. Print the keys of the dictionary.
print(brand.keys())

# Part 12. Create another dictionary called more_on_zara with the following details:
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# Part 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
brand.update(more_on_zara)
print(brand)

# Part 14. Print the value of the key number_stores. What just happened ?
number_of_stores = brand['number_stores']
print(number_of_stores)
# So initially we had a brand dictionary with {'number_stores': 2} but when we added more_on_zara it also had
# number_stores inside, so basically we updated the brand dictionary information and now {'number_stores': 10000}.
#
#
# Exercise 4 : Disney Characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

disney_users_A = {}
for index, user in enumerate(users):
    disney_users_A[user] = index
print(disney_users_A)

disney_users_B = {}
for user, index in enumerate(users):
    disney_users_B[user] = index
print(disney_users_B)

disney_users_C = {}
users = sorted(users)
for index, user in enumerate(users):
    disney_users_C[user] = index
print(disney_users_C)

names_with_i = []

for name in users:
    if 'i' in name:
        names_with_i.append(name)
print(names_with_i)

names_starting_m_or_p = []
for name in users:
    if name.startswith(('M', 'P')):
        names_starting_m_or_p.append(name)
print(names_starting_m_or_p)
