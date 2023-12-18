-- Exercise 1 : Items And Customers (Use SQL to get the following from the database)

-- All items, ordered by price (lowest to highest).
SELECT * FROM items
ORDER BY price ASC;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name FROM customers 
ORDER BY first_name ASC
LIMIT 3;

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers
ORDER BY last_name DESC;


-- Exercise 2 : Dvdrental Database

-- In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT first_name || ' ' || last_name AS full_name FROM customer

-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date from customer

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * FROM customer
ORDER BY first_name DESC

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
-- SELECT * FROM film

SELECT film_id, title, description, release_year, rental_rate FROM film
ORDER BY rental_rate ASC

-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
-- SELECT * FROM address

SELECT address, phone FROM address
WHERE district = 'Texas'

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.

SELECT * FROM film
WHERE film_id
IN (15,150)


-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
-- Check if "Schindler's List" exists and retrieve its details.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Schindler''s List';

-- Check if "The Shawshank Redemption" exists and retrieve its details.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'The Shawshank Redemption';

-- Check if "Airport Pollock" exists and retrieve its details.
-- I don't know any movies from these list =)
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Airport Pollock';

-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE LEFT(title, 2) = 'Sc'

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title 
LIKE '%Shawshank%'

-- Write a query which will find the 10 cheapest movies.
SELECT title, rental_rate FROM film
ORDER BY rental_rate ASC
LIMIT 10

-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT title, rental_rate
FROM film
ORDER BY rental_rate ASC
OFFSET 10
FETCH NEXT 10 ROWS ONLY

-- Write a query which will join the data in the customer table and the payment table. 
-- You want to get the first name and last name from the customer table
-- as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.film_id IS NULL;

-- Write a query to find which city is in which country.
SELECT city.city, country.country
FROM city, country
WHERE city.country_id = country.country_id

-- Bonus
-- You want to be able to see how your sellers have been doing?
-- Write a query to get the customer’s id, names (first and last),
-- the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, s.staff_id
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
JOIN staff s ON p.staff_id = s.staff_id
ORDER BY s.staff_id;


