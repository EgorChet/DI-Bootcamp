-- Instructions
-- You are going to practice tables relationships
-- Part I
-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.
-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

CREATE TABLE customer (
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
)
CREATE TABLE customer_profile (
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT False,
	customer_id INT REFERENCES customer(customer_id)
)

-- Insert those customers
INSERT INTO customer (first_name, last_name)
VALUES 
	('John', 'Doe'),
	('Jerome', 'Lalu'),
	('Lea', 'Rive');

-- Insert those customer profile, use subqueries
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES 
    (TRUE, (SELECT customer_id FROM customer WHERE first_name = 'John' AND last_name = 'Doe'));

INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES 
    (FALSE, (SELECT customer_id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));
	
-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
SELECT c.first_name FROM customer c
JOIN customer_profile cp ON c.customer_id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT c.first_name FROM customer c
LEFT JOIN customer_profile cp ON c.customer_id = cp.customer_id;

-- The number of customers that are not LoggedIn
SELECT COUNT(*) FROM customer c
LEFT JOIN customer_profile cp ON c.customer_id = cp.customer_id
WHERE cp.isLoggedIn IS FALSE

-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE book (
	book_id SERIAL PRIMARY KEY,
	title varchar(50) NOT NULL,
	author varchar(50) NOT NULL
);

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee
INSERT INTO book (title, author)
VALUES
	('Alice In Wonderland', 'Lewis Carroll'),
	('Harry Potter', 'J.K Rowling'),
	('To kill a mockingbird', 'Harper Lee')
SELECT * FROM book
-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age.
-- Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE student (
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	age SMALLINT CHECK (age <= 15)
);
-- Insert those student:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

INSERT INTO student (name, age)
VALUES
	('John', '12'),
	('Lera', '11'),
	('Patrick', '10'),
	('Bob', '14')
SELECT * FROM student


-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
CREATE TABLE library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);
-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES
	(
		(SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
		(SELECT student_id FROM student WHERE name = 'John'),
		'2022-02-15'
	),
	(
		(SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
		(SELECT student_id FROM student WHERE name = 'Bob'),
		'2021-03-03'
	),
	(
		(SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
		(SELECT student_id FROM student WHERE name = 'Lera'),
		'2021-05-23'
	),
	(
		(SELECT book_id FROM Book WHERE title = 'Harry Potter'),
		(SELECT student_id FROM student WHERE name = 'Bob'),
		'2021-08-12'
	);


-- Display the data
-- Select all the columns from the junction table
SELECT * FROM library;

-- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title, l.borrowed_date
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT ROUND(AVG(s.age), 2) AS average_age
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM student WHERE name = 'John';
SELECT * FROM library;

