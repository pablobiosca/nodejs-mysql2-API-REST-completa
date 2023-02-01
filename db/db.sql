drop database if exists companydb;
create database companydb charset utf8mb4;
use companydb;

create table employee (
    id int not null auto_increment,
    name varchar(50) DEFAULT NULL,
    salary INT DEFAULT NULL,
    primary key(id) 
)