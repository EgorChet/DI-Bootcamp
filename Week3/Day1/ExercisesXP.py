# Exercise 1: Cats


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


# Instantiating three Cat objects
cat1 = Cat("Whiskers", 3)
cat2 = Cat("Paws", 5)
cat3 = Cat("Fluffy", 2)


def find_oldest_cat(cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

# Finding the oldest cat
oldest_cat = find_oldest_cat([cat1, cat2, cat3])

# Printing the details of the oldest cat
print(f"The oldest cat is {oldest_cat.name}, he/she is {oldest_cat.age} years old.")
print()
# Exercise 2: Dogs


class Dog:

    def __init__(self, owner_name, name, height):
        self.name = name
        self.height = height
        self.owner_name = owner_name

    def bark(self):
        print(f'{self.name} goes woof!')

    def jump(self):
        print(f'{self.name} jumps {self.height * 2} cm high!')

# Create an instance of the Dog class
davids_dog = Dog('David', 'Rex', 50)

print(f"{davids_dog.owner_name}'s dog's name is {davids_dog.name}.")
print(f"{davids_dog.owner_name}'s dog's height is {davids_dog.height} cm.")
davids_dog.bark()
davids_dog.jump()
print()
sarahs_dog = Dog('Sarah', 'Teacup', 20)
print(f"{sarahs_dog.owner_name}'s dog's name is {sarahs_dog.name}.")
print(f"{sarahs_dog.owner_name}'s dog's height is {sarahs_dog.height} cm.")
sarahs_dog.bark()
sarahs_dog.jump()

if sarahs_dog.height > davids_dog.height:
    print(f'\n{sarahs_dog.name} is bigger!')
else:
    print(f'\n{davids_dog.name} is bigger!')

# Exercise 3: Who's The Song Producer?


class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
print()
stairway.sing_me_a_song()

# Exercise 4: Afternoon At the Zoo


class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []  # Initialize an empty list for animals

    def add_animal(self, *new_animals):
        for animal in new_animals:
            if animal in self.animals:
                print("Animal already in the list")
            else:
                self.animals.append(animal)

    def get_animals(self):
        print(f'These are the animals of the Zoo:\n{self.animals}')

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    # def sort_animals(self):
    #     self.animals.sort()
    #     grouped_animals = {}
    #     group_index = 1
    #     last_letter = ''
    #     for animal in self.animals:
    #         first_letter = animal[0]
    #         if first_letter != last_letter:
    #             grouped_animals[group_index] = [animal]
    #             last_letter = first_letter
    #             group_index += 1
    #         else:
    #             grouped_animals[group_index - 1].append(animal)
    #     return grouped_animals
    #
    # def get_groups(self):
    #     groups = self.sort_animals()
    #     for index in groups:
    #         print(f"{index} : {groups[index]}")

    def sort_animals(self):
        self.animals.sort()
        grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)
        return grouped_animals

    def get_groups(self):
        groups = self.sort_animals()
        for index, key in enumerate(groups, start=1):
            print(f"{index}: {groups[key]}")

    # def get_groups(self):
    #     groups = self.sort_animals()
    #     for key in groups:
    #         print(f"{key}: {groups[key]}")

ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Giraffe", "Ape", "Bear", "Baboon", "Cat", "Cougar", "Eel", "Emu")
# ramat_gan_safari.add_animal("Giraffe")
# ramat_gan_safari.add_animal("Ape")
# ramat_gan_safari.add_animal("Bear")
# ramat_gan_safari.add_animal("Baboon")
# ramat_gan_safari.add_animal("Cat")
# ramat_gan_safari.add_animal("Cougar")
# ramat_gan_safari.add_animal("Eel")
# ramat_gan_safari.add_animal("Emu")


print("\nAnimals in the zoo:")
ramat_gan_safari.get_animals()

print("\nSorted animal groups:")
print(ramat_gan_safari.sort_animals())

print("\nAnimal groups:")
ramat_gan_safari.get_groups()

ramat_gan_safari.sell_animal("Giraffe")
print("\nAfter selling Giraffe:")
ramat_gan_safari.get_animals()
