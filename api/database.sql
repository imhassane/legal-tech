CREATE TYPE permission AS ENUM(
    'SUPREME', 'WRITE_ALL_POSTS',
    'WRITE_BLOG_POST', 'WRITE_REVUE',
    'WRITE_PAGE', 'WRITE_DOMAIN',
    'WRITE_PRESS', 'WRITE_FOREIGN_POSTS',
    'WRITE_NEWS', 'DELETE_ALL_POSTS',
    'DELETE_BLOG_POST', 'DELETE_REVUE',
    'DELETE_PAGE', 'DELETE_DOMAIN', 'DELETE_PRESS', 'DELETE_FOREIGN_POSTS', 'DELETE_NEWS',
    'UPDATE_ALL_POSTS', 'UPDATE_BLOG_POST',
    'UPDATE_REVUE', 'UPDATE_PAGE', 'UPDATE_DOMAIN', 'UPDATE_PRESS', 'UPDATE_FOREIGN_POSTS', 'UPDATE_NEWS',
    'APPROVE_MEMBER', 'BLOCK_MEMBER_TEMPORARILY', 'BLOCK_MEMBER_FOREVER', 'DELETE_MEMBER'
    );

CREATE TYPE user_type AS ENUM ('SUPERUSER', 'ADMIN', 'LAWYER', 'INTERN', 'DEV');

CREATE TYPE credential_status AS ENUM (
    'PENDING',
    'APPROVED',
    'VALIDATED',
    'BLOCKED_TEMPORARILY',
    'BLOCKED_FOREVER',
    'DELETED');

create table t_credentials_cre
(
	cre_id serial
		constraint t_credentials_cre_pk
			primary key,
	cre_email varchar(50) not null,
	cre_password text not null,
	cre_status credential_status,
	cre_inserted_at timestamp default now() not null,
	cre_updated_at timestamp default now() not null
);

create unique index t_credentials_cre_cre_email_uindex
	on t_credentials_cre (cre_email);

create table t_member_mem
(
	mem_id serial
		constraint t_member_mem_pk
			primary key,
	mem_first_name varchar(30) not null,
	mem_last_name varchar(30) not null,
	mem_avatar text not null,
	mem_type user_type default 'LAWYER' not null,
	mem_description text default 'aucune description' not null,
	cre_id int not null
		constraint t_member_mem_t_credentials_cre_cre_id_fk
			references t_credentials_cre
				on delete restrict
);

create table tj_credentials_permission
(
	cre_id int not null
		constraint tj_credentials_permission_t_credentials_cre_cre_id_fk
			references t_credentials_cre
				on delete restrict,
	permission permission default 'WRITE_BLOG_POST' not null,
	constraint tj_credentials_permission_pk
		primary key (cre_id, permission)
);

create table t_lawyer_info_lin
(
	cre_id int not null
		constraint t_lawyer_info_lin_t_credentials_cre_cre_id_fk
			references t_credentials_cre
				on delete restrict,
	lin_prefecture varchar(40) not null,
	lin_sermon_date timestamp default now() not null
);

create table t_domain_dom
(
	dom_id serial
		constraint t_domain_dom_pk
			primary key,
	dom_name varchar(50) not null,
	dom_description varchar(250),
	dom_inserted_at timestamp default now() not null,
	dom_updated_at timestamp default now() not null,
	art_id int default 1 not null
);

create unique index t_domain_dom_dom_name_uindex
	on t_domain_dom (dom_name);

create table tj_domain_lawyer
(
	dom_id int not null
		constraint tj_domain_lawyer_t_domain_dom_dom_id_fk
			references t_domain_dom
				on delete restrict,
	cre_id int not null
		constraint tj_domain_lawyer_t_credentials_cre_cre_id_fk
			references t_credentials_cre,
	constraint tj_domain_lawyer_pk
		unique (dom_id, cre_id)
);

create type lawyer_domain_type as enum ('MAIN', 'SKILL');
alter table tj_domain_lawyer
	add type lawyer_domain_type default 'SKILL' not null;

create type education_type as enum ('CEPE', 'BEPC', 'BACCALAUREAT', 'LICENCE', 'MASTER_1', 'MASTER_2', 'DOCTORAT', 'FORMATION');
create table t_education_edu
(
	edu_id serial
		constraint t_education_edu_pk
			primary key,
	edu_name varchar(50) not null,
	edu_type education_type default 'LICENCE' not null,
	edu_year int default 2020 not null,
	edu_inserted_at timestamp default now() not null,
	edu_updated_at timestamp default now() not null,
	cre_id int not null
		constraint t_education_edu_t_credentials_cre_cre_id_fk
			references t_credentials_cre
				on delete restrict
);

create table t_contact_con
(
	con_id serial
		constraint t_contact_con_pk
			primary key,
	con_email varchar(100) not null,
	con_telephone char(9) not null,
	con_address varchar(250),
	con_facebook varchar(250),
	con_twitter varchar(250),
	con_instagram varchar(250),
	con_webiste varchar(250),
	cre_id int
		constraint t_contact_con_t_credentials_cre_cre_id_fk
			references t_credentials_cre,
	company_id int
);

create unique index t_contact_con_con_email_uindex
	on t_contact_con (con_email);

alter table t_contact_con rename column con_webiste to con_website;

create table t_company_com
(
	com_id serial
		constraint t_company_com_pk
			primary key,
	com_name varchar(100) not null,
	com_prefecture varchar(50) default 'Conakry' not null,
	com_description text default 'Aucune description' not null,
	com_inserted_at timestamp default now() not null,
	com_updated_at timestamp default now(),
	com_created_at date not null
);

create table tj_member_company
(
	com_id int not null
		constraint tj_member_company_t_company_com_com_id_fk
			references t_company_com
				on delete restrict,
	cre_id int not null
		constraint tj_member_company_t_credentials_cre_cre_id_fk
			references t_credentials_cre
				on delete restrict,
	entry_date date not null,
	end_date date,
	constraint tj_member_company_pk
		primary key (com_id, cre_id)
);

alter type permission add value 'ADD_DOMAIN';
alter type permission add value 'ADD_COMPANY'
alter type permission add value 'UPDATE_COMPANY';
alter type permission add value 'DELETE_COMPANY';
alter type permission add value 'ADD_CONTACT';
alter type permission add value 'DELETE_CONTACT';
alter type permission add value 'UPDATE_CONTACT';

alter table t_company_com
	add com_identification varchar(30) not null;

create unique index t_company_com_com_identification_uindex
	on t_company_com (com_identification);

alter table tj_member_company
	add status varchar(20) default 'Avocat' not null;

create type article_type as enum ('BLOG', 'REVUE', 'PAGE',
    'DOMAIN', 'ACTU',
    'PRESS', 'FOREIGN');

create type article_state as enum ('DRAFT', 'PENDING', 'DELETED', 'APPROVED');

create table t_article_art
(
	art_id serial
		constraint t_article_art_pk
			primary key,
	art_title varchar(200) not null,
	art_slug text not null,
	art_content text default 'Aucun contenu' not null,
	art_type article_type default 'BLOG' not null,
	art_state article_state default 'PENDING' not null,
	art_views int default 0 not null,
	art_reading_time int default 0 not null,
	art_extract varchar(100),
	art_cover text,
	cre_id int not null
		constraint t_article_art_t_credentials_cre_cre_id_fk
			references t_credentials_cre,
	art_approved_by int
		constraint t_article_art_t_credentials_cre_cre_id_fk_2
			references t_credentials_cre,
	art_created_at timestamp default now() not null,
	art_updated_at timestamp default now() not null,
	art_likes int default 0 not null;
);

create table tj_article_likes
(
	art_id int not null
		constraint tj_article_likes_t_article_art_art_id_fk
			references t_article_art,
	ip_address varchar(50) not null
);

