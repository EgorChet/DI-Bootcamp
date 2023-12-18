-- Day3 EGOR after brake

--functions

create or replace function function_name(param_list)
	returns return_type
	language plpsql
as
$$
declare
	-- variable names
begin
	--code / logic 
end
$$

create function get_film_count(len_from int, len_to int)
	returns int
	language plpgsql;
as
$$
declare
	film_count integer
begin
	select count(1)
	from film
	where length between len_from and len_to
	
	return film_count
end;
$$

-- Day3 ZIV 

-- DROP TABLE products;

CREATE TABLE products (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 )  NOT NULL,
	price integer NOT NULL
);

INSERT INTO 
    products (price, name)
VALUES
    (700, 'iPad'),
    (800,'iPhone'),
    (600,'iWatch'),
    (900,'iCar');

select * from products;

DROP TABLE products_desc;

CREATE TABLE products_desc (
	id serial PRIMARY KEY,
	description VARCHAR (500),
	product_id integer NOT NULL,
	CONSTRAINT fk_product
		FOREIGN KEY (product_id)
			REFERENCES products(id)
);

INSERT INTO 
    products_desc (description, product_id)
VALUES
	('Amazing iPad' ,5),
	('Great iPhone' ,6),
	('Best iWatch' ,7),
	('Fastest car ever iCar' ,7);
	
select * from products_desc 


delete from products where id = 5;

-- FOREIGN KEY

-- ON UPDATE - ON DELETE
-- SET NULL
-- SET DEFAULT
-- RESTRICT
-- NO ACTION
-- CASCADE

ALTER TABLE products_desc
drop CONSTRAINT fk_product;

ALTER TABLE products_desc
drop CONSTRAINT fk_product;

ALTER TABLE products_desc
ADD CONSTRAINT fk_product
		FOREIGN KEY (product_id)
			REFERENCES products(id)
			    ON DELETE SET DEFAULT;
				
ALTER TABLE products_desc 
ALTER product_id
SET DEFAULT 6


-- TABLE RELATION
-- One-to-One Relationship:

-- Let's say we have two tables, `users` and `user_profiles`, where each user has exactly one profile.


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    -- Other user information...
);

CREATE TABLE user_profiles (
    profile_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    -- Other profile information...
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


-- Here, the `user_profiles` table has a foreign key `user_id` referencing the `users` table, establishing a one-to-one relationship.

--  One-to-Many Relationship:

-- Let's say we have a scenario where one user can have multiple posts.


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    -- Other user information...
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    post_content TEXT,
    -- Other post information...
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


-- In this case, the `posts` table has a foreign key `user_id` referencing the `users` table. 
-- This allows one user to have multiple posts, establishing a one-to-many relationship.

-- Many-to-Many Relationship:

-- Consider a scenario where multiple students can enroll in multiple courses.


CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    -- Other student information...
);

CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL,
    -- Other course information...
);

CREATE TABLE student_course_enrollment (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);


-- In this case, the `student_course_enrollment` table serves as a junction table that holds pairs of `student_id` and `course_id`, 
-- allowing many students to enroll in many courses. Each entry in this table represents a relationship between a student and a course.

-- These examples demonstrate how you can establish different types of relationships 
-- (one-to-one, one-to-many, many-to-many) using SQL in a PostgreSQL database.