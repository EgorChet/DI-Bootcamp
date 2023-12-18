import math


class Circle:

    def __init__(self, radius, diameter) -> None:        
        self.radius = radius
        self.diameter = diameter
        # self.diameter = diameter

    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius *2)
    
    @classmethod
    def from_diameter(cls, diameter):
        return cls(radius = diameter /2 , diameter = diameter)
    
    def area(self):
        area = math.pi * self.radius**2
        return area

    def __str__(self):
        return f'Circle d: {self.diameter}\n radius: {self.radius}\n area: {self.area()}'

    def __add__(self, other):
        return self.diameter + other.diameter
    
    def __gt__(self, other):
        return self.diameter > other.diameter
    
    def __eq__(self, other):
        return self.diameter == other.diameter
    
    def sort_circles(self, lts:list):
        lts.append(self)
        result = sorted(lts)
        return result




circle1 = Circle.from_radius(30)
circle2 = Circle.from_diameter(50)
circle3 = Circle(10,20)

print(circle1.diameter)
print(circle2.diameter)

# print(circle1.area())
print(circle1 + circle2) #70
print(circle1 > circle2) #False
print(circle1 == circle2) #False

circles = [circle2, circle3]

s_circles = circle1.sort_circles(circles)
print(s_circles)
for circle in s_circles:
    print(circle.diameter)

