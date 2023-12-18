# Exercise 1
# Done

# Exercise 2 : Alias
# Did not make it i don't know something is wrong

# Exercise 3
#     >>> 3 <= 3 < 9                                    Output: True

#     >>> 3 == 3 == 3                                   Output: True

#     >>> bool(0)                                       Output: False

#     >>> bool(5 == "5")                                Output: False

#     >>> bool(4 == 4) == bool("4" == "4")              Output: True

#     >>> bool(bool(None))                              Output: False

#     x = (1 == True)                                   Output: True

#     y = (1 == False)                                  Output: False

#     a = True + 4                                      Output: 5

#     b = False + 10                                    Output: 10

#     print("x is", x)                                  Output: x is True

#     print("y is", y)                                  Output: y is False

#     print("a:", a)                                    Output: a: 5

#     print("b:", b)                                     Output: b: 10
#
# Exercise 4 : How Many Characters In A Sentence ?
my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(len(my_text))

# Exercise 5: Longest Word Without A Specific Character
restricted_char = "a"
restricted_char_cap = "A"
english_alphabet = set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

word = input("Enter the longest possible English word without the letter 'A', spaces, or non-letter characters: ")

# Check if the first word is valid
while (restricted_char in word) or (restricted_char_cap in word) or (not word.isalpha()) or (not set(word).issubset(english_alphabet)):
    word = input("Invalid input. Please enter an English word without 'A', 'a', spaces, or non-letter characters: ")

longest_word = word

# Main loop for continuously taking inputs
while True:
    new_word = input("Enter the longest possible English word without the letter 'A' and non-letter characters (write 'quit' to stop): ")

    if new_word.lower() == 'quit':
        break

    if (restricted_char in new_word) or (restricted_char_cap in new_word) or (not new_word.isalpha()) or (not set(new_word).issubset(english_alphabet)):
        print("Invalid input. Please enter an English word without 'A', 'a', spaces, or non-letter characters.")
        continue

    if len(new_word) > len(longest_word):
        print("Congrats!!! New longest word found.")
        longest_word = new_word

print(f"The longest word found was: {longest_word}")




