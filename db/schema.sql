-- creates database, uses database, sets up table to accept values

DROP DATABASE IF EXISTS recyclethis_db;
CREATE DATABASE recyclethis_db;
USE recyclethis_db;

CREATE TABLE materials (
	id INT(11) NOT NULL AUTO_INCREMENT,
	nums INT(11) NOT NULL,
	type VARCHAR(250) NOT NULL DEFAULT "unknown",
    description VARCHAR(500) NOT NULL, 
    image VARCHAR(250) DEFAULT NULL, 
	materialID INT(11) NOT NULL, 
	PRIMARY KEY (id)
);
	
SELECT * FROM materials; 