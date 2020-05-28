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


