CREATE DATABASE Contacts_App;

use Contacts_App;

CREATE TABLE `user` (
  `name` VARCHAR(60) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contact_name` VARCHAR(60) NOT NULL,
  `contact_description` VARCHAR(45) NULL,
  `contact_phone` VARCHAR(45) NOT NULL,
  `created_at` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT fk_user FOREIGN KEY(id) REFERENCES user(id)
);

describe contacts;

describe user;