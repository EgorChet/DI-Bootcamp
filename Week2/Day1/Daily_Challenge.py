# Build_Up_A_String

import random

string = str(input("Enter a string that is exactly 10 characters long: "))
if len(string) < 10:
    print("string not long enough")
elif len(string) > 10:
    print("string too long")
elif len(string) == 10:
    print("perfect string")

print(string[0] + "\n" + string[-1])

for character in range(len(string)):
    print(string[:character +1])

list = list(string)

random.shuffle(list)

shuffled_string = ''.join(list)

print(shuffled_string)
