CREATE DATABASE users;
use users;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('free', 'premium', 'admin') NOT NULL DEFAULT 'free',
  registration_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS lists (
    id INT AUTO_INCREMENT,
    user_id INT,
    list_title VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id, list_title)
);

CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT,
    movie_name VARCHAR(255) NOT NULL UNIQUE,
    poster TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS contains (
    id INT AUTO_INCREMENT,
    list_id INT,
    movie_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(list_id) REFERENCES lists(id) ON DELETE CASCADE,
    FOREIGN KEY(movie_id) REFERENCES movies(id) ON DELETE CASCADE,
    UNIQUE(list_id, movie_id)
);
