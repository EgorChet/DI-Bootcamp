# Managing a Simple User Database

# Scenario:
# You're building a basic user management system that interacts with a PostgreSQL database. 
# Users should be able to:

# View all existing users.
# Add a new user.
# Update a user's information.
# Delete a user.

# Tasks:
# Database Setup:

# Create a PostgreSQL database named user_management.
# Inside the database, create a table named users with columns: 
# id (integer, primary key), username (varchar), email (varchar), and age (integer).

# Python Script:
# Write a Python script that connects to the user_management database.
import psycopg2
import os
from dotenv import load_dotenv

# Load variables from the .env file into the connect
load_dotenv('/Users/egorchetverikov/Desktop/DI-Bootcamp/Week4/Day4/PractiseDay3/.2.env')

# Establish connection to ElephantSQL
conn = psycopg2.connect(
dbname = os.getenv('db_name'),
user = os.getenv('db_user'),
password = os.getenv('db_password'),
host = os.getenv('db_host'),
port = os.getenv('db_port'),
)

# Implement functions to perform the following operations:
# View all users from the users table.
def view_all_users():
    cur = conn.cursor()
    cur.execute('SELECT username, email, age FROM users')
    rows = cur.fetchall()

    for row in rows:
        print(row)

# Add a new user to the users table.
def add_new_user(username, email, age):
    cur = conn.cursor()
    insert_query = 'INSERT INTO users (username, email, age) VALUES (%s, %s, %s)'
    data_to_insert = (username, email, age)
    cur.execute(insert_query, data_to_insert)
    conn.commit()
    view_all_users()

# Update a user's information based on their id.
def update_user_info():
    cur = conn.cursor()
    
    # Prompt the user for the user ID to update
    user_id = int(input("Enter the user ID to update: "))

    # Prompt for new values
    new_username = input("Enter new username: ")
    new_email = input("Enter new email: ")
    new_age = int(input("Enter new age: "))
    
    # Update the user's information in the database
    update_query = 'UPDATE users SET username=%s, email=%s, age=%s WHERE id=%s'
    data_to_update = (new_username, new_email, new_age, user_id)
    cur.execute(update_query, data_to_update)
    conn.commit()
    view_all_users()

# Delete a user from the users table based on their id.

def delete_user():
    cur = conn.cursor()

    # Prompt the user for the user ID to update
    user_id = int(input("Enter the ID of the User that you want to delite: "))

    cur.execute('DELETE FROM users WHERE id=%s', (user_id,))
    conn.commit()
    view_all_users()

# User Interaction:

# Create a simple command-line interface (CLI) to interact with your Python functions.
# The CLI should provide options to view, add, update, or delete users, 
# and take appropriate inputs from the user to perform these actions.

# Testing:

# Test your Python script by adding users, viewing all users, 
# updating user information, and deleting users.


while True:
    print("\nOptions:")
    print("1. View all users")
    print("2. Add a new user")
    print("3. Update user information")
    print("4. Delete a user")
    print("5. Quit")

    choice = input("Enter your choice: ")

    if choice == '1':
        print("\nAll Users:")
        view_all_users()
    elif choice == '2':
        username = input("Enter username: ")
        email = input("Enter email: ")
        age = input("Enter age: ")
        add_new_user(username, email, age)
        print("User added successfully!")
    elif choice == '3':
        user_id = input("Enter the ID of the user to update: ")
        new_username = input("Enter new username: ")
        new_email = input("Enter new email: ")
        new_age = input("Enter new age: ")
        update_user_info(user_id, new_username, new_email, new_age)
        print("User information updated successfully!")
    elif choice == '4':
        user_id = input("Enter the ID of the user to delete: ")
        delete_user(user_id)
        print("User deleted successfully!")
    elif choice == '5':
        print("Goodbye!")
        break
    else:
        print("Invalid choice. Please select a valid option.")

# Example usage:
view_all_users()

# # Add a new user
# add_new_user('EgorChet', 'egor.chetverikov.1997@gmail.com', 26)

# # Update userinfo based on ID
# update_user_info()

# Delete the user based on ID


# Close the cursor and connection when done
conn.close()