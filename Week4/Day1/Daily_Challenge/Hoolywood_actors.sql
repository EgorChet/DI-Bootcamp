CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt', 'Damon', '1970-10-08', 5),
      ('George', 'Clooney', '1961-05-06', 2);

-- Adding two female actors
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Meryl', 'Streep', '1949-06-22', 3);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Natalie', 'Portman', '1981-06-09', 1);

-- Adding three more actors in one query
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
('Leonardo', 'DiCaprio', '1974-11-11', 1),
('Brad', 'Pitt', '1963-12-18', 1),
('Tom', 'Hanks', '1956-07-09', 2);

-- Retrieving all records
SELECT * FROM actors;

-- Retrieve the first 4 actors
SELECT * FROM actors
LIMIT 4;

-- Retrieve the first 4 actors ordered in descending order by the last_name
SELECT * FROM actors
ORDER BY last_name DESC
LIMIT 4;

-- Retrieve the actors that have the letter 'e' in their first_name
SELECT * FROM actors
WHERE first_name LIKE '%e%';

-- Retrieve the actors that got at least 5 oscars
SELECT * FROM actors
WHERE number_oscars >= 5;

-- In the table actors, write the following commands:
-- Update the first name of Matt Damon to "Maty"
UPDATE actors
SET first_name='Maty'
WHERE first_name='Matt' AND last_name='Damon'

-- Update the number of oscars of George Clooney to 4, and return the updated record
UPDATE actors
SET number_oscars=4
WHERE first_name='George' AND last_name='Clooney'

-- Rename the 'age' column by 'birthdate'
ALTER TABLE actors
RENAME COLUMN age TO birthdate;

-- Delete one actor and return it
DELETE FROM actors
WHERE actor_id = (SELECT actor_id FROM actors ORDER BY random() LIMIT 1)
RETURNING *;

	
SELECT * FROM actors 
ORDER BY actor_id


-- DAILY_CHALLENGE
SELECT COUNT(*) FROM actors;
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Brad', '', NULL, 2);


