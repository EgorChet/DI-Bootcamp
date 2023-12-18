# Instructions
# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.
#
# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.
#
# The method is named after Julius Caesar, who used it in his private correspondence.
#
# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given message and a given shift.
#
# Check out this tutorial

def caesar_cipher(text, shift, operation):
    """
    Encrypt or decrypt the text using Caesar cipher.

    Args:
    text (str): The input text to be encrypted or decrypted.
    shift (int): The number of positions each letter in the text is to be shifted.
    operation (str): 'encrypt' or 'decrypt' to specify the operation.

    Returns:
    str: The encrypted or decrypted text.
    """
    result = ""

    # Adjust shift for decryption
    if operation == 'decrypt':
        shift = -shift

    for letter in text:
        # Check if the character is an alphabet
        if letter.isalpha():
            # Shift the character while maintaining the case
            ascii_offset = ord('A') if letter.isupper() else ord('a')
            result += chr((ord(letter) - ascii_offset + shift) % 26 + ascii_offset)
        else:
            # Non-alphabet characters are added as is
            result += letter

    return result


# Interactive part to get user input
operation = input("Do you want to 'encrypt' or 'decrypt' the message? ").lower()
shift = int(input("Please enter the shift value: "))
text = input("Please enter your message/text: ")

# Perform the operation
if operation in ['encrypt', 'decrypt']:
    cypher_text = caesar_cipher(text, shift, operation)
    print(f"Result: {cypher_text}")
else:
    print("Invalid operation. Please choose 'encrypt' or 'decrypt'.")

# text = input("Please enter you message/text: ")
#
# cypher_text = ""
# for letter in text:
#     cypher_text += chr(ord(letter) + 3)
#
# print(cypher_text)