
age = int(input("Please input your age e.g.'26' : "))

candles = 'i' * (age % 10)

cake_top = f"__{candles}__"
middle = "   |:H:a:p:p:y:|   "
bottom = "|:B:i:r:t:h:d:a:y:|"
base = "~~~~~~~~~~~~~~~~~~~"
spaces2 = len(bottom) - len(cake_top)
if spaces2 % 2 != 0:
    spaces2 += 1

cake_top_final = f"{' ' * (spaces2 // 2)}{cake_top}{' ' * (spaces2 // 2)}"

cake = (f'{cake_top_final}\n{middle}\n{bottom}\n{base}')

# spaces = len(bottom)-len(middle)
# print(spaces)
# print(spaces2)

print(cake)
