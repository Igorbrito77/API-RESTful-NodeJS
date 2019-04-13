drop database if exists soccerleague;
create database soccerleague;

\c soccerleague;


create table teams_tb(
    id serial primary key,
    name varchar,
    city varchar,
    qtt_titles integer
);

insert into teams_tb (name, city, qtt_titles) values ('Vem Tranquilo FC', 'Rio de Janeiro', 3);
insert into teams_tb (name, city, qtt_titles) values ('Low Land FC', 'Nova Iguaçu', 1);
insert into teams_tb (name, city, qtt_titles) values ('Bangu 1 FC', 'Bangu', 5);