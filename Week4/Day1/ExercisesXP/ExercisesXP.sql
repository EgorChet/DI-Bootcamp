-- All the items.
SELECT * FROM items

-- All the items with a price above 80 (80 not included).
SELECT * FROM items
WHERE price > 80;

-- All the items with a price below 300. (300 included)
SELECT * FROM items
WHERE price <= 300;

-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- Empty as there are no people with this surname!
SELECT * FROM customers
WHERE last_name = 'Smith'

-- All customers whose last name is ‘Jones’.
SELECT * FROM customers
WHERE last_name = 'Jones'

-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers
WHERE first_name = 'Scott'



-- CREATE TABLE items (
--     item_id serial PRIMARY KEY,
--     name varchar(100),
--     price int
-- );
-- Drop Table customers;
-- CREATE TABLE customers (
--     customer_id serial PRIMARY KEY,
--     first_name varchar(50),
--     last_name varchar(50)
-- )

-- INSERT INTO items (name, price)
-- VALUES ('Small Desk', 100),
--        ('Large Desk', 300),
--        ('Fan', 80);

-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Greg', 'Jones'),
--        ('Sandra', 'Jones'),
--        ('Scott', 'Scott'),
--        ('Trevor', 'Green'),
--        ('Melanie', 'Johnson')

