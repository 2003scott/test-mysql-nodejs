create database if not exists testjs;

use testjs;

create table categoria(
	codcat int primary key not null auto_increment,
    nomcat varchar(45) default null,
	estacat bit not null
);

describe categoria;
select * from categoria;

insert into categoria (nomcat,estacat) values ("Bebidas",1)