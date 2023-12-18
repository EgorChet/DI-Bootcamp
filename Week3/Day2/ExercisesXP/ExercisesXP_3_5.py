from ExercisesXP_1_2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        if self.trained == True:
            self.trained = False
        else:
            self.trained = True

    def play(self,*other_dogs):
        other_dog_names = [dog.name for dog in other_dogs]
        other_dog_names = ', '.join(other_dog_names)
        print(f'{self.name}, {other_dog_names} all play together')

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))

pet_dog1 = PetDog('Rex', 5, 30, True)
pet_dog2 = PetDog('Buddy', 3, 40)
pet_dog3 = PetDog('Lucy', 2, 25)


pet_dog1.train()
pet_dog1.play(pet_dog2, pet_dog3)
pet_dog2.do_a_trick()
pet_dog2.train()
pet_dog1.train()
pet_dog1.do_a_trick()

# Exercise 4 : Family
class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the new addition!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"The {self.last_name} Family:\n")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

# Creating an instance of the Family class
family_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

smith_family = Family(family_members, 'Smith')
print()
# Adding a child to the Smith family
smith_family.born(name='John', age=5, gender='Male', is_child=True)
print()
# Checking if Michael is over 18
print("Is Michael over 18?", smith_family.is_18('Michael'))
print()
# Presenting the Smith family
smith_family.family_presentation()


# Exercise 5 : TheIncredibles Family

class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']} uses their power: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power.")

    def incredible_presentation(self):
        print(f"\nHere is our powerful family, the {self.last_name}s!\n")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, "
                  f"Is Child: {member['is_child']}, Power: {member['power']}, "
                  f"Incredible Name: {member['incredible_name']}")

# Creating an instance of TheIncredibles class
incredible_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles_family = TheIncredibles(incredible_members, 'Incredibles')

# Calling the incredible_presentation method
incredibles_family.incredible_presentation()
print()

# Adding Baby Jack to the Incredibles family
incredibles_family.born(name='Jack', age=1, gender='Male', is_child=True, power='Unknown Power', incredible_name='Baby Jack')

# Calling the incredible_presentation method again
incredibles_family.incredible_presentation()

incredibles_family.use_power('Jack')