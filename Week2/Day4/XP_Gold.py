# # Input lines for user to enter their information
# gender = input("Enter your gender (m/f): ")
# date_of_birth = input("Enter your date of birth (yyyy/mm/dd): ")
# current_year, current_month, current_day = 2023, 11, 30
#
# def get_age(year, month, day):
#     # Calculating age
#     age = current_year - year
#     if (month > current_month) or (month == current_month and day > current_day):
#         age -= 1
#     return age
#
# def can_retire(gender, date_of_birth):
#     year, month, day = map(int, date_of_birth.split('/'))
#     age = get_age(year, month, day)
#     retirement_age = 67 if gender == 'm' else 62
#     years_to_retirement = retirement_age - age
#     return age >= retirement_age, years_to_retirement
#
# # Calling the can_retire function and displaying a detailed result
# can_retire_status, years_left = can_retire(gender, date_of_birth)
#
# if can_retire_status:
#     print(f"Congratulations! You are eligible to retire.")
# else:
#     print(f"You still need to work a bit. Your retirement age comes in {years_left} years.")


# Exercise 2 : Sum


def sum_of_concatenations(X: int):
    # Converting X to a string to enable concatenation
    str_X = str(X)

    # Concatenating the string representation of X
    X1 = str_X
    X2 = str_X * 2  # Repeating the string twice
    X3 = str_X * 3  # Repeating the string three times
    X4 = str_X * 4  # Repeating the string four times

    # Converting the concatenated strings back to integers and summing them
    return int(X1) + int(X2) + int(X3) + int(X4)

# Testing
result = sum_of_concatenations(3)
print(result)

#
# Exercise 3 : Double Dice
# Instructions
# Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.
# Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.
#
# Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).
#
# After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
# Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.
# For example:
#
# If the results of the throws were as follows (your code would do 100 doubles, not just 3):
# (1, 2), (3, 1), (5, 5)
# (3, 3)
# (2, 4), (1, 2), (3, 4), (2, 2)
#
# Then my output would show something like this:
# Total throws: 8
# Average throws to reach doubles: 2.67.