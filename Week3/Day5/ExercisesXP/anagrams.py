from anagram_checker import AnagramChecker
import os

def main():
    dir_path = os.path.dirname(os.path.realpath(__file__))
    checker = AnagramChecker(os.path.join(dir_path, "sowpods.txt"))
    
    while True:
        user_input = input("Enter a word to check for anagrams or 'exit' to quit: ").strip()
        
        if user_input.lower() == 'exit':
            break

        # Check if input is a single alphabetic word
        if not user_input.isalpha():
            print("Error: Please enter a single, alphabetic word.")
            continue

        user_input = user_input.upper()  # Since words in sowpods.txt are uppercase
        if checker.is_valid_word(user_input):
            anagrams = checker.get_anagrams(user_input)
            print(f"YOUR WORD: {user_input}")
            print("This is a valid English word.")
            print(f"Anagrams for your word: {', '.join(anagrams)}.")
        else:
            print("This is not a valid English word.")

if __name__ == "__main__":
    main()


# from anagram_checker import AnagramChecker
# import os

# def main():
#     dir_path = os.path.dirname(os.path.realpath(__file__))
#     checker = AnagramChecker(os.path.join(dir_path, "sowpods.txt"))
    
#     while True:
#         user_input = input("Enter a word to check for anagrams or 'exit' to quit: ").strip()

#         if user_input.lower() == 'exit':
#             break

#         # Simplified check if input is a single alphabetic word
#         if not user_input.isalpha():
#             print("Error: Please enter a single, alphabetic word.")
#             continue

#         user_input = user_input.upper()  # Convert to uppercase
#         if checker.is_valid_word(user_input):
#             anagrams = checker.get_anagrams(user_input)
#             print(f"YOUR WORD: {user_input}")
#             print("This is a valid English word.")
#             print(f"Anagrams for your word: {', '.join(anagrams)}.")
#         else:
#             print("This is not a valid English word.")

# if __name__ == "__main__":
#     main()




# Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.

# It should do the following:
# Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.

# If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
# Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
# Only alphabetic characters are allowed. No numbers or special characters.
# Whitespace should be removed from the start and end of the user’s input.

# Once your code has decided that the user’s input is valid, it should find out the following:
# All possible anagrams to the user’s word.
# Create an AnagramChecker instance and apply it to the steps created above.
# Display the information about the word in a user-friendly, nicely-formatted message such as:


# YOUR WORD :”MEAT”
# this is a valid English word.
# Anagrams for your word: mate, tame, team.