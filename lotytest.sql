-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 20 Lut 2024, 13:00
-- Wersja serwera: 10.4.25-MariaDB
-- Wersja PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `lotytest`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `airport`
--

CREATE TABLE `airport` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `airport`
--

INSERT INTO `airport` (`id`, `name`) VALUES
(10, 'Warsaw'),
(11, 'Berlin'),
(12, 'Prague'),
(13, 'Madrid'),
(14, 'Rome'),
(15, 'Vienna'),
(16, 'Athens'),
(17, 'New York'),
(18, 'Los Angeles'),
(19, 'Bali'),
(20, 'Marki-Ratusz'),
(21, 'New York'),
(22, 'Manhattan');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `flight`
--

CREATE TABLE `flight` (
  `id` bigint(20) NOT NULL,
  `arrive_time` varchar(255) DEFAULT NULL,
  `departure_time` varchar(255) DEFAULT NULL,
  `gate` int(11) DEFAULT NULL,
  `terminal` varchar(1) DEFAULT NULL,
  `arrive` bigint(20) DEFAULT NULL,
  `departure` bigint(20) DEFAULT NULL,
  `plane_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `flight`
--

INSERT INTO `flight` (`id`, `arrive_time`, `departure_time`, `gate`, `terminal`, `arrive`, `departure`, `plane_id`) VALUES
(10, '2024-04-29', '2024-09-12', 53, 'R', 13, 13, 11),
(11, '2024-08-08', '2024-07-05', 61, 'P', 15, 16, 10),
(12, '2024-10-24', '2024-10-20', 41, 'A', 18, 15, 10),
(13, '2025-01-07', '2024-11-16', 97, 'S', 15, 18, 11),
(14, '2024-09-24', '2024-08-21', 96, 'H', 18, 14, 10),
(15, '2024-12-30', '2024-11-12', 27, 'F', 14, 16, 11),
(16, '2024-09-23', '2024-05-06', 58, 'C', 18, 18, 11),
(17, '2024-09-08', '2024-12-07', 84, 'E', 11, 13, 10),
(18, '2025-01-06', '2024-08-22', 41, 'K', 16, 15, 10),
(19, '2024-02-11', '2024-12-16', 66, 'L', 11, 18, 11),
(20, '2024-06-27', '2024-12-22', 68, 'O', 15, 12, 10),
(21, '2024-03-29', '2024-10-20', 85, 'O', 12, 15, 11),
(22, '2024-05-01', '2024-05-15', 92, 'M', 14, 21, 11),
(23, '2024-11-15', '2024-08-10', 82, 'F', 13, 11, 10),
(24, '2024-08-10', '2025-01-21', 19, 'D', 20, 17, 11),
(25, '2024-11-03', '2024-12-17', 46, 'K', 16, 17, 10),
(26, '2024-03-05', '2024-06-10', 82, 'G', 11, 19, 12),
(27, '2025-02-09', '2024-06-16', 20, 'P', 19, 22, 10),
(28, '2024-08-11', '2024-03-18', 94, 'J', 18, 14, 12),
(29, '2025-02-08', '2024-03-04', 17, 'P', 15, 17, 12),
(30, '2024-10-04', '2024-05-12', 38, 'F', 13, 20, 11),
(31, '2025-01-29', '2025-01-31', 13, 'K', 15, 21, 10);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `id_sequence_airport`
--

CREATE TABLE `id_sequence_airport` (
  `next_not_cached_value` bigint(21) NOT NULL,
  `minimum_value` bigint(21) NOT NULL,
  `maximum_value` bigint(21) NOT NULL,
  `start_value` bigint(21) NOT NULL COMMENT 'start value when sequences is created or value if RESTART is used',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache_size` bigint(21) UNSIGNED NOT NULL,
  `cycle_option` tinyint(1) UNSIGNED NOT NULL COMMENT '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
  `cycle_count` bigint(21) NOT NULL COMMENT 'How many cycles have been done'
) ENGINE=InnoDB;

--
-- Zrzut danych tabeli `id_sequence_airport`
--

INSERT INTO `id_sequence_airport` (`next_not_cached_value`, `minimum_value`, `maximum_value`, `start_value`, `increment`, `cache_size`, `cycle_option`, `cycle_count`) VALUES
(23, 1, 9223372036854775806, 10, 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `id_sequence_flight`
--

CREATE TABLE `id_sequence_flight` (
  `next_not_cached_value` bigint(21) NOT NULL,
  `minimum_value` bigint(21) NOT NULL,
  `maximum_value` bigint(21) NOT NULL,
  `start_value` bigint(21) NOT NULL COMMENT 'start value when sequences is created or value if RESTART is used',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache_size` bigint(21) UNSIGNED NOT NULL,
  `cycle_option` tinyint(1) UNSIGNED NOT NULL COMMENT '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
  `cycle_count` bigint(21) NOT NULL COMMENT 'How many cycles have been done'
) ENGINE=InnoDB;

--
-- Zrzut danych tabeli `id_sequence_flight`
--

INSERT INTO `id_sequence_flight` (`next_not_cached_value`, `minimum_value`, `maximum_value`, `start_value`, `increment`, `cache_size`, `cycle_option`, `cycle_count`) VALUES
(32, 1, 9223372036854775806, 10, 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `id_sequence_plane`
--

CREATE TABLE `id_sequence_plane` (
  `next_not_cached_value` bigint(21) NOT NULL,
  `minimum_value` bigint(21) NOT NULL,
  `maximum_value` bigint(21) NOT NULL,
  `start_value` bigint(21) NOT NULL COMMENT 'start value when sequences is created or value if RESTART is used',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache_size` bigint(21) UNSIGNED NOT NULL,
  `cycle_option` tinyint(1) UNSIGNED NOT NULL COMMENT '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
  `cycle_count` bigint(21) NOT NULL COMMENT 'How many cycles have been done'
) ENGINE=InnoDB;

--
-- Zrzut danych tabeli `id_sequence_plane`
--

INSERT INTO `id_sequence_plane` (`next_not_cached_value`, `minimum_value`, `maximum_value`, `start_value`, `increment`, `cache_size`, `cycle_option`, `cycle_count`) VALUES
(13, 1, 9223372036854775806, 10, 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `id_sequence_ticket`
--

CREATE TABLE `id_sequence_ticket` (
  `next_not_cached_value` bigint(21) NOT NULL,
  `minimum_value` bigint(21) NOT NULL,
  `maximum_value` bigint(21) NOT NULL,
  `start_value` bigint(21) NOT NULL COMMENT 'start value when sequences is created or value if RESTART is used',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache_size` bigint(21) UNSIGNED NOT NULL,
  `cycle_option` tinyint(1) UNSIGNED NOT NULL COMMENT '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
  `cycle_count` bigint(21) NOT NULL COMMENT 'How many cycles have been done'
) ENGINE=InnoDB;

--
-- Zrzut danych tabeli `id_sequence_ticket`
--

INSERT INTO `id_sequence_ticket` (`next_not_cached_value`, `minimum_value`, `maximum_value`, `start_value`, `increment`, `cache_size`, `cycle_option`, `cycle_count`) VALUES
(130, 1, 9223372036854775806, 10, 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `id_sequence_user`
--

CREATE TABLE `id_sequence_user` (
  `next_not_cached_value` bigint(21) NOT NULL,
  `minimum_value` bigint(21) NOT NULL,
  `maximum_value` bigint(21) NOT NULL,
  `start_value` bigint(21) NOT NULL COMMENT 'start value when sequences is created or value if RESTART is used',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache_size` bigint(21) UNSIGNED NOT NULL,
  `cycle_option` tinyint(1) UNSIGNED NOT NULL COMMENT '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
  `cycle_count` bigint(21) NOT NULL COMMENT 'How many cycles have been done'
) ENGINE=InnoDB;

--
-- Zrzut danych tabeli `id_sequence_user`
--

INSERT INTO `id_sequence_user` (`next_not_cached_value`, `minimum_value`, `maximum_value`, `start_value`, `increment`, `cache_size`, `cycle_option`, `cycle_count`) VALUES
(44, 1, 9223372036854775806, 10, 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `plane`
--

CREATE TABLE `plane` (
  `number` bigint(20) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `seat_count` int(11) NOT NULL CHECK (`seat_count` >= 2)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `plane`
--

INSERT INTO `plane` (`number`, `brand`, `model`, `seat_count`) VALUES
(10, 'Cessena', '172', 4),
(11, 'Boeing', '737', 300),
(12, 'Airbus', 'A320', 420);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ticket`
--

CREATE TABLE `ticket` (
  `id` bigint(20) NOT NULL,
  `classs` tinyint(4) DEFAULT NULL CHECK (`classs` between 0 and 2),
  `price` decimal(15,2) DEFAULT NULL,
  `seat_number` int(11) DEFAULT NULL,
  `flight_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `ticket`
--

INSERT INTO `ticket` (`id`, `classs`, `price`, `seat_number`, `flight_id`, `user_id`) VALUES
(127, 0, '3.00', 5, 10, 20),
(128, 2, '1000.00', 0, 17, 20),
(129, 2, '1000.00', 2, 17, 20);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` tinyint(4) DEFAULT NULL CHECK (`role` between 0 and 1)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`id`, `email`, `last_name`, `name`, `role`) VALUES
(20, 'pablokowalski@onet.pl', 'Kowalski', 'Pablo', 0),
(21, 'lionelkowalski@wp.pl', 'Kowalski', 'Lionel', 0),
(22, 'pablosmith@wp.pl', 'Smith', 'Pablo', 0),
(23, 'pablosurname@onet.pl', 'Surname', 'Pablo', 0),
(24, 'michailsurname@gmail.com', 'Surname', 'Michail', 0),
(25, 'michailsmith@wp.pl', 'Smith', 'Michail', 0),
(26, 'michailsmith@gmail.com', 'Smith', 'Michail', 1),
(27, 'pablokowalski@wp.pl', 'Kowalski', 'Pablo', 0),
(28, 'johnsmith@gmail.com', 'Smith', 'John', 1),
(29, 'pablosmith@wp.pl', 'Smith', 'Pablo', 0),
(30, 'pablosmith@onet.pl', 'Smith', 'Pablo', 1),
(31, 'adolfkowalski@wp.pl', 'Kowalski', 'Adolf', 0),
(32, 'pablosurname@wp.pl', 'Surname', 'Pablo', 1),
(33, 'adolfkowalski@onet.pl', 'Kowalski', 'Adolf', 0),
(34, 'lionelsmith@gmail.com', 'Smith', 'Lionel', 0),
(35, 'adolfkowalski@wp.pl', 'Kowalski', 'Adolf', 0),
(36, 'pablokowalski@gmail.com', 'Kowalski', 'Pablo', 1),
(37, 'michailsurname@gmail.com', 'Surname', 'Michail', 1),
(38, 'adolfsmith@gmail.com', 'Smith', 'Adolf', 1),
(39, 'lionelkowalski@gmail.com', 'Kowalski', 'Lionel', 1),
(40, 'lionelkowalski@wp.pl', 'Kowalski', 'Lionel', 1),
(41, 'johnkowalski@wp.pl', 'Kowalski', 'John', 0),
(42, 'pablosmith@gmail.com', 'Smith', 'Pablo', 1),
(43, 'pablosmith@onet.pl', 'Smith', 'Pablo', 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `airport`
--
ALTER TABLE `airport`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKlvvejgwyjnnhx0fxtbf7hcy8d` (`arrive`),
  ADD KEY `FKkv9763ayayxcn5itjhqsm67xr` (`departure`),
  ADD KEY `FK7p9fvp6d7uh9cgn47uet8a8nb` (`plane_id`);

--
-- Indeksy dla tabeli `plane`
--
ALTER TABLE `plane`
  ADD PRIMARY KEY (`number`);

--
-- Indeksy dla tabeli `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKfju27cbcbl1w16qeora1r636q` (`flight_id`),
  ADD KEY `FKdvt57mcco3ogsosi97odw563o` (`user_id`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `flight`
--
ALTER TABLE `flight`
  ADD CONSTRAINT `FK7p9fvp6d7uh9cgn47uet8a8nb` FOREIGN KEY (`plane_id`) REFERENCES `plane` (`number`),
  ADD CONSTRAINT `FKkv9763ayayxcn5itjhqsm67xr` FOREIGN KEY (`departure`) REFERENCES `airport` (`id`),
  ADD CONSTRAINT `FKlvvejgwyjnnhx0fxtbf7hcy8d` FOREIGN KEY (`arrive`) REFERENCES `airport` (`id`);

--
-- Ograniczenia dla tabeli `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `FKdvt57mcco3ogsosi97odw563o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKfju27cbcbl1w16qeora1r636q` FOREIGN KEY (`flight_id`) REFERENCES `flight` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
