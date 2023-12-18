# Define the matrix
matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

# Initialize an empty string to hold the decoded message
decoded_message = ''

# Iterate over each column in the matrix
for col in range(len(matrix[0])):  # len(matrix[0]) gives the number of columns
    # Iterate over each row for the current column
    for row in range(len(matrix)):  # len(matrix) gives the number of rows
        # Extract the character at the current row and column
        char = matrix[row][col]
        # Check if the character is an alphabet letter
        if char.isalpha():
            # If it is an alphabet letter, add it to the decoded message
            decoded_message += char
        else:
            # If it is not an alphabet letter, check if the last character in the decoded message is an alphabet letter
            if decoded_message and decoded_message[-1].isalpha():
                # If the last character is an alphabet letter, add a space
                decoded_message += ' '

# Output the decoded message
print(f"\n{decoded_message}")

# Self_Daily_Challenge

matrix = [
    ['H', 'm', 'f'],
    ['#', '(', '@'],
    ['e', '*', 'r'],
    ['@', '$', ')'],
    ['l', '!', 'i'],
    [')', '!', '-'],
    ['@', '-', ')'],
    ['l', '!', 'e'],
    ['&', '%', 'n'],
    ['o', '@', ')'],
    ['#', '!', '!'],
    ['£', 'y', 'd'],
]

# Decoding the message
decoded_message = ''

# Iterate through each column
for col in range(len(matrix[0])):
    word = ''
    # Iterate through each row in the current column
    for row in range(len(matrix)):
        char = matrix[row][col]
        if char.isalpha():
            # Concatenate alphabetic characters to form a word
            word += char
    # Add the word to the decoded message with a space
    decoded_message += word + ' '

# Remove any trailing space
decoded_message = decoded_message.strip()

print(f"\n{decoded_message}")



matrix = [
    ['H', 'M', 'F'],
    ['#', '(', '@'],
    ['e', 'y', 'r'],
    ['@', '_', ')'],
    ['l', 'D', 'i'],
    [')', '!', '-'],
    ['@', '-', ')'],
    ['l', 'e', 'e'],
    ['&', '%', 'n'],
    ['o', 'a', ')'],
    ['#', '!', '!'],
    ['£', 'r', 'd'],
]

# Adjusting the approach to separate words within columns when a case change occurs (from lowercase to uppercase)

decoded_message = ''

# Iterate through each column
for col in range(len(matrix[0])):
    word = ''
    for row in range(len(matrix)):
        char = matrix[row][col]
        if char.isalpha():
            # Detect a case change from lowercase to uppercase as a new word
            if word and char.isupper() and word[-1].islower():
                decoded_message += word + ' '
                word = char
            else:
                word += char
    # Add the last word of the column to the decoded message
    decoded_message += word + ' '

# Remove any trailing space
decoded_message = decoded_message.strip()

print(f"\n{decoded_message}")



