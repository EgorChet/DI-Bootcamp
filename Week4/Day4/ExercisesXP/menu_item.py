# Exercise 1 : Restaurant Menu Manager
# Python Script:
# Write a Python script that connects to the user_management database.
import psycopg2
import os
from dotenv import load_dotenv

# Load variables from the .env file into the connect
load_dotenv()

# Establish connection to ElephantSQL
conn = psycopg2.connect(
dbname = os.getenv('db_name'),
user = os.getenv('db_user'),
password = os.getenv('db_password'),
host = os.getenv('db_host'),
port = os.getenv('db_port'),
)
# Instructions
# Description: Create a restaurant menu management system for a manager. The program should allow the manager to view the menu, add an item and delete an item.
# PART 1
# In this exercise we will use PostgreSQL and Python.
# Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns
# item_id : SERIAL PRIMARY KEY
# item_name : VARCHAR(30) NOT NULL
# item_price : SMALLINT DEFAULT 0

# In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.

class MenuItem:
    def __init__(self, name, price) -> None:
        self.name = name
        self.price = price

# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.
    
    # Add a new menu items to the Menu_Items table.
    def save(self):
        cur = conn.cursor()
        insert_query = 'INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)'
        data_to_insert = (self.name, self.price)
        cur.execute(insert_query, data_to_insert)
        conn.commit()

    def delete(self):
        cur = conn.cursor()
        cur.execute('DELETE FROM Menu_Items WHERE item_name=%s', (self.name,))
        conn.commit()

    def update (self, new_name, new_price):
        cur = conn.cursor()
        update_query = 'UPDATE Menu_Items SET item_name=%s, item_price=%s WHERE item_name=%s'
        data_to_update = (new_name, new_price, self.name)
        cur.execute(update_query, data_to_update)
        conn.commit()


# In the file menu_manager.py, create a new class called MenuManager
class MenuManager:
    def __init__(self) -> None:
        pass
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.
    def get_by_name(name):
        cur = conn.cursor()
        cur.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
        row = cur.fetchone()
        if row is not None:
            item = MenuItem(name=row[1], price=row[2])
            print(f"Found item: {item.name}, Price: {item.price}")
        else:
            print("Item not found")

        
# # Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

    @classmethod
    def all(cls):
        try:
            with conn.cursor() as cur:
                cur.execute("SELECT item_name, item_price FROM Menu_Items")
                rows = cur.fetchall()
                if rows:
                    for row in rows:
                        print(row)
                    return True  # Items were found and printed
                else:
                    return False  # No items found
        except psycopg2.Error as e:
            print(f"Database error: {e}")
            return False  # Error occurred, treating as no items found
        # def all():
        # cur = conn.cursor()
        # cur.execute('SELECT item_name, item_price FROM Menu_Items')
        # rows = cur.fetchall()

        # for row in rows:
        #     print(row)

# # Codebox:
# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item3 = MenuManager.get_by_name('Veggie Burger')
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all()
