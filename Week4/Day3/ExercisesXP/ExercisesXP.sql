-- Exercise 1: DVD Rental

-- Get a list of all the languages, from the language table.
SELECT name from language

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT
    f.title AS film_title,
    f.description AS film_description,
    l.name AS language_name
FROM
    film f
INNER JOIN
    language l ON f.language_id = l.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT
    f.title AS film_title,
    f.description AS film_description,
    COALESCE(l.name, 'No Language') AS language_name
FROM
    language l
LEFT JOIN
    film f ON l.language_id = f.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- DROP TABLE new_film
CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR (50)
);

INSERT INTO new_film (name)
VALUES ('Schindler''s List'), ('Shawshank Redemption');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- DROP TABLE customer_review
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(50),
    score SMALLINT CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES 
(1, 1, 'Schindler''s List', 9, 'A WorldWar2 movie about Holocaust.', CURRENT_TIMESTAMP),
(2, 1, 'Shawshank Redemption', 10, 'A compelling story of hope and perseverance.', CURRENT_TIMESTAMP);



-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- It was also delited from the customer_review table!
SELECT * FROM new_film
DELETE FROM new_film 
WHERE id = 2;
SELECT * FROM customer_review

-- Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- Update films with ID from 100 to 200 to language_id 3
UPDATE film
SET language_id = 3
WHERE film_id 
BETWEEN 100 AND 200;

-- Update films with ID from 300 to 500 to language_id 6
UPDATE film
SET language_id = 6
WHERE film_id 
BETWEEN 300 AND 500;

-- Update films with ID from 800 to 1000 to language_id 4
UPDATE film
SET language_id = 4
WHERE film_id 
BETWEEN 800 AND 1000;

SELECT title, film_id, language_id FROM film
ORDER BY film_id

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- The foreign key constraint customer_address_id_fkey ensures that You cannot insert a record into the customer table with an address_id that does not correspond to any existing record in the address table.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- It will not affect anything despite being deleted it self because there are no tables referencing it.
SELECT * FROM customer_review
DROP TABLE customer_review
SELECT * FROM new_film

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT * from rental

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

SELECT * FROM rental
WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

SELECT f.title, f.rental_rate
FROM film AS f
INNER JOIN inventory AS i ON f.film_id = i.film_id
INNER JOIN rental AS r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;



-- Your friend is at the store, and decides to rent a movie. 
-- He knows he wants to see 4 movies, but he can’t remember their names.
-- Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT actor_id FROM actor WHERE (first_name='Penelope') AND (last_name='Monroe') -- Her Actor ID 120
-- SELECT film_id FROM film_actor WHERE (actor_id='120')
-- SELECT ARRAY_AGG(film_id) AS film_ids FROM film_actor WHERE actor_id = '120';
-- SELECT title, film_id, fulltext FROM film WHERE film_id IN (SELECT film_id FROM film_actor WHERE actor_id = ('120'));
-- SELECT title, film_id, description

--VERSION SIMILAR TO SOLUTION VIDEO
-- FROM film
-- WHERE film_id IN (
--     SELECT film_id 
--     FROM film_actor 
--     WHERE actor_id IN (
--         SELECT actor_id 
--         FROM actor 
--         WHERE first_name = 'Penelope' AND last_name = 'Monroe'
--     )
-- ) AND fulltext @@ to_tsquery('sumo');


-- MY VERSION without using tsquery 
-- SELECT title, film_id, description
-- FROM film
-- WHERE film_id IN (
--     SELECT film_id 
--     FROM film_actor 
--     WHERE actor_id IN (
--         SELECT actor_id 
--         FROM actor 
--         WHERE first_name = 'Penelope' AND last_name = 'Monroe'
--     )
-- ) AND (
--     LOWER(description) LIKE '%sumo%' OR 
--     LOWER(description) LIKE '%wrestler%' OR 
--     LOWER(description) LIKE '%sumo wrestler%'
-- );


--BEST VERSION THAT I THOUGHT OF AFTER DOING THE FIRST TWO
SELECT title FROM film
WHERE film_id IN (
    (SELECT film_id FROM film
    WHERE LOWER(description) LIKE '%sumo%' OR 
          LOWER(description) LIKE '%wrestler%' OR 
          LOWER(description) LIKE '%sumo wrestler%')
    INTERSECT
    (SELECT film_id FROM film_actor WHERE actor_id = '120')
);

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title, length, rating, description from film 
WHERE length < 60
AND rating = 'R'
AND LOWER(description) LIKE '%documentary%'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- Step 1: Find Matthew Mahan's Customer ID (323)
SELECT customer_id
FROM customer
WHERE first_name = 'Matthew' AND last_name = 'Mahan';

-- Step 2: Find Rental IDs for Matthew Mahan's Rentals (7275. 7937, 8790)
SELECT rental_id
FROM rental
WHERE customer_id = 323
AND return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- Step 3: Find Payment Details for These Rentals (7937)
SELECT rental_id
FROM payment
WHERE customer_id = 323
AND amount > 4.00
AND rental_id IN (7275, 7937, 8790);

-- Step 4: Find the Inventory IDs from the Rental IDs (3944)
SELECT inventory_id
FROM rental
WHERE rental_id = 7937;

-- Step 5: Find the Film IDs from the Inventory IDs (859)
SELECT film_id
FROM inventory
WHERE inventory_id = 3944;

-- Step 6: Get the Film Titles from the Film IDs
SELECT title
FROM film
WHERE film_id = 859;

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE c.first_name = 'Matthew' 
AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'


-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT f.title, f.description, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE (LOWER(f.title) LIKE '%boat%' OR LOWER(f.description) LIKE '%boat%')
AND c.first_name = 'Matthew' AND c.last_name = 'Mahan'
ORDER BY f.replacement_cost DESC;

-- Answer it has to be one of those two films "Stone Fire" or "Money Harold"
-- We need to ask Matthew to look at the description and make the final choice.
