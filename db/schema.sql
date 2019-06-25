-- creates database, uses database, sets up table to accept values

CREATE DATABASE recycleThis_db;
USE recycleThis_db;

CREATE TABLE materials
(
	id int NOT NULL AUTO_INCREMENT,
	type VARCHAR NOT NULL,
    image VARCHAR,
	material_id INT NOT NULL, 
	PRIMARY KEY (id)
);
