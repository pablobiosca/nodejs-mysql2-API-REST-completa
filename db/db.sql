drop database if exists companydb;
create database companydb charset utf8mb4;
use companydb;

create table employee (
    id int not null auto_increment,
    name varchar(50) DEFAULT NULL,
    salary INT DEFAULT NULL,
    primary key(id) 
)

INSERT INTO employee VALUES 
    (1,"peter",450)
    (2,"susan",1000)
    (3,"mike",2000)
    (4,"jhoni",1800)
    (5,"liza",2400)