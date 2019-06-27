-- creates database, uses database, sets up table to accept values

DROP DATABASE IF EXISTS recycleThis_db;
CREATE DATABASE recycleThis_db;
USE recycleThis_db;

CREATE TABLE materials (
	id INT(11) NOT NULL AUTO_INCREMENT,
	type VARCHAR(250) NOT NULL,
    description VARCHAR(500) NOT NULL, 
    image VARCHAR(250) DEFAULT NULL, 
	materialID INT(11) NOT NULL, 
	PRIMARY KEY (id)
);
	
