## Scripts de implementación de la base de datos para el blog dotBlog

```sql
CREATE TABLE Article (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  image_path VARCHAR(255),
  publication_date DATE,
  id_author INT,
  id_category INT,
  KEY id_author_idx (id_author),
  KEY id_category_idx (id_category)
);

CREATE TABLE Author (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE Category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password varchar(50)
);

CREATE TABLE Comment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comment TEXT,
  publication_date DATE,
  id_article INT,
  id_user INT,
  KEY id_article_idx (id_article),
  KEY id_user_idx (id_user)
);

```