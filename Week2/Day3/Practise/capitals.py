import json


def load_data(filename):
    try:
        with open(filename, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return {}


def save_data(filename, data):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)


# Load existing data
filename = 'capitals.json'
capitals = load_data(filename)

while True:
    country = input("Please enter a country name (or 'exit' to quit): ")
    if country.lower() == 'exit':
        print("Exiting the program.")
        print("Updated list of countries and their capitals:")
        print(capitals)
        print("Thank you for your help!")
        break

    upper_country = country.upper()  # Convert to uppercase

    if upper_country in capitals:
        print(f"The capital of {upper_country} is: {capitals[upper_country]}")
    else:
        print("That capital doesn't exist.")
        new_capital = input(f"Please enter the capital of {upper_country}: ")
        title_capital = new_capital.title()
        capitals[upper_country] = title_capital
        print(f"{upper_country} with capital {title_capital} has been added to the dictionary.")

    # Save updated data
    save_data(filename, capitals)

    # Optional: print the updated dictionary
    print("Updated list of countries and their capitals:")
    print(capitals)
