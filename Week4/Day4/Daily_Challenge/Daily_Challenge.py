# Instructions
# Using this REST Countries API, create the functionality which will write 10 random countries to your database.

# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

import requests
import psycopg2
import random
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


# Create a cursor and create the countries table
cur = conn.cursor()
cur.execute('''
CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    capital VARCHAR(100),
    flag TEXT,
    subregion VARCHAR(100),
    population BIGINT
);
''')
conn.commit()

def fetch_countries():
    # Fetching data from REST Countries API
    response = requests.get('https://restcountries.com/v3.1/all')
    if response.status_code == 200:
        # Randomly select 10 countries
        countries = random.sample(response.json(), 10)
        return countries
    else:
        print("Failed to fetch countries")
        return []

def insert_countries_to_db(countries):
    with conn.cursor() as cur:
        for country in countries:
            # Extract attributes
            name = country['name']['common']
            capital = country.get('capital', [''])[0]  # Capital might not exist for all countries
            flag = country['flags']['svg']
            subregion = country.get('subregion', '')
            population = country['population']

            # Insert into the database
            cur.execute(
                "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)",
                (name, capital, flag, subregion, population)
            )
    conn.commit()

# Main flow
countries_data = fetch_countries()
if countries_data:
    insert_countries_to_db(countries_data)
    print("Countries have been inserted into the database.")


# Create a cursor object using the connection
cur = conn.cursor()

# Execute the SQL query
cur.execute("SELECT DISTINCT ON (name) * FROM countries ORDER BY name;")

# Fetch the results
countries = cur.fetchall()

# Process the results
for country in countries:
    print(country)  # Replace this with your processing logic
    
# Close the database connection
conn.close()


