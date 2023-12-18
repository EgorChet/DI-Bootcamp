# Old MacDonald’s Farm

class Farm:

    def __init__(self, owner_name):
        self.owner_name = owner_name
        self.animals = {}

    def add_animal(self, animal, quantity=1):
        self.animals[animal] = self.animals.get(animal, 0) + quantity

    def get_info(self):
        farm_info = f"{self.owner_name}'s farm\n\n"
        for animal, quantity in self.animals.items():
            farm_info += f"{animal} : {quantity}\n"
        farm_info += "\n    E-I-E-I-0!\n"
        return farm_info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()
        if not animal_types:
            return f"{self.owner_name}'s farm has no animals."

        # Handling the sentence construction depending on the number of animal types
        if len(animal_types) == 1:
            return f"{self.owner_name}'s farm has {animal_types[0]}s."
        elif len(animal_types) == 2:
            return f"{self.owner_name}'s farm has {animal_types[0]}s and {animal_types[1]}s."
        else:
            # For more than two types, format them with commas and 'and' before the last item
            animals_formatted = ', '.join([f"{animal}s" for animal in animal_types[:-1]]) + f", and {animal_types[-1]}s"
            return f"{self.owner_name}'s farm has {animals_formatted}."

macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())


