import random
# Instructions
# Part 1 : Quizz :
# Answer the following questions

# What is a class?
# A class is a blueprint for creating objects with pre-defined attributes and methods.
class Dog:
    # Class attribute
    species = 'Canis familiaris'

    # Initializer / Instance attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # instance method
    def description(self):
        return f"{self.name} is {self.age} years old"

    # Another instance method
    def speak(self, sound='Woof'):
        return f"{self.name} says {sound}"

# Creating an instance of Dog
my_dog = Dog('Rex', 5)
print(my_dog.description())  # Output: Rex is 5 years old

# What is encapsulation?
# Encapsulation is the hiding of data implementation by restricting access to accessors and mutators.
class BankAccount:
    def __init__(self, balance=0):
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        self.__balance += amount
        return self.__balance

    def withdraw(self, amount):
        if amount > self.__balance:
            raise ValueError("Insufficient funds")
        self.__balance -= amount
        return self.__balance

# Demonstrating encapsulation with a bank account
account = BankAccount(100)
print(account.deposit(50))  # Output: 150

# What is abstraction?
# Abstraction is the concept of hiding the complex reality while showing only the necessary parts.
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.__width = width
        self.__height = height

    def area(self):
        return self.__width * self.__height

# Using an abstract class with a concrete implementation
rectangle = Rectangle(10, 20)
print(rectangle.area())  # Output: 200

# What is inheritance?
# Inheritance allows a class to inherit attributes and methods from another class.
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclasses must implement this method")

class Cat(Animal):
    def speak(self):
        return "Meow"

# Demonstrating inheritance
whiskers = Cat("Whiskers")
print(whiskers.speak())  # Output: Meow

# What is multiple inheritance?
# Multiple inheritance is a feature where a class can inherit attributes and methods from more than one parent class.
class A:
    def method_a(self):
        return "A method"

class B:
    def method_b(self):
        return "B method"

class C(A, B):
    pass

# Demonstrating multiple inheritance
c_instance = C()
print(c_instance.method_a())  # Output: A method
print(c_instance.method_b())  # Output: B method

# What is polymorphism?
# Polymorphism is the ability of different classes to be treated as instances of the same class through the same interface.
class Animal:
    def speak(self):
        raise NotImplementedError("Subclasses must implement this method")

class Dog(Animal):
    def speak(self):
        return "Woof"

class Cat(Animal):
    def speak(self):
        return "Meow"

# Polymorphism in action
animals = [Dog(), Cat()]
for animal in animals:
    print(animal.speak())  # Outputs "Woof" for Dog, "Meow" for Cat

# What is method resolution order or MRO?
# MRO is the order in which Python looks for a method in a hierarchy of classes.
print(C.__mro__)  # Output: (<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>)


# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f'{self.value} of {self.suit}'

class Deck:
    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.deck = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        if len(self.deck) != 52:
            raise ValueError("Deck is not complete and cannot be shuffled")
        random.shuffle(self.deck)

    def deal(self):
        if len(self.deck) == 0:
            raise ValueError("All cards have been dealt")
        return self.deck.pop(0)

# Usage

# Creating an instance of the Deck class. 
# This initializes a new deck of 52 cards.
deck = Deck()

# Shuffling the deck. This randomizes the order of the cards in the deck.
deck.shuffle()

# Dealing a single card from the deck. 
# This method removes one card from the deck and returns it.
card_dealt = deck.deal()

# Printing the card that was dealt. 
# This shows which card has been removed from the deck.
print(f'Dealt card: {card_dealt}')

# # Attempting to shuffle the deck again. 
# # However, since a card has been dealt, the deck no longer has 52 cards, 
# # so if the shuffle method includes a check for a complete deck,
# # this will raise an error.
# deck.shuffle()

# Creating and shuffling the deck
deck1 = Deck()
deck1.shuffle()

# Dealing five cards from the deck
for _ in range(5):
    card_dealt = deck1.deal()
    print(f'Dealt card: {card_dealt}')
    print(f'Remaining cards in deck: {len(deck1.deck)}')

# Trying to shuffle with less than 52 cards
try:
    deck1.shuffle()
    print("Deck shuffled with less than 52 cards")
except ValueError as e:
    print(e)

# Dealing all remaining cards
while len(deck1.deck) > 0:
    card_dealt = deck1.deal()
    print(f'Dealt card: {card_dealt}')

# Trying to deal a card from an empty deck
try:
    card_dealt = deck1.deal()
    print(f'Dealt card: {card_dealt}')
except ValueError as e:
    print(e)