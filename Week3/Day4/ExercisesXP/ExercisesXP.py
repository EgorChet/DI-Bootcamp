#  Exercise 1 – Random Sentence Generator

import random


def get_words_from_file():
    with open ("sowpods.txt", 'r') as file:
        words = file.readlines()
    return [word.strip() for word in words]

def get_random_sentence(length):
    words = get_words_from_file()
    sentence = " ".join(random.choice(words) for _ in range(length))
    return sentence + "."

def main():
    try:
        length = int(input("Please enter the number of words : "))
        print("Random Sentence:", get_random_sentence(length))
    except ValueError:
        print('Please enter a valid number.')

if __name__ == "__main__":
    main()


# Exercise 2: Working With JSON

import json

# JSON string
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Parse the JSON string into a Python dictionary
data = json.loads(sampleJson)

# Access the nested “salary” key
salary = data['company']['employee']['payable']['salary']
print(f'Salary : {salary}')

# Add a key called “birth_date”
data['company']['employee']['birth_date'] = "1997-08-11"
birth_date = data['company']['employee']['birth_date']
print (f'Birth Date: {birth_date}')

# Change name to Egor
data['company']['employee']['name'] = "Egor"

# Save the dictionary as JSON to a file
with open('updated_employee.json', 'w') as file:
    json.dump(data, file, indent=2)
print("Updated JSON saved to 'updated_employee.json'")
print()
