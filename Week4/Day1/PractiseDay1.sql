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