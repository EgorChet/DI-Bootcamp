import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share',
             'credit card', 'rush', 'south']
word = random.choice(wordslist)

### YOUR CODE STARTS FROM HERE ###

# Convert the word to lowercase for case-insensitive matching
word = word.lower()

# Initialize variables
guessed_letters = []
max_attempts = 6
attempts = 0
correct_letters = []

# Create a function to display the current state of the word with asterisks
def display_word(word, guessed_letters):
    result = ""
    for letter in word:
        if letter in guessed_letters:
            result += letter
        else:
            result += "*"
    return result

print("Welcome to Hangman!")
print("Guess the word:")
print(display_word(word, guessed_letters))

# Main game loop
while True:
    guess = input("Guess a letter: ").lower()

    # Check if the guess is a single letter
    if len(guess) != 1 or not guess.isalpha():
        print("Please enter a single letter.")
        continue

    # Check if the letter has already been guessed
    if guess in guessed_letters:
        print("You've already guessed that letter.")
        continue

    guessed_letters.append(guess)

    # Check if the guess is in the word
    if guess in word:
        print("Correct!")
        correct_letters.append(guess)
    else:
        print("Incorrect guess.")
        attempts += 1

    # Display the current state of the word
    current_state = display_word(word, guessed_letters)
    print(current_state)

    # Check if the player has won
    if current_state == word:
        print("Congratulations! You've guessed the word:", word)
        break

    # Check if the player has lost
    if attempts >= max_attempts:
        print("You've run out of attempts. The word was:", word)
        break
