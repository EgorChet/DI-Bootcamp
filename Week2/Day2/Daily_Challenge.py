# # Challenge 1
# # Ask the user for a number and a length.
# # Create a program that prints a list of multiples of the number until the list length reaches length.
# # Examples
# # number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
# # number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
# # number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]
#
# # Answer Challenge 1
# number = int(input("Please enter a number: "))
# length = int(input("Please enter a length: "))
#
# multiples = [number * i for i in range(1, length + 1)]
# print(multiples)


# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples
# user's word : "ppoeemm" ➞ "poem"
# user's word : "wiiiinnnnd" ➞ "wind"
# user's word : "ttiiitllleeee" ➞ "title"
# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).


# Answer Challenge 2
word = input("Please enter your string: ")

new_word = word[0]
for letter in word[1:]:
    if letter != new_word[-1]:
        new_word += letter

print("Simplified word:", new_word)
