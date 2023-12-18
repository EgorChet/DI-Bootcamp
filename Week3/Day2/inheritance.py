class Animal:

    def __init__(self, name, family, legs) -> None:
        self.name = name
        self.family = family
        self.legs = legs

    def make_sound(self):
        print(f' {self.name} is making a sound')

    def breath(self):
        print(f'{self.name } is breathing')


class Dog(Animal):
    def __init__(self, name, legs, family= 'Canidae',trained = False):
        super().__init__(name, family, legs)
        self.trained = trained

    def make_sound(self):
        print(f'{self.name} is BARKING!')

    def fetch_ball(self):
        print(f'{self.name} fetched the ball' )

    def give_paw(self):
        if self.trained:
            print(f'{self.name} gives the paw')
        else:
            print(f'{self.name} is not trained')


animal1 = Animal('Bobo', 'Feadae', 4)
print(animal1.family)

dog1 = Dog('Rex', 4)
print(dog1.trained)

dog2 = Dog('Lassy', 'Canidae', 4, True)

dog1.give_paw()
dog2.give_paw()


dog1.make_sound()
dog1.breath()
animal1.make_sound()


