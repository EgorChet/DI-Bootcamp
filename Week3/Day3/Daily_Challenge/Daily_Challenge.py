# Daily Challenge - Circle

import math
import turtle

# Define a Circle class to encapsulate the properties and behaviors of a circle.
class Circle:
    # Constructor initializes the Circle instance.
    # It accepts either a radius or a diameter, but not both or neither.
    # This design choice allows flexibility in how a circle is defined.
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2  # Diameter is converted to radius to maintain a single internal representation.
        else:
            # Raising an error when neither radius nor diameter is provided ensures that the object is always correctly initialized.
            raise ValueError("You must specify either radius or diameter")

    # Property 'diameter' is a getter. 
    # This allows the diameter to be accessed as an attribute, but it's dynamically calculated from the radius.
    # Using a property instead of a method allows for more intuitive usage, resembling attribute access rather than function calls.
    @property
    def diameter(self):
        return self.radius * 2

    # Setter for the 'diameter' property.
    # This allows the diameter to be set directly, while the internal storage remains as the radius.
    # The setter provides a controlled way of updating the radius based on diameter, ensuring data consistency.
    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    # Property 'area' to calculate the area of the circle.
    # This is a read-only property, as the area is a derived attribute that depends only on the radius.
    @property
    def area(self):
        return math.pi * self.radius**2

    # Custom string representation of the Circle object.
    # Enhances readability and debuggability when Circle objects are printed.
    def __str__(self):
        return f"Circle with radius: {self.radius}"

    # Overloading the '+' operator to allow adding two circles.
    # This is an example of operator overloading, making the class more intuitive to use.
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        else:
            # Ensuring type compatibility for the '+' operation.
            raise TypeError("Unsupported operand type for +")

    # Overloading the '<' operator for comparison.
    # Allows intuitive size comparisons between Circle objects.
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        else:
            raise TypeError("Unsupported operand type for <")

    # Overloading the '==' operator for equality checking.
    # Facilitates direct comparison of Circle instances based on radius.
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        else:
            raise TypeError("Unsupported operand type for ==")

# Creating and using Circle instances to demonstrate functionality.
circle1 = Circle(radius=50)
circle2 = Circle(diameter=100)

# Displaying attributes and results of operations.
print(circle1)  # Shows the string representation of circle1.
print(circle2.diameter)  # Accesses the calculated diameter of circle2.
print(circle1.area)  # Outputs the calculated area of circle1.

# Demonstrating the addition of two circles.
circle3 = circle1 + circle2
print(circle3.radius)  # Radius of the new circle formed by adding circle1 and circle2.

# Comparing circles.
print(circle1 < circle2)  # Checks if circle1 is smaller than circle2.
print(circle1 == circle2)  # Checks if circle1 and circle2 are the same size.

# Sorting circles based on radius.
circles = [circle1, circle2, circle3]
circles.sort()  # The sort method uses the '<' operator defined in the class.
print([str(circle) for circle in circles])  # Displays sorted circles.

# Drawing circles using Turtle graphics.
# Turtle provides a simple and interactive way to draw shapes like circles.
turtle.circle(circle1.radius)  # Draws the first circle.
turtle.circle(circle2.radius)  # Draws the second circle.
turtle.done()  # Completes the Turtle drawing process.
