with open ('starwars.txt', 'r') as f:
    text = f.readlines()

print('ste2:', text[4])

print('step 3', text[:5])
for word in text:
    s = list(word)
    print(s)


cleaned_names = list(map(lambda s: s.strip('\n'), text))
print(cleaned_names)

darth = cleaned_names.count('Darth')
luke = cleaned_names.count('Luke')
lea = cleaned_names.count('Lea')

print(darth, luke, lea)


with open('starwars.txt', mode = 'a') as f:
    f.write('\nJuliana')

for i, name in enumerate(cleaned_names):
    print(name)
    if name == 'Luke':
        cleaned_names[i] = f'{name} SkyWalker'

print('modified names: \n', cleaned_names)


    
