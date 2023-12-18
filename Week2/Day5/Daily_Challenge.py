# # Challenge 1 : Sorting
# # Input: Accept a comma-separated sequence of words
# input_sequence = input("Enter a comma-separated sequence of words: ")
#
#
# def sort_words(input_sequence):
#     # Split the input sequence into a list of words
#     words = input_sequence.split(', ')
#     print(words)
#     # Sort the words alphabetically using list comprehension
#     sorted_words = sorted(words)
#     print(sorted_words)
#     # Join the sorted words back into a comma-separated sequence
#     sorted_sequence = ', '.join(sorted_words)
#     print(sorted_sequence)
#     return sorted_sequence
#
# # Call the sort_words function and print the result
# sorted_sequence = sort_words(input_sequence)
# print(sorted_sequence)



# Challenge 2 : Longest Word
def longest_word(sentence):
    words = sentence.split()
    longest = ''
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest

# Test the function with your examples
print(longest_word("Margaret's toy is a pretty doll.")) # ➞ "Margaret's"
print(longest_word("A thing of beauty is a joy forever.")) # ➞ "forever."
print(longest_word("Forgetfulness is by all means powerless!")) # ➞ "Forgetfulness"

