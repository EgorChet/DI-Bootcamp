import random
import string
from datetime import datetime
from faker import Faker

# Exercise 1: Currencies


class Currency:
    
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, (int, float)):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError("Unsupported type for addition with Currency")

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, (int, float)):
            self.amount += other
        else:
            raise TypeError("Unsupported type for addition with Currency")
        return self

# Example usage
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

# Testing the implemented methods
print(str(c1))       # '5 dollars'
print()
print(int(c1))       # 5
print()
print(repr(c1))      # '5 dollars'
print()
print(c1 + 5)        # 10 dollars
print()
print(c1 + c2)       # 15 dollars
print()
print(c1)            # 5 dollars
print()
c1 += 5
print(c1)            # 10 dollars
print()
c1 += c2
print(c1)            # 20 dollars
print()

try:
    print(c1 + c3)   # TypeError
except TypeError as e:
    print(e)
print()


# Exercise 3: String Module


def generate_random_string(length=5):
    # Combine uppercase and lowercase letters
    # letters = string.ascii_uppercase + string.ascii_lowercase
    # or
    letters = string.ascii_letters
    # Randomly select characters from the combined letters
    random_string = ''.join(random.choice(letters) for _ in range(length))

    return random_string

# Generate a random string of length 5
random_str = generate_random_string()
print(random_str)
print()


# Exercise 4 : Current Date


def display_current_date():
    # Get the current date using the datetime module directly
    current_date = datetime.now().date()
    print("Current Date:", current_date)

# Call the function to display the current date
display_current_date()
print()


# Exercise 5 : Amount Of Time Left Until January 1st


def time_until_new_year():
    # Current time
    now = datetime.now()

    # Next January 1st
    next_new_year = datetime(now.year + 1, 1, 1, 0, 0, 0)

    # Time difference
    time_diff = next_new_year - now

    # Extract days, hours, minutes, and seconds
    days = time_diff.days
    hours, remainder = divmod(time_diff.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    print(f"The 1st of January {next_new_year.year} is in {days} days and {hours:02d}:{minutes:02d}:{seconds:02} hours.")

# Test the function
time_until_new_year()


# Exercise 6 : Birthday And Minutes


# Get user inputs for year, month, and day
year = int(input('Enter your birth year (yyyy): '))
month = int(input('Enter your birth month (mm): '))
day = int(input('Enter your birth day (dd): '))

# Create a datetime object from the inputs
birth_date = datetime(year, month, day)

def how_many_minutes_lived(birth_date):
    now = datetime.now()
    time_difference = now - birth_date
    
    # Convert time difference to minutes
    minutes_lived = time_difference.total_seconds() / 60
    print(f"You have lived for approximately {minutes_lived:.0f} minutes.")

    # Adding a disclaimer
    print("Note: This is an estimate and does not account for the exact time of day you were born.")

how_many_minutes_lived(birth_date)
print()

# Exercise 7 : Faker Module

fake = Faker()

# Initialize an empty list of users
users = []

def add_user():
    """
    Adds a new user dictionary to the users list with fake data.
    """
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code()
    }
    users.append(user)

# Example usage
add_user()  # Adds one user
add_user()  # Adds another user

# Print the list of users to see the result
print()
print()
for user in users:
    print(f'\n{user}')
print()
print()
