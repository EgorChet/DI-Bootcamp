# Exercise1
# print("Hello World\n"*5)

# Exercise2
print((99**3)*8)

# Exercise3
# 5 < 3 Output: "False"
# 3 == 3 Output: "True"
# 3 == "3" Output: "False"
# "3" > 3 Output: "TypeError"
# "Hello" == "hello" Output: "False"

# Exercise4
# computer_brand = "Apple"
# print("I have an " + computer_brand + " computer")

# Exercise5
# name = "Egor"
# age = 26
# shoe_size = 42
# info = "Hello my name is " + name + ". I am " + str(age) + " years old and my shoe size is " + str(shoe_size) + "."
# print(info)

# Exercise6
# a = 10
# b= 6
#
# if a > b:
#     print('Hello World')
# else:
#     print("a is smaller than b")

# Exercise7
# while True:
#     try:
#         number = int(input("Enter a number: "))
#         break
#     except ValueError:
#         print("That's not a number. Please try again.")
#
# if number % 2 == 0:
#     print("The number is even.")
# else:
#     print("The number is odd.")

# Exercise8
# while True:
#
#     try:
#         user_name = input("Enter your name:")
#         break
#     except ValueError:
#         print("That's not a Name. Please try again.")
#
# if user_name == "Egor" or "egor":
#     print("You have the same name as the 'creator'")
# else:
#     print("Cool thank you")

# Exercise9
inch_in_cm = 2.54
min_height_cm = 145
max_realistic_height_cm = 215

attempt_count = 0

while True:
    try:
        user_height_inches = float(input("Please enter your height in inches:"))
        user_height_cm = user_height_inches * inch_in_cm
        if user_height_cm > max_realistic_height_cm and attempt_count == 0:
            print("That is not realistic maybe you have made a mistake? If not just enter you height once again")
            attempt_count += 1
        else:
            break
    except ValueError:
        print("That's not number. Please try again.")

if user_height_cm > min_height_cm:
    print("You are tall enough to ride a roller coaster")
else:
    print("Unfortunately you need to grow some more to ride this roller coaster")
