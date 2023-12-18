# # Exercise 1 : Pets
if __name__ == "__main__":
    class Pets:
        def __init__(self, animals):
            self.animals = animals

        def walk(self):
            for animal in self.animals:
                print(animal.walk())


    class Cat:
        is_lazy = True

        def __init__(self, name, age):
            self.name = name
            self.age = age

        def walk(self):
            return f'{self.name} is just walking around'


    class Bengal(Cat):
        @staticmethod
        def sing(sounds):
            return f'{sounds}'


    class Chartreux(Cat):
        @staticmethod
        def sing(sounds):
            return f'{sounds}'


    class Siamese(Cat):
        @staticmethod
        def sing(sounds):
            return f'{sounds}'

    bengal_cat = Bengal("Bengal", 3)
    chartreux_cat = Chartreux("Chartreux", 2)
    siamese_cat = Siamese("Siamese", 4)


    all_cats = [bengal_cat, chartreux_cat, siamese_cat]

    sara_pets = Pets(all_cats)

    sara_pets.walk()
    print()


# Exercise 2 : Dogs


class Dog:

    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
        run_speed = self.weight / self.age * 10
        return run_speed

    def fight(self, other_dog):
        intial_dog_speed = self.run_speed() * self.weight
        other_speed = other_dog.run_speed() * other_dog.weight
        if intial_dog_speed > other_speed:
            winner = self
        else:
            winner = other_dog
        return f'{winner.name} wins the fight'




# Creating instances of dogs
dog1 = Dog('Rex', 5, 30)
dog2 = Dog('Buddy', 3, 40)
dog3 = Dog('Lucy', 2, 25)

if __name__ == "__main__":
    # Testing the methods
    print(dog1.bark())
    print(f"Rex's running speed: {dog1.run_speed()}\n")

    fight_result = dog1.fight(dog2)
    print(f"Fight result between Rex and Buddy: {fight_result}")

    fight_result = dog2.fight(dog3)
    print(f"Fight result between Lucy and Buddy: {fight_result}")

    fight_result = dog3.fight(dog1)
    print(f"Fight result between Rex and Lucy: {fight_result}")
