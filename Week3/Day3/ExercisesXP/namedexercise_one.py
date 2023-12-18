# Exercise 2: Import
# exercise_one.py using different import syntaxes

# Import the entire module
import func
func.add_and_print(5, 3)  # Outputs: 8

# Import only the specific function
from func import add_and_print
add_and_print(10, 2)  # Outputs: 12

# Import the function with an alias
from func import add_and_print as add
add(7, 1)  # Outputs: 8

# Import the module with an alias
import func as f
f.add_and_print(4, 4)  # Outputs: 8