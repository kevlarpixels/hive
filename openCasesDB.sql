CREATE DATABASE case_db;

USE case_db;

CREATE TABLE openCases (
id INTEGER(11)	AUTO_INCREMENT NOT NULL, 
address VARCHAR(50) NOT NULL,
case_number VARCHAR(30),
violation VARCHAR(50),
call_type VARCHAR(50),
created_date DATE,
status VARCHAR(30),
PRIMARY KEY(id)
);

SELECT * FROM openCases; 