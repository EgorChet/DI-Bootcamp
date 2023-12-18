# Exercise 1
print("Hello world\n" * 5 + "I love python\n" * 5)

# Exercise 2
user_number_month = int(input("Please enter a number of month desired (1-12): "))

if user_number_month > 12:
    user_number_month = int(input("Please enter a number of month desired between 1-12): "))
if user_number_month == 12 or  user_number_month == 1 or user_number_month == 2:
    print("That is certainly Winter")
elif user_number_month == 3 or  user_number_month == 4 or user_number_month == 5:
    print("That is certainly Spring")
elif user_number_month == 6 or  user_number_month == 7 or user_number_month == 8:
    print("That is certainly Summer")
else:
    print("That is certainly Fall")






