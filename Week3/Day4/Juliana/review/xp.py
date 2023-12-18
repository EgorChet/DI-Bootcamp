class Currency:

    def __init__(self, label, amount):
        self.label = label
        self.amount = amount

    def __str__(self): #target to the user (user-friendly)
        return f'{self.amount} {self.label}'
    
    def __int__(self):
        return int(self.amount)
    
    def __repr__(self): #target to the developers
        return f'{self.amount} {self.label}'
    
    def __add__(self, other):
        if type(other) == int: 
            return self.amount + other
        
        elif self.label == other.label:
            return self.amount + other.amount
        else:
            raise TypeError ('different labels')
        
    def __iadd__(self, other):
        if type(other) == int: 
            self.amount += other
            return self
        
        elif self.label == other.label:
            self.amount += other.amount
            return self
        else:
            raise TypeError ('different labels')



c1 = Currency('dollars', 5)
c2 = Currency('dollars', 10)
c3 = Currency('shekels', 1)
c4 = Currency('shekels', 10)

print(c1)
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
c1 += 5
print('should be 10',c1)

print(c1 + c3)
