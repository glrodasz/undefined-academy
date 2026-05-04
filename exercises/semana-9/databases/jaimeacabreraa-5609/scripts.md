# Scripts

```sql
-- Crear tabla users

CREATE TABLE `users` ( 
`id` int NOT NULL AUTO_INCREMENT, 
`username` varchar(50) NOT NULL, 
`email` varchar(100) NOT NULL, 
`password` varchar(255) NOT NULL, 
`created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP, 
PRIMARY KEY (`id`) 
)

--- Crear tabla categories 

CREATE TABLE `categories` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(50) NOT NULL,
PRIMARY KEY (`id`)
)

 --- Crear tabla posts
 
 CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `user_id` int NOT NULL,
  `category_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  KEY `category_id_idx` (`category_id`)
)

---Crear tabla comments

CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `post_idx` (`post_id`),
  KEY `user_id_idx` (`user_id`)
)





