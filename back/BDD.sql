-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           10.10.2-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour quai_antique
CREATE DATABASE IF NOT EXISTS `quai_antique` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `quai_antique`;

-- Listage de la structure de la table quai_antique. bookings
CREATE TABLE IF NOT EXISTS `bookings` (
  `id` uuid NOT NULL,
  `nb_persons` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `allergies` varchar(255) DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `day_moment` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.bookings : ~5 rows (environ)
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` (`id`, `nb_persons`, `date`, `allergies`, `phone`, `first_name`, `last_name`, `day_moment`) VALUES
	('01aea24e-1ca8-44b6-a631-20675aae7d27', 1, '2023-05-25 12:45:00', NULL, '0102030405', 'Tamaki', 'Amajiki', 'midi'),
	('3d5c0908-ec3f-44fb-a4a1-2dff34cfff55', 15, '2023-05-26 19:30:00', NULL, '0102030405', 'Kurita', 'Ryokan', 'soir'),
	('cd384f8c-4265-4e88-b31f-43e2de729d74', 1, '2023-05-25 12:45:00', NULL, '0102030405', 'Tamaki', 'Amajiki', 'midi'),
	('aac08bc0-dead-4be1-9971-8ce5e1e23367', 15, '2023-05-26 19:30:00', NULL, '0102030405', 'Kurita', 'Ryokan', 'soir'),
	('2ea5398a-6c4e-4461-92a9-b581017c6d48', 15, '2023-05-26 19:30:00', NULL, '0102030405', 'Kurita', 'Ryokan', 'soir');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;

-- Listage de la structure de la table quai_antique. category
CREATE TABLE IF NOT EXISTS `category` (
  `id` uuid NOT NULL,
  `title` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.category : ~4 rows (environ)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`id`, `title`) VALUES
	('12c8f70b-15d8-4b32-b0ed-1b3b399a5f3c', 'Salades'),
	('6fbecd4a-b44e-49ca-8e53-575a3e42022b', 'Burgers'),
	('38ca1758-01b4-4589-bbf6-6bfc852bad29', 'Plats'),
	('647a6da6-09b4-4182-8206-81232e27fee9', 'Entrées'),
	('4e429783-8ea0-4571-b966-df141dc96e48', 'Desserts');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Listage de la structure de la table quai_antique. concept
CREATE TABLE IF NOT EXISTS `concept` (
  `id` uuid NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.concept : ~0 rows (environ)
/*!40000 ALTER TABLE `concept` DISABLE KEYS */;
/*!40000 ALTER TABLE `concept` ENABLE KEYS */;

-- Listage de la structure de la table quai_antique. dishes
CREATE TABLE IF NOT EXISTS `dishes` (
  `id` uuid NOT NULL,
  `title` varchar(40) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  `category_id` uuid NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `dishes_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.dishes : ~20 rows (environ)
/*!40000 ALTER TABLE `dishes` DISABLE KEYS */;
INSERT INTO `dishes` (`id`, `title`, `description`, `price`, `category_id`) VALUES
	('72375899-6d2b-4db7-81b3-09d4b47c2bc5', 'Foie gras ', NULL, 5.99, '647a6da6-09b4-4182-8206-81232e27fee9'),
	('eb2f7fb6-1860-4167-8571-0b1cf22c1f69', 'Pomme de terre hasselback', NULL, 13.99, '38ca1758-01b4-4589-bbf6-6bfc852bad29'),
	('dc3ca4e2-40d4-474a-a1b4-0fe61283e3b3', 'La fera', NULL, 16.99, '38ca1758-01b4-4589-bbf6-6bfc852bad29'),
	('10321476-ee7e-4642-8704-18ea67d3461c', 'Plateau de fruits de mer', NULL, 17.99, '647a6da6-09b4-4182-8206-81232e27fee9'),
	('118e990e-246e-4f94-a1e7-25717dc04f01', 'Friture de perchot', NULL, 14.99, '647a6da6-09b4-4182-8206-81232e27fee9'),
	('3c4ff0b0-d700-45df-ac89-4324bdc88b59', 'Potée savoyarde', NULL, 17.99, '38ca1758-01b4-4589-bbf6-6bfc852bad29'),
	('e752aaee-7181-4baf-ae31-57c589010876', 'La rioute', NULL, 7.99, '4e429783-8ea0-4571-b966-df141dc96e48'),
	('2ad161b3-d792-4541-8420-5eb2adb735c6', 'Raclette savoyarde', NULL, 15.99, '38ca1758-01b4-4589-bbf6-6bfc852bad29'),
	('b350fb1a-855b-4034-aeca-65ad6c2130fe', 'Fricassée de caïon', NULL, 8.99, '647a6da6-09b4-4182-8206-81232e27fee9'),
	('d5a114cf-1d88-43e5-b632-97a29c31259d', 'Les bugnes', NULL, 5.99, '4e429783-8ea0-4571-b966-df141dc96e48'),
	('ec4feaef-f563-46be-bee1-9e8bab9ed11e', 'La tarte aux myrtilles', NULL, 7.99, '4e429783-8ea0-4571-b966-df141dc96e48'),
	('c998481c-1802-4e76-8725-a590f57a438f', 'Planche de tapas', NULL, 14.99, '647a6da6-09b4-4182-8206-81232e27fee9'),
	('e5d2bf03-c70d-4980-a120-c0ebaa221156', 'Fondue savoyarde', NULL, 14.99, '38ca1758-01b4-4589-bbf6-6bfc852bad29'),
	('9d524975-cc44-4c87-816d-c3efefd4328c', 'Fondant au chocolat', NULL, 7.99, '4e429783-8ea0-4571-b966-df141dc96e48'),
	('3043c504-8190-405f-81f6-e97e6ddddeff', 'Burger Chambérien', NULL, 15.99, '38ca1758-01b4-4589-bbf6-6bfc852bad29'),
	('42ff2e1d-91ee-4c84-9b0c-ed2f832051b5', 'L\'omble chevalier', NULL, 16.99, '38ca1758-01b4-4589-bbf6-6bfc852bad29'),
	('0924762d-984d-4e2c-a117-f3e413be2559', 'La rissole', NULL, 8.99, '4e429783-8ea0-4571-b966-df141dc96e48'),
	('aeec238f-435a-4687-82fa-f5f65bf4b0a1', 'Oeufs bénédicte', NULL, 8.99, '647a6da6-09b4-4182-8206-81232e27fee9'),
	('e3475c11-db57-47f5-9e38-f9094f4360c9', 'Plateau de fromages', NULL, 9.99, '4e429783-8ea0-4571-b966-df141dc96e48');
/*!40000 ALTER TABLE `dishes` ENABLE KEYS */;

-- Listage de la structure de la table quai_antique. hours
CREATE TABLE IF NOT EXISTS `hours` (
  `id` uuid NOT NULL,
  `week_day` int(11) DEFAULT NULL,
  `hour_start` time DEFAULT NULL,
  `hour_end` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.hours : ~0 rows (environ)
/*!40000 ALTER TABLE `hours` DISABLE KEYS */;
/*!40000 ALTER TABLE `hours` ENABLE KEYS */;

-- Listage de la structure de la table quai_antique. menu
CREATE TABLE IF NOT EXISTS `menu` (
  `id` uuid NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.menu : ~0 rows (environ)
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

-- Listage de la structure de la table quai_antique. menu_concept
CREATE TABLE IF NOT EXISTS `menu_concept` (
  `menu_id` uuid NOT NULL,
  `concept_id` uuid NOT NULL,
  PRIMARY KEY (`menu_id`,`concept_id`),
  KEY `concept_id` (`concept_id`),
  CONSTRAINT `menu_concept_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`),
  CONSTRAINT `menu_concept_ibfk_2` FOREIGN KEY (`concept_id`) REFERENCES `concept` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.menu_concept : ~0 rows (environ)
/*!40000 ALTER TABLE `menu_concept` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu_concept` ENABLE KEYS */;

-- Listage de la structure de la table quai_antique. pictures
CREATE TABLE IF NOT EXISTS `pictures` (
  `id` uuid NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.pictures : ~0 rows (environ)
/*!40000 ALTER TABLE `pictures` DISABLE KEYS */;
/*!40000 ALTER TABLE `pictures` ENABLE KEYS */;

-- Listage de la structure de la table quai_antique. restaurant
CREATE TABLE IF NOT EXISTS `restaurant` (
  `nb_persons_max` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.restaurant : ~1 rows (environ)
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` (`nb_persons_max`) VALUES
	(44);
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;

-- Listage de la structure de la table quai_antique. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` uuid NOT NULL,
  `email` varchar(254) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `is_admin` tinyint(1) DEFAULT 0,
  `default_nb_persons` int(11) DEFAULT NULL,
  `allergies` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Listage des données de la table quai_antique.users : ~12 rows (environ)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `is_admin`, `default_nb_persons`, `allergies`) VALUES
	('ccd39941-0cfd-4c87-b2e9-000a9799314d', 'kamado.tanjiro@demon-slayer.fr', 'Tanjiro', 'Kamado', '$2a$08$cuNHQ1PtOiF0Q5XfaV4bVugE0YerrkGLF1bmwfr/NGUeEvAWf0Eeu', 0, NULL, NULL),
	('cd41294a-afb0-11df-bc9b-00241dd75638', 'choji.akimichi@konoha.fr', 'Choji', 'Akimichi', '$2b$08$A2W0Pzb9a6HBb0CueJA7kOIQ1iKVP.gVMCA4OIvgkAYeOFTL4F9Eu', 0, NULL, NULL),
	('658cb922-3476-4bd3-846d-5473e326b2a5', 'yuta@jujutsu-kaisen.com', 'Yuta', 'Okkotsu', '$2a$08$UvtO31IKNjyn5vFUxhArkOJGdlvJnXHiO2sbLisjbemRSmiTui8wy', 0, NULL, NULL),
	('866b9ac2-8895-4b14-bf01-627d3a3f4ee2', 'yuji.itadori@jujutsu-kaisen.com', 'Yuji', 'Itadori', '$2b$08$tXHboCrMd84ZRDvFHqCoFO4kqvbyDrD/khWROxeiMs9hKAFjDiPfy', 0, NULL, NULL),
	('d9ada9f7-1728-42c2-8536-68b81a69dc35', 'admin@quai-antique.fr', 'Shota', 'Aizawa', '$2a$08$MHWcmPiYierxPqwXjE7KDe/qR4KE8NTkPlnxoAKo8xVki1hggNMoS', 1, NULL, NULL),
	('d953e6d6-830b-4461-ab23-6e55b0188cb7', 'king@one-piece.com', 'Luffy', 'Monkey D.', '$2a$08$MRnAmsuKgNCLUWMZ/BRJVubrlRMmsrGHuW8QRlgxb4dW800o2exSa', 0, NULL, NULL),
	('ba359ee7-fee6-48ec-82e3-d6910e55996e', 'titania@fairy-tail.fr', 'Erza', 'Scarlett', '$2a$08$OndyIJU5Tg8ZLtLEmPVK0u2itQycxpB70xjQJz2LmD8rPpQdjyaR.', 0, NULL, NULL),
	('ec1debdd-18ad-4be8-8535-eab278298d26', 'kurita.ryokan@eyeshield-21.com', 'Kurita', 'Ryokan', '$2b$08$R6yTM8iUwunKBeBjUn7I1.YpfglLF5c10aJ1IOUOE7wymuarDZMny', 0, NULL, NULL),
	('57e9cf7e-fd9a-4222-9ba0-f7d76149ade3', 'fire@full-metal.com', 'Roy', 'Mustang', '$2a$08$rQQ4dApp2tm65pZEVtjuZeLZO2jigM3yYcpOyLfegfwi7SX.Ub6Bu', 0, NULL, NULL),
	('cd454fe5-e089-4d11-9cb1-fdb860f204f3', 'chapi@chapo.fr', 'Chapi', 'Chapo', '$2a$08$GaXJAD6Db06IBj8vA3CL7uRBY3pl0d30lIz.QdKBdrJanLBiWYTze', 0, NULL, NULL),
	('2436d775-43a0-44e1-8dad-fdf4889024be', 'hello.suneater@mha.fr', 'Tamaki', 'Amajiki', '$2a$08$mtAuAdEeg08RYgeSlZGYLOGCj/24E5F8haYxjBU0cOkgIHLKa3UKS', 0, NULL, NULL),
	('8f30bdcb-2d24-4ca9-9c93-ff90f7c85fd2', 'zoro@one-piece.fr', 'Zoro', 'Roronoa', '$2a$08$qr.uHk3r3MBsFNAnso4zRuEzzDFLpEWdMWOJN.cpreQfqM8tMhCTm', 0, NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
