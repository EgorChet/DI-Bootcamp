CREATE TABLE students (
	id serial PRIMARY KEY,
	first_name varchar(20) NOT NULL,
	last_name varchar(30) NOT NULL,
	birth_date date NOT NULL
)

INSERT INTO students (first_name, last_name, birth_date) VALUES 
('Marc', 'Benichou', '1998-02-11'),
('Yoan', 'Cohen', '2010-03-12'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

-- Fetch all of the data from the table.
SELECT * FROM students

-- Fetch all of the students first_names and last_names.
SELECT first_name, last_name FROM students 


-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
SELECT first_name, last_name FROM students 
WHERE id = 2

-- Fetch the student whose last_name is Benichou AND first_name is Marc.
SELECT first_name, last_name FROM students
WHERE first_name = 'Marc' AND last_name = 'Benichou'

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
SELECT first_name, last_name FROM students
WHERE first_name = 'Marc' OR last_name = 'Benichou'

-- Fetch the students whose first_names contain the letter a.
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a%';

-- Fetch the students whose first_names start with the letter a.
SELECT first_name, last_name FROM students
WHERE first_name ILIKE 'a%';

-- Fetch the students whose first_names end with the letter a.
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a_';

-- Fetch the students whose id’s are equal to 1 AND 3 .
SELECT first_name, last_name FROM students
WHERE id = 1 or id = 3


-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT * FROM students
WHERE birth_date >= '2000-01-01';