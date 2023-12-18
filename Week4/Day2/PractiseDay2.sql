-- INFO FROM DAY2

-- CREATE TABLE syntax
-- CREATE TABLE [IF NOT EXISTS] table_name (
--    column1 datatype(length) column_contraint,
--    column2 datatype(length) column_contraint,
--    column3 datatype(length) column_contraint,
--    table_constraints
-- );
​
-- Constraints
-- NOT NULL – ensures that values in a column cannot be NULL.
-- UNIQUE – ensures the values in a column unique .
-- PRIMARY KEY – a primary key column uniquely identify rows in a table. A table can have one and only one primary key. 
-- FOREIGN KEY – ensures values in a column or a group of columns from a table exists in a column or group of columns in another table. 
​
CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);
​
​
CREATE TABLE products (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 )  NOT NULL,
	price integer NOT NULL,
	description VARCHAR ( 1000 )
);
​
-- INSERT statement
-- INSERT INTO table_name(column1, column2, …)
-- VALUES (value1, value2, …);
​
-- Inserting a single row into a table
INSERT INTO products (price, name)
VALUES(700, 'iPad');
​
-- Inserting multiple rows example
INSERT INTO 
    products (price, name)
VALUES
    (700, 'iPad');
    (800,'iPhone'),
    (600,'iWatch'),
    (900,'iCar');
​
-- SELECT statement syntax
-- SELECT
--    select_list
-- FROM
--    table_name;
​
-- SELECT nextval('products_id_seq');
​
SELECT * FROM products;
​
SELECT price, name FROM products;
​
SELECT id, price, name, description FROM products;
​
​
-- column aliases
​
SELECT price || ' ' || name as name_and_price FROM products;
​
SELECT price  as product_price FROM products;
​
​
-- ORDER BY clause
SELECT * FROM products ORDER BY name ASC; -- ascending order:
​
SELECT * FROM products ORDER BY name DESC; -- descending order
​
​
​
-- WHERE clause
-- SELECT select_list
-- FROM table_name
-- WHERE condition
-- ORDER BY sort_expression
​
-- sud query
select * from products where id in (
	SELECT id FROM products WHERE name LIKE '%h%'
)
​
-- Operator	Description
-- =			Equal
-- >			Greater than
-- <			Less than
-- >=			Greater than or equal
-- <=			Less than or equal
-- <> or !=		Not equal
-- AND			Logical operator AND
-- OR			Logical operator OR
-- IN			Return true if a value matches any value in a list
-- BETWEEN		Return true if a value is between a range of values
-- LIKE			Return true if a value matches a pattern
-- IS NULL		Return true if a value is NULL
-- NOT			Negate the result of other operators
​
SELECT * FROM products WHERE id in (1 ,3);
SELECT * FROM products WHERE name LIKE 'iP%';
SELECT * FROM products WHERE name LIKE 'iP%' AND price <> 600;
SELECT * FROM products WHERE description IS NOT NULL
​
-- UPDATE statement
-- UPDATE table_name
-- SET column1 = value1,
--     column2 = value2,
--     ...
-- WHERE condition;
UPDATE products SET description  = 'best phone ever' WHERE id = 2;
UPDATE products SET name = 'iPhone13', price=1000 WHERE id = 2;
​
-- DELETE statement
-- DELETE FROM table_name
-- WHERE condition;
​
DELETE FROM products WHERE id = 2;
​
DELETE FROM products
​
truncate products;
​
DROP TABLE products;
​
CREATE TABLE products (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 )  NOT NULL,
	price integer NOT NULL
);
​
ALTER TABLE products ADD COLUMN description varchar(1000);
​
SELECT * FROM products;
​
-- Aggregate functions
-- AVG
-- COUNT
-- MAX / MIN
-- SUM
​
select count(1) from products
select avg(price) from products
​
​
-- LENGTH
​
-- select length(name), name, price from products where length(name) > 4
​
-- select * from city;
​
-- join
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
​
select * from products
​
​
CREATE TABLE products_desc (
	id serial PRIMARY KEY,
	description VARCHAR (500),
	product_id integer NOT NULL
);
​
INSERT INTO 
    products_desc (description, product_id)
VALUES
	('Amazing iPad' ,10),
	('Great iPhone' ,11),
('Best iWatch' ,12),
('Fastest car ever iCar' ,13)
​
select * from products_desc;
​
​
​
select products.id, products.name, products.price, products_desc.description from products
inner join products_desc
on products.id = products_desc.product_id;
​
select products.id, products.name, products.price, products_desc.description 
from products, products_desc
where products.id = products_desc.product_id
inner join desc_title
on desc_title.id = products_desc.desc_id
​
​
select city.city, country.country from city
inner join country
on city.country_id = country.country_id;
​
​
select products.id, products.name, products.price, products_desc.description from products
left join products_desc
on products.id = products_desc.product_id;
​
select products.id, products.name, products.price, products_desc.description from products
right join products_desc
on products.id = products_desc.product_id;
​
select products.id, products.name, products.price, products_desc.description from products
full join products_desc
on products.id = products_desc.product_id;
​
​
select 
	customer.first_name, 
	customer.last_name, 
	customer.email,
	address.address, 
	address.district ,
	city.city,
	country.country
from customer
inner join address
on customer.address_id = address.address_id
inner join city
on address.city_id = city.city_id
inner join country
on city.country_id = country.country_id
​
​
​
-- drop table products_desc;
​
CREATE TABLE products_desc (
	id serial PRIMARY KEY,
	description VARCHAR (500),
	product_id integer NOT NULL,
	CONSTRAINT fk_product
		FOREIGN KEY (product_id)
			REFERENCES products(id)
);
​
select * from products 
​
INSERT INTO 
    products_desc (description, product_id)
VALUES
	('Amazing iPad' ,11),
	('Great iPhone' ,21),
	('Best iWatch' ,31),
	('Fastest car ever iCar' ,41);

-- MY PRACTISE
-- DROP TABLE myproducts
-- DROP TABLE productsdesc

-- CREATE TABLE myproducts (
--     product_id serial PRIMARY KEY,
--     name varchar (255) NOT NULL,
--     price integer NOT NULL
-- );

-- INSERT INTO myproducts (name, price)
-- VALUES ('Ipad', 600),
--        ('IPhone15Pro', 900),
--        ('IWatch', 300),
--        ('ICar', 10000)
	   
-- CREATE TABLE productsdesc (
--     product_id serial PRIMARY KEY,
--     description varchar (500) NOT NULL,
-- );

-- INSERT INTO productsdesc (description, product_id)
-- VALUES
-- 	('Amazing Ipad',1),
-- 	('Great Iphone',2),
-- 	('Beast Iwatch',3),
-- 	('Fastest Car',4)
	
-- select * from productsdesc

-- select myproducts.id, myproducts.name, myproducts.price, productsdesc.description from myproducts
-- inner join productsdesc
-- on product_id = productsdesc.product_id

-- where product_id = productsdesc.product_id
	
-- select * from products

-- ALTER TABLE products ADD COLUMN year_of_production SMALLINT adding another column to the existing table in my database

-- SELECT price || ' ' || name name_and_price FROM products

-- DELETE FROM products WHERE id =2

-- DELETE FROM products clears the table but memory is still taken 

-- TRUNCATE TABLE products clears memory 

-- DROP TABLE products

-- INFO FROM DAY1

-- SELECT * FROM products 
-- WHERE price BETWEEN 200 AND 1000 
-- ORDER BY name, description

-- DROP TABLE products;
-- CREATE TABLE products (
--     id serial PRIMARY KEY,
--     name varchar(255) NOT NULL,
--     price integer NOT NULL,
--     description varchar(1000)
-- );

-- INSERT INTO products (description, name, price)
-- VALUES ('bla bla bla', 'Ipad', 600),
--        ('bla bla bla', 'IPhone15Pro', 900),
--        ('bla bla bla', 'IWatch', 300),
--        ('bla bla bla', 'ICar', 10000)

-- UPDATE products 
-- SET name = 'IpadAir', description = 'This is IpadAir'
-- WHERE id = 1;

-- UPDATE products 
-- SET name = 'IpadPro', description = 'This is IpadPro'
-- WHERE id = 3;

-- UPDATE products 
-- SET description = 'This is Iphone15Pro'
-- WHERE id = 2;

-- UPDATE products 
-- SET description = 'This is ICar'
-- WHERE id = 4;

-- select * from products

-- CREATE TABLE accounts (
-- 	user_id serial PRIMARY KEY,
-- 	user_name varchar(50) UNIQUE NOT NULL,
-- 	user_password varchar(50) NOT NULL,
-- 	email varchar (255) UNIQUE NOT NULL,
-- 	create_on timestamp NOT NULL DEFAULT now(),
-- 	last_login timestamp
-- )

-- CREATE TABLE myusertable (
--     id serial PRIMARY KEY,
--     email varchar(50) UNIQUE NOT NULL,
--     password varchar(50),
--     create_date timestamp DEFAULT CURRENT_TIMESTAMP
-- )


-- UNIQUE
-- NOT NULL
-- PRIMARY KEY
-- FOREIGN KEY
-- select * from myusertable