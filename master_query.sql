create database cafedev;
use cafedev;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

insert into categories (name) values ('Home');
insert into categories (name) values ('Where to go');
insert into categories (name) values ('Place to stay');
insert into categories (name) values ('Latest');
insert into categories (name) values ('Plan your trip');

select * from categories;

update categories set name="home" where id=1;
update categories set name="menu" where id=2;
update categories set name="order" where id=3;
update categories set name="blog" where id=4;
update categories set name="Q&A" where id=5;

update meal_price set product_price=50000 where id=1;
update meal_price set product_price=50000 where id=2;
update meal_price set meal_price=50000 where id=3;
update meal_price set meal_price=50000 where id=4;

update meal_detail set weekday_id = 1 where id=1;


Rename table navbar_items to categories;



select * from users;
select * from user_authority;
select * from meal_price;
select * from meal_type;
select * from meal_category;

select * from meal_detail 
dt join weekday wd;

select * from meal_detail  group by meal_category_id;


select * from meal_detail md where md.meal_of_day_id = 2;
select * from weekday;


alter table meal_price drop column meal_id;
alter table meal_price drop column product_price;
alter table meal_detail drop column week_day_id;

drop table meal_detail;
drop table weekday;
drop table meal_price;
drop table meal_category;
drop table meal_type;

insert into day_of_week (name) values ('T2');
insert into day_of_week (name) values ('T3');
insert into day_of_week (name) values ('T4');
insert into day_of_week (name) values ('T5');
insert into day_of_week (name) values ('T6');

	
    insert into meal_of_day (name) values ('breakfast');
	insert into meal_of_day (name) values ('lunch');
    insert into meal_of_day (name) values ('dinner');
	
    insert into meal_price (meal_price, product_price) values (80000, 45000);
	insert into meal_price (meal_price, product_price) values (100000, 40000);
    insert into meal_price (meal_price, product_price) values (45000, 35888);
    insert into meal_price (meal_price, product_price) values (55000, 50000);

	insert into meal_type (name) values ('vegetable');
	insert into meal_type (name) values ('meat');
    
    insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 22, 'test others', 1, 1, 1, 1);
	insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 40, 'test others', 1, 2, 2, 2);
    insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 22, 'test others', 1, 1, 1, 3);
	insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 15, 'test others', 1, 3, 2, 4);
    insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 22, 'test others', 1, 1, 2, 5);
	
    insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 20, 'test others', 2, 1, 1, 1);
	insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 12, 'test others', 2, 2, 2, 2);
    insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 22, 'test others', 2, 1, 1, 3);
	insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 27, 'test others', 2, 3, 2, 4);
    insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 40, 'test others', 2, 2, 1, 5);
    
    insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 22, 'test others', 3, 3, 2, 1);
	insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 12, 'test others', 3, 2, 2, 2);
    insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 12, 'test others', 3, 3, 2, 3);
	insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 22, 'test others', 3, 1, 1, 4);
    insert into meal_detail (description, ingredent, kcal_measurement, others, meal_of_day_id, meal_price_id, meal_type_id, day_of_week_id) values ('test description', 'test ingredent', 42, 'test others', 3, 1, 1, 5);