create database if not exists testjs;
drop database testjs;
use testjs;

create table categoria(
	codcat int primary key not null auto_increment,
    nomcat varchar(45) default null,
	estacat bit not null
);

describe categoria;
select * from categoria;

insert into categoria (nomcat,estacat) values ("Bebidas",1);
insert into categoria (nomcat,estacat) values ("Libros",1);

select * from categoria where codcat= 1;
delete from categoria where codcat= 2;

drop table producto;

create table producto(
	codpro int primary key not null auto_increment,
    nompro varchar(45) default null,
    prepro float not null,
    cantpro int not null,
    descpro text(255) default null,
    estapro bit not null
);

describe producto;

insert into producto (nompro,prepro,cantpro,descpro,estapro) values ("cuates",1.00,100,"cuates naturales picantes",1);
insert into producto (nompro,prepro,cantpro,descpro,estapro) values ("papita lay",1.50,100,"pipa que viene 5 papitas y lo demas es aire",1);

select * from producto;
