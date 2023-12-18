import psycopg2
import os
from dotenv import load_dotenv

# Load variables from the .env file into the connect
load_dotenv('/Users/egorchetverikov/Desktop/DI-Bootcamp/Week4/Day4/PractiseDay3/1.env')

# Establish connection to ElephantSQL
conn = psycopg2.connect(
dbname = os.getenv('dbname'),
user = os.getenv('user'),
password = os.getenv('password'),
host = os.getenv('host'),
port = os.getenv('port'),
)
# Establish connection Local
# conn = psycopg2.connect (
#     dbname = 'DVD_Rental_Day2',
#     user = 'postgres',
#     password = 'dog240718',
#     host = 'localhost',
#     port = '5432'
# )

# Create a cursor object to execute SQL queries
cur = conn.cursor()

# Execute a SELECT query
cur.execute('SELECT title, film_id FROM film')
rows = cur.fetchall()  # You missed the () after fetchall

for row in rows:
    print(row)

# Close the cursor and connection when done
cur.close()
conn.close()