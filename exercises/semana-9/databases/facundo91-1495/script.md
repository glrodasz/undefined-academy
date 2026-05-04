## Script SQL para crear las tablas

```sql
-- Table User
CREATE TABLE User (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(50),
    email varchar(50),
    password varchar(50)
);

-- Table Article
CREATE TABLE Article (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(100),
    content text,
    publication_date date,
    user_id int,
    KEY user_id_xid (user_id)
);

-- Table Comment
CREATE TABLE Comment (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    content text,
    publication_date date,
    article_id int,
    user_id int,
    KEY article_id_xid (article_id),
    KEY user_id_xid (user_id)
);