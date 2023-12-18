class AtmAccount:

    available_acc_num = 2000

    def __init__(self, holder) -> None:
        self.__holder = holder #private
        self.__account_num = AtmAccount.available_acc_num
        self.__balance = 0
        AtmAccount.available_acc_num += 1

    @property #gives direct access to private attribute __balance
    def balance(self):
        return self.__balance
    
    @balance.setter# gives permission to change the value of the private attribute __balance
    def balance(self, amount):
        self.__balance = amount


    def deposit(self, amount):
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError('Insuficient balance')
        else:
            self.balance -= amount

account1 = AtmAccount('Juliana S.')
account2 = AtmAccount('John Doe')
account3 = AtmAccount('Leo DiCaprio')

# print(account1._AtmAccount__account_num)
# print(account2._AtmAccount__account_num)
# print(account3._AtmAccount__account_num)


# # print(account1.__holder) #error: 'AtmAccount' object has no attribute '__holder'
# # print(account1._AtmAccount__holder) #succesfuly displays the info

account1.deposit(200)
# # print(account1._AtmAccount__balance)
account1.withdraw(500)

print(account1.balance)