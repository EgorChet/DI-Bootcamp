# # Challenge 1
# user_word = input('Please input word: ')
#
# letter_indexes = {}
#
# for index, letter in enumerate(user_word):
#     if letter in letter_indexes:
#         letter_indexes[letter].append(index)
#     else:
#         letter_indexes[letter] = [index]
# print(letter_indexes)

# # Challenge 2
# # Example 1
# items_purchase = {
#     "Water": "$1",
#     "Bread": "$3",
#     "TV": "$1,000",
#     "Fertilizer": "$20"
# }
# wallet = "$300"
# wallet_dollars = int(wallet.replace("$", "").replace(",", ""))
# affordable_items = []
#
# # Convert prices to numeric values and store in a new dictionary
# items_purchase_dollars = {}
# for item, price in items_purchase.items():
#     numeric_price = float(price.replace("$", "").replace(",", ""))
#     items_purchase_dollars[item] = numeric_price
#
# # Sort the items by price
# items_purchase_dollars_sorted = dict(sorted(items_purchase_dollars.items(), key=lambda x: x[1]))
#
# # Iterate through sorted items and update wallet after each affordable purchase
# for item, price in items_purchase_dollars_sorted.items():
#     if price <= wallet_dollars:
#         affordable_items.append(item)
#         wallet_dollars -= price
#
# # Check if the affordable_items list is empty
# if not affordable_items:
#     print("Nothing")
# else:
#     # Formatting the Answer
#     affordable_items.sort()
#     affordable_items_str = ", ".join(affordable_items)
#     print("Items that I can afford: " + affordable_items_str)
#     print("Money left in the wallet: $" + str(wallet_dollars))

# # Challenge 2
# # Example 2
# wallet = "$100"
# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }
#
# wallet_dollars = int(wallet.replace("$", "").replace(",", ""))
# affordable_items = []
#
# # Convert prices to numeric values and store in a new dictionary
# items_purchase_dollars = {}
# for item, price in items_purchase.items():
#     numeric_price = float(price.replace("$", "").replace(",", ""))
#     items_purchase_dollars[item] = numeric_price
#
# # Sort the items by price
# items_purchase_dollars_sorted = dict(sorted(items_purchase_dollars.items(), key=lambda x: x[1]))
#
# # Iterate through sorted items and update wallet after each affordable purchase
# for item, price in items_purchase_dollars_sorted.items():
#     if price <= wallet_dollars:
#         affordable_items.append(item)
#         wallet_dollars -= price
#
# # Check if the affordable_items list is empty
# if not affordable_items:
#     print("Nothing")
# else:
#     # Formatting the Answer
#     affordable_items.sort()
#     affordable_items_str = ", ".join(affordable_items)
#     print("Items that I can afford: " + affordable_items_str)
#     print("Money left in the wallet: $" + str(wallet_dollars))

# Challenge 2
# Example 3
items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1"

wallet_dollars = int(wallet.replace("$", "").replace(",", ""))
affordable_items = []

# Convert prices to numeric values and store in a new dictionary
items_purchase_dollars = {}
for item, price in items_purchase.items():
    numeric_price = float(price.replace("$", "").replace(",", ""))
    items_purchase_dollars[item] = numeric_price

# Sort the items by price
items_purchase_dollars_sorted = dict(sorted(items_purchase_dollars.items(), key=lambda x: x[1]))

# Iterate through sorted items and update wallet after each affordable purchase
for item, price in items_purchase_dollars_sorted.items():
    if price <= wallet_dollars:
        affordable_items.append(item)
        wallet_dollars -= price

# Check if the affordable_items list is empty
if not affordable_items:
    print("Nothing")
else:
    # Formatting the Answer
    affordable_items.sort()
    affordable_items_str = ", ".join(affordable_items)
    print("Items that I can afford: " + affordable_items_str)
    print("Money left in the wallet: $" + str(wallet_dollars))
