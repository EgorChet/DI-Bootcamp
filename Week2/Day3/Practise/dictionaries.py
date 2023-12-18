# print(dir(capitals))
# print(help(capitals))
# dictionary =  a collection of {key:value} pairs ordered and changeable. No duplicates
capitals = {
    "USA": "Washington D.C.",
    "India": "New Delhi",
    "China": "Beijing",
    "Russia": "Moscow"
}

# capitals.update({"Gemrany": "Berlin"})
# capitals.update({"USA": "New-York"})
# capitals.pop("China")
# capitals.popitem()
# capitals.clear()
# keys = capitals.keys()
# print(keys)
# for key in capitals.keys():
#     print(key)
# values = capitals.values()
# print(values)
# for value in capitals.values():
#     print(value)
# items = capitals.items()
# print(items)
# for items in capitals.items():
#     print(items)
# for keys, values in capitals.items():
#     print(f'{keys}: {values}')


# capitals.update({"Germany": "Berlin"})
# capitals.update({"USA": "Detroit"})
# capitals.pop("China")
# capitals.popitem()
# capitals.clear()

# keys = capitals.keys()
# for key in capitals.keys():
#   print(key)

# values = capitals.values()
# for value in capitals.values():
# print(value)

items = capitals.items()
for key, value in capitals.items():
   print(f"{key}: {value}")
