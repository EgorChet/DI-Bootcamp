import psycopg2
import os
from dotenv import load_dotenv

# Load variables from the .env file into the connect
load_dotenv()

# Retrieve databasecredentials from env



# Establish connection to ElephantSQL
conn = psycopg2.connect(
dbname = os.getenv('db_name'),
user = os.getenv('db_user'),
password = os.getenv('db_password'),
host = os.getenv('db_host'),
port = os.getenv('db_port'),
)

# # Establish connection to ElephantSQL
# conn = psycopg2.connect(
# dbname = 'tuvfsunl'
# user = 'tuvfsunl'
# password = 'dWaIyI_UWXUNntWK6SvDXXU1Am1wDxpp'
# host = 'isabelle.db.elephantsql.com'
# port = '5432'
# )

# Create a cursur object to execute SQL queries
cur = conn.cursor()

# CRUD  - Create (insert) Read (select) Update (update) Delete (delete)

# # Insert query
# insert_query = 'INSERT INTO products (name, price) VALUES (%s, %s)'
# data_to_insert = ('iKey', 750)
# # cur.execute(insert_query, data_to_insert)
# cur.execute('INSERT INTO products (name, price) VALUES (%s, %s)', ('iKey', 750))



# # Update query
# update_query = 'UPDATE products SET name=%s, price=%s WHERE product_id= %s'
# new_value = ('iCar2024', 9999, 6)
# cur.execute(update_query, new_value)

# # Delete query
# cur.execute('DELETE FROM products WHERE product_id=%s', ('2'))

# # Commit the transaction
# conn.commit()

# Execute a SELECT query
cur.execute('SELECT * FROM products')
rows = cur.fetchall()

for row in rows:
    print(row)

# Close the cursur and the connection
cur.close()
conn.close()


