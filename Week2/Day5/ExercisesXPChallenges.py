# Exercise 1
# Instructions
# Write a script that inserts an item at a defined index in a list.
def insert_at_index(lst, index, item):
    lst.insert(index, item)
    return lst

#
# Exercise 2
# Instructions
# Write a script that counts the number of spaces in a string.
def count_spaces(s):
    return s.count(' ')

#
# Exercise 3
# Instructions
# Write a script that calculates the number of upper case letters and lower case letters in a string.
def count_case(s):
    upper, lower = 0, 0
    for char in s:
        if char.isupper():
            upper += 1
        elif char.islower():
            lower += 1
    return upper, lower

#
# Exercise 4
# Instructions
# Write a function to find the sum of an array without using the built in function:
#
#     >>>my_sum([1,5,4,2])
#     >>>12

def my_sum(arr):
    total = 0
    for num in arr:
        total += num
    return total

#
# Exercise 5
# Instructions
# Write a function to find the max number in a list
#
#     >>>find_max([0,1,3,50])
#     >>>50
def find_max(lst):
    return max(lst)

#
# Exercise 6
# Instructions
# Write a function that returns factorial of a number
#
#     >>>factorial(4)
#     >>>24

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

#
# Exercise 7
# Instructions
# Write a function that counts an element in a list (without using the count method):
#
#     >>>list_count(['a','a','t','o'],'a')
#     >>>2

def list_count(lst, element):
    count = 0
    for el in lst:
        if el == element:
            count += 1
    return count

#
# Exercise 8
# Instructions
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:
#
#     >>>norm([1,2,2])
#     >>>3

import math

def norm(lst):
    return math.sqrt(sum(x**2 for x in lst))

#
# Exercise 9
# Instructions
# Write a function to find if an array is monotonic (sorted either ascending of descending)
#
#     >>>is_mono([7,6,5,5,2,0])
#     >>>True
#
#     >>>is_mono([2,3,3,3])
#     >>>True
#
#     >>>is_mono([1,2,0,4])
#     >>>False
#

def is_mono(lst):
    return all(lst[i] <= lst[i + 1] for i in range(len(lst) - 1)) or all(lst[i] >= lst[i + 1] for i in range(len(lst) - 1))


#
# Exercise 10
# Instructions
# Write a function that prints the longest word in a list.
#

def longest_word(lst):
    return max(lst, key=len)


# Exercise 11
# Instructions
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.
#

def separate_types(lst):
    ints, strs = [], []
    for item in lst:
        if isinstance(item, int):
            ints.append(item)
        elif isinstance(item, str):
            strs.append(item)
    return ints, strs

#
# Exercise 12
# Instructions
# Write a function to check if a string is a palindrome:
#
#     >>>is_palindrome('radar')
#     >>>True
#
#     >>>is_palindrome('John)
#     >>>False
#

def is_palindrome(s):
    return s == s[::-1]

#
# Exercise 13
# Instructions
# Write a function that returns the amount of words in a sentence with length > k:
#
#     >>>sentence = 'Do or do not there is no try'
#     >>>k=2
#     >>>sum_over_k(sentence,k)
#     >>>3
#
#

def sum_over_k(sentence, k):
    return len([word for word in sentence.split() if len(word) > k])


# Exercise 14
# Instructions
# Write a function that returns the average value in a dictionary (assume the values are numeric):
#
#     >>>dict_avg({'a': 1,'b':2,'c':8,'d': 1})
#     >>>3
#

def dict_avg(d):
    return sum(d.values()) / len(d)


#
# Exercise 15
# Instructions
# Write a function that returns common divisors of 2 numbers:
#
#     >>>common_div(10,20)
#     >>>[2,5,10]
#
#

def common_div(a, b):
    return [i for i in range(1, min(a, b) + 1) if a % i == 0 and b % i == 0]


# Exercise 16
# Instructions
# Write a function that test if a number is prime:
#
#     >>>is_prime(11)
#     >>>True
#

def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


#
# Exercise 17
# Instructions
# Write a function that prints elements of a list if the index and the value are even:
#
#     >>>weird_print([1,2,2,3,4,5])
#     >>>[2,4]
#

def weird_print(lst):
    return [lst[i] for i in range(len(lst)) if i % 2 == 0 and lst[i] % 2 == 0]


#
# Exercise 18
# Instructions
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:
#
#     >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
#     >>>int: 1, str:1 , float:1, bool:2
#
#

def type_count(**kwargs):
    types = {}
    for value in kwargs.values():
        types[type(value).__name__] = types.get(type(value).__name__, 0) + 1
    return types



# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.
# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.
#
#

def custom_split(s, delimiter=' '):
    return s.split(delimiter)


# Exercise 20
# Instructions
# Convert a string into password format.
# Example:
# input : "mypassword"
# output: "***********"

def password_format(s):
    return '*' * len(s)

# Testing the functions
print("Exercise 1:", insert_at_index([1, 2, 3], 1, 'a'))
print("Exercise 2:", count_spaces("hello world"))
print("Exercise 3:", count_case("Hello World"))
print("Exercise 4:", my_sum([1, 5, 4, 2]))
print("Exercise 5:", find_max([0, 1, 3, 50]))
print("Exercise 6:", factorial(4))
print("Exercise 7:", list_count(['a', 'a', 't', 'o'], 'a'))
print("Exercise 8:", norm([1, 2, 2]))
print("Exercise 9:", is_mono([7, 6, 5, 5, 2, 0]))
print("Exercise 10:", longest_word(["hello", "world", "python", "programming"]))
print("Exercise 11:", separate_types([1, 'hello', 3, 'world']))
print("Exercise 12:", is_palindrome('radar'))
print("Exercise 13:", sum_over_k('Do or do not there is no try', 2))
print("Exercise 14:", dict_avg({'a': 1, 'b': 2, 'c': 8, 'd': 1}))
print("Exercise 15:", common_div(10, 20))
print("Exercise 16:", is_prime(11))
print("Exercise 17:", weird_print([1, 2, 2, 3, 4, 5]))
print("Exercise 18:", type_count(a=1, b='string', c=1.0, d=True, e=False))
print("Exercise 19:", custom_split("hello world, this is a test", delimiter=','))
print("Exercise 20:", password_format("mypassword"))