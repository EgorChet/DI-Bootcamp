# Part 2
# Create a file called menu_editor.py , which will have the following functions:

from menu_item import MenuItem
from menu_item import MenuManager

def show_user_menu():
    while True:
        print("\nMenu Options:")
        print("View an Item (V)")
        print("Add an Item (A)")
        print("Delete an Item (D)")
        print("Update an Item (U)")
        print("Show the Menu (S)")
        print("Exit (E)")
        choice = input("Please choose an option: ").upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            show_restaurant_menu()
            break
        else:
            print("Invalid option, please try again.")

def view_item():
    name = input("Enter the name of the item to view: ")
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item: {item.name}, Price: {item.price}")
    else:
        print("Item not found")

def add_item_to_menu():
    name = input("Enter the name of the new item: ")
    price = input("Enter the price of the new item: ")
    try:
        item = MenuItem(name, int(price))
        item.save()
        print("Item was added successfully.")
    except Exception as e:
        print(f"Error adding item: {e}")

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ")
    try:
        item = MenuItem(name, 0)  # Price is irrelevant for deletion
        item.delete()
        print("Item was deleted successfully.")
    except Exception as e:
        print(f"Error deleting item: {e}")

def update_item_from_menu():
    old_name = input("Enter the name of the item to update: ")
    new_name = input("Enter the new name of the item: ")
    new_price = input("Enter the new price of the item: ")
    try:
        item = MenuItem(old_name, 0)  # Initial price is irrelevant
        item.update(new_name, int(new_price))
        print("Item was updated successfully.")
    except Exception as e:
        print(f"Error updating item: {e}")

def show_restaurant_menu():
    print("\nRestaurant Menu:")
    items_exist = MenuManager.all()
    if not items_exist:
        print("The menu is currently empty.")

# Start the program
show_user_menu()




# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.

# add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# show_restaurant_menu() - print the restaurant’s menu.

# When the user chooses to exit the program, display the restaurant menu and exit the program.