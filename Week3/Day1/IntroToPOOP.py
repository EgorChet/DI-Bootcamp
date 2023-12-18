from datetime import date

# class Dog():
#     def __init__(self):
#         pass
#
# Egors_Dog = Dog()
# Egors_Dog.name = "Lieto"
#
# print(Egors_Dog.name)
#
# class Dog():
#
#
#     def __init__(self, name, color, weight, height):
#         self.name = name
#         self.color = color
#         self.weight = weight
#         self.height = height
#
#
#     def bark(self):
#         print(f"{self.name} barks ! WAF")


#     def walk(self, distance:int):
#         print(f'{self.name} walks {distance} km')
#
#
#     def rename(self, new_name):
#         self.name = new_name
#         return self.name
#
# alex_dog = Dog("Rex", "Beige", 56,120)
# print(alex_dog.__dict__)
# print(alex_dog.weight, alex_dog.color)
#
# john_dog = Dog("Fluffy", 'White', 12, 45)
# john_dog.bark()
#
# alex_dog.walk(5)
# print(john_dog.rename('Korn'))

# class Dog():
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog
#
# shelter_dog = Dog('Rex')
# other_shelter_dog = Dog("Jimmy")

# class Person():
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#
#     def show_details(self):
#         print("Hello my name is " + self.name)
#
#
#     def rename(self,new_name):
#         self.name = new_name
#
#
# first_person = Person("John", 36)
# first_person.rename("Alex")
# first_person.show_details()



# class Computer():
#
#     def description(self, name):
#         """
#         This is a totally useless function
#         """
#         print("I am a computer, my name is", name)
#         #Analyse the line below
#         print(self)
#
# mac_computer = Computer()
# mac_computer.brand = "Apple"
# print(mac_computer.brand)
#
# dell_computer = Computer()
#
# Computer.description(dell_computer, "Mark")
# # IS THE SAME AS:
# dell_computer.description("Mark")


class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)

account1 = BankAccount(123456789, 190000)
account1.withdraw(15000)
account1.deposit((1956))
account1.view_balance()
account1.view_transactions()
