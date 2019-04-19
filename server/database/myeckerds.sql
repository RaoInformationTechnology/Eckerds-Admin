-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 19, 2019 at 01:26 PM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.3.4-1+ubuntu18.04.1+deb.sury.org+3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myeckerds`
--

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `location_id` int(11) NOT NULL,
  `pharmacyName` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `fax` varchar(256) NOT NULL,
  `tollFreeNumber` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `addressOne` varchar(256) NOT NULL,
  `addressTwo` varchar(256) NOT NULL,
  `city` varchar(256) NOT NULL,
  `state` varchar(256) NOT NULL,
  `pincode` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`location_id`, `pharmacyName`, `phone`, `fax`, `tollFreeNumber`, `email`, `addressOne`, `addressTwo`, `city`, `state`, `pincode`) VALUES
(40, 'Eckerds Pharmacy #101 ', '863.774.3536', '863.774.3538', '1.877.994.7759', 'Wauchula@MyEckerds.com', '518 South 6 th Avenue', '', 'Wauchula', 'FL', '33873'),
(41, 'Eckerds Pharmacy #102', '941.404.4121', '941.404.4122', '1.888.243.5616', 'Palmetto@myEckerds.com', '907 10 th Street East', '', 'Palmetto', 'FL', '34221'),
(42, 'Eckerds Pharmacy #103 ', '941.538.7122', '941.538.7133', '1.888.294.7120', 'Bradenton@myEckerds.com', '5139 Manatee Ave West', '', 'Bradenton', 'FL', '34209'),
(43, 'Eckerds Pharmacy #104 ', '813.606.4577', '813.606.4588', '', 'Apollo@myEckerds.com', '264 Apollo Beach Blvd', '', 'Apollo Beach', 'FL', '33572'),
(44, 'Eckerds Specialty Pharmacy ', '941.900.4410', '941.900.4415', '', 'Specialty@myEckerds.com', '2902 59th Street West, Ste R', '', 'Bradenton', 'FL', '34209'),
(49, 'Eckerds Pharmacy #105 ', '727.877.6603', '727.877.6605', '', 'NPR@myeckerds.com', '9035 Little Road', '', 'New Port Richey', 'FL', '34654'),
(59, 'Eckerds Specialty Pharmacy ', '941.900.4410', '941.900.4415', '', 'Specialty@myEckerds.com', '2902 59th Street West, Ste R', '', 'Bradenton', 'FL', '34209');

-- --------------------------------------------------------

--
-- Table structure for table `pricecheck`
--

CREATE TABLE `pricecheck` (
  `pc_id` int(11) NOT NULL,
  `location` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `medicines` varchar(256) NOT NULL,
  `note` varchar(256) NOT NULL,
  `isPublish` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pricecheck`
--

INSERT INTO `pricecheck` (`pc_id`, `location`, `name`, `phone`, `email`, `medicines`, `note`, `isPublish`, `createdAt`) VALUES
(11, 'Wauchula', 'Mike', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', 1, '2019-03-11 15:45:24'),
(12, 'Palmetto', 'Russel', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', 1, '2019-02-11 15:45:09'),
(13, 'Bradenton', 'Chrales', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', 1, '2019-02-11 15:45:24'),
(14, 'Apollo Beach', 'Mike', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', 1, '2019-03-11 15:45:24'),
(15, 'New Port Richey', 'Russel', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', 0, '2019-05-11 15:45:09'),
(16, 'Lake Jackson', 'Chrales', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', 1, '2019-12-11 15:45:24'),
(17, 'West Bradenton', 'Mike', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', 1, '2019-03-11 15:45:24'),
(22, 'Wauchula', 'Tirthraj Barot', '09979430007', '', 'Med 1, 1, 5: Med 2, 1, 5: Med 3, 1, 5: Med 4, 1, 5', 'Testing .', 1, '2019-08-18 16:53:56'),
(23, 'Wauchula', 'Tirthraj Barot', '09979430007', '', 'Med 1, 1, 5: Med 2, 1, 5: Med 3, 1, 5: Med 4, 1, 5', 'Testing .', 1, '2019-11-18 16:54:29'),
(24, 'Wauchula', 'Tirthraj Barot', '09979430007', '', '', 'yashlo Shuklayashlo Shuklayashlo Shuklayashlo Shuklayashlo Shuklayashlo Shukla', 1, '2019-06-18 16:58:14'),
(25, 'Wauchula', 'Tirthraj Barot', '09979430007', 'tirthrajbarot2394@gmail.com', '', 'Note to pharmacy is testing.', 1, '2019-04-18 17:28:31'),
(26, 'Wauchula', 'Tirthraj Barot', '09979430007', 'tirthrajbarot2394@gmail.com', 'Med 1, 5, 5: Med 1, 5, 5: Med 1, 5, 5: Med 1, 5, 5', 'Note to pharmacy is testing.', 1, '2019-09-18 17:29:55'),
(27, 'hjh', 'Mike', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', 1, '2019-03-11 15:45:24');

-- --------------------------------------------------------

--
-- Table structure for table `refillprescription`
--

CREATE TABLE `refillprescription` (
  `refill_id` int(11) NOT NULL,
  `location` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `email` text NOT NULL,
  `rxnumbers` varchar(256) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(256) NOT NULL,
  `note` text NOT NULL,
  `isPublish` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `refillprescription`
--

INSERT INTO `refillprescription` (`refill_id`, `location`, `name`, `phone`, `email`, `rxnumbers`, `date`, `time`, `note`, `isPublish`, `createdAt`) VALUES
(5, 'Wauchula', 'James', '+1-432-321-2323', 'j@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', 1, '2019-05-11 15:47:04'),
(6, 'Palmetto', 'Chrlie', '+1-422-221-2323', 'c@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', 1, '2019-03-11 15:47:04'),
(7, 'Bradenton', 'James', '+1-432-321-2323', 'j@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', 1, '2019-08-11 15:47:04'),
(8, 'Apollo Beach', 'Chrlie', '+1-422-221-2323', 'c@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', 1, '2019-01-11 15:47:04'),
(9, 'Wauchula', 'James', '+1-432-321-2323', 'j@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', 1, '2019-03-11 15:47:04'),
(10, 'Palmetto', 'Chrlie', '+1-422-221-2323', 'c@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', 1, '2019-06-11 15:47:04'),
(11, 'Bradenton', 'James', '+1-432-321-2323', 'j@gmail.com', '43434423433', '2019-11-13', '23:54', 'This is urgent request!', 1, '2019-05-11 15:47:04'),
(12, 'Apollo Beach', 'Chrlie', '+1-422-221-2323', 'c@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', 1, '2019-02-11 15:47:04'),
(13, 'Wauchula', 'Tirthraj Barot', '09979430007', '', '', '2019-11-12', '', 'Testing', 1, '2019-03-18 17:02:16'),
(14, 'Wauchula', 'Tirthraj Barot', '09979430007', '', '', '2019-12-31', '11:59:00 PM', 'Testing', 1, '2019-03-18 17:04:54'),
(15, 'Wauchula', 'Tirthraj Barot', '09979430007', '', '', '2019-12-31', '11:59:00 PM', 'Testing', 1, '2019-03-18 17:06:18'),
(16, 'Wauchula', 'Tirthraj Barot', '09979430007', '', '5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5', '2019-12-31', '11:59:00 PM', 'Testing', 1, '2019-03-18 17:06:44'),
(17, 'Wauchula', 'Tirthraj Barot', '09979430007', '', '', '2019-12-31', '11:59:00 PM', 'Testing', 1, '2019-03-18 17:08:05'),
(18, 'Wauchula', 'Tirthraj Barot', '09979430007', '', '5: 5: 5: 5: 5: 5: 5: 5', '2019-12-31', '11:59:00 PM', 'Testing', 1, '2019-03-18 17:08:19'),
(19, 'Wauchula', 'Tirthraj Barot', '09979430007', '', '5, 5, 5, 5, 5, 5, 5, 5', '2019-12-31', '11:59:00 PM', 'Testing', 1, '2019-03-18 17:09:09'),
(20, 'Palmetto', 'Tirthraj Barot', '09979430007', 'tirthrajbarot2394@gmail.com', '7, 7, 7, 7, 8, 8, 8, 8', '2019-12-31', '11:59:00 PM', 'Note to pharmacy is testing.', 1, '2019-03-18 17:30:26'),
(21, 'Palmetto', 'Chrlie', '+1-422-221-2323', 'c@gmail.com', '43434423433', '2019-10-13', '23:54', 'This is urgent request!', 1, '2019-10-11 15:47:04'),
(22, 'Wauchula', 'James', '+1-432-321-2323', 'j@gmail.com', '43434423433', '2019-11-13', '23:54', 'This is urgent request!', 1, '2019-10-11 15:47:04'),
(23, 'Washington DC', 'Tirthraj Barot', '09979430007', '', '5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5: 5, 5, 5', '2019-12-31', '11:59:00 PM', 'Testing', 1, '2019-03-18 17:06:44');

-- --------------------------------------------------------

--
-- Table structure for table `transferprescription`
--

CREATE TABLE `transferprescription` (
  `tp_id` int(11) NOT NULL,
  `location` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `email` text NOT NULL,
  `fromName` varchar(256) NOT NULL,
  `pharmacyPhone` varchar(256) NOT NULL,
  `rxnumbers` varchar(256) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(256) NOT NULL,
  `note` varchar(256) NOT NULL,
  `isPublish` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transferprescription`
--

INSERT INTO `transferprescription` (`tp_id`, `location`, `name`, `phone`, `email`, `fromName`, `pharmacyPhone`, `rxnumbers`, `date`, `time`, `note`, `isPublish`, `createdAt`) VALUES
(6, 'Lake Jackson', 'John', '+1-222-323-3433', 'john@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-02-08 18:11:48'),
(7, 'Palmetto', 'Charles', '+1-202-423-2342', 'charles@g.c', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-03-08 18:11:48'),
(8, 'Bradenton', 'Andrea', '+1-202-423-2342', 'andrea@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-03-08 18:11:48'),
(9, 'Apollo Beach', 'Edwin', '+1-202-423-2342', 'edwin@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 0, '2019-02-08 18:11:48'),
(10, 'Lake Jackson', 'John', '+1-222-323-3433', 'john@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-03-08 18:11:48'),
(11, 'Palmetto', 'Charles', '+1-202-423-2342', 'charles@g.c', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-03-08 18:11:48'),
(12, 'Bradenton', 'Andrea', '+1-202-423-2342', 'andrea@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-07-08 18:11:48'),
(13, 'Apollo Beach', 'Edwin', '+1-202-423-2342', 'edwin@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-03-08 18:11:48'),
(14, 'New Port Richey', 'Tirthraj Barot', '09979430007', '', 'Keval Chudasama', '9898989898', 'kval, kval, kval, kval, kval, kval, kval, kval', '2019-12-31', '11:59:00 PM', 'kvalkvalkvalkvalkval', 1, '2019-03-18 17:16:04'),
(15, 'Palmetto', 'Tirthraj Barot', '09979430007', '', 'Test', 'Test', '1, 1, 1, 1, 1, 1, 11, 1', '0000-00-00', '', '', 1, '2019-03-18 17:17:47'),
(16, 'Palmetto', 'Tirthraj Barot', '09979430007', '', 'Test', 'Test', '1, 1, 1, 1, 1, 1, 11, 1', '0000-00-00', '', '', 1, '2019-03-18 17:20:15'),
(17, 'Palmetto', 'Tirthraj Barot', '09979430007', '', 'Test', 'Test', '1, 1, 1, 1, 1, 1, 11, 1', '0000-00-00', '', '', 1, '2019-03-18 17:21:28'),
(18, 'Palmetto', 'Tirthraj Barot', '09979430007', '', 'Test', 'Test', '1, 1, 1, 1, 1, 1, 11, 1', '0000-00-00', '', '', 1, '2019-03-18 17:22:23'),
(19, 'Palmetto', 'Tirthraj Barot', '09979430007', '', 'Test', 'Test', '1, 1, 1, 1, 1, 1, 11, 1', '0000-00-00', '', '', 1, '2019-03-18 17:24:08'),
(20, 'Lake Jackson', 'Tirthraj Barot', '09979430007', 'tirthrajbarot2394@gmail.com', 'From Pharmacy Name', 'From Pharmacy Number', '1, 1, 1, 1, 2, 2, 2, 2', '2019-12-31', '11:59:00 PM', 'Note to pharmacy', 1, '2019-03-18 17:27:25'),
(21, 'Palmetto', 'Tirthraj Barot', '09979430007', 'tirthrajbarot2394@gmail.com', 'Demo', 'Demo', '9, 9, 9, 9, 8, 8, 8, 8', '2019-12-31', '11:59:00 PM', '321123', 1, '2019-03-18 17:31:18'),
(22, 'Palmetto', 'Tirthraj Barot', '09979430007', '', 'Test', 'Test', '1, 1, 1, 1, 1, 1, 11, 1', '2019-03-20', '', '', 1, '2019-03-18 17:24:08'),
(39, 'Lake Jackson', 'John', '+1-222-323-3433', 'john@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-13', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-02-08 18:11:48'),
(40, 'Lake Jackson', 'John', '+1-222-323-3433', 'john@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-02-08 18:11:48'),
(41, 'Lake Jackson', 'Tirthraj Barot', '09979430007', 'tirthrajbarot2394@gmail.com', 'From Pharmacy Name', 'From Pharmacy Number', '1, 1, 1, 1, 2, 2, 2, 2', '2019-12-31', '11:59:00 PM', 'Note to pharmacy', 1, '2019-03-18 17:27:25'),
(42, 'Lake Jackson', 'John', '+1-222-323-3433', 'john@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-02-08 18:11:48'),
(43, 'Palmetto', 'Charles', '+1-202-423-2342', 'charles@g.c', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-03-08 18:11:48'),
(44, 'Lake Jackson', 'John', '+1-222-323-3433', 'john@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', 1, '2019-02-08 18:11:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` int(11) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `email`, `password`) VALUES
(1, 'a@gmail.com', '1234'),
(2, 'b@gmail.com', '1234'),
(3, 'c@gmail.com', '321');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `pricecheck`
--
ALTER TABLE `pricecheck`
  ADD PRIMARY KEY (`pc_id`);

--
-- Indexes for table `refillprescription`
--
ALTER TABLE `refillprescription`
  ADD PRIMARY KEY (`refill_id`);

--
-- Indexes for table `transferprescription`
--
ALTER TABLE `transferprescription`
  ADD PRIMARY KEY (`tp_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
--
-- AUTO_INCREMENT for table `pricecheck`
--
ALTER TABLE `pricecheck`
  MODIFY `pc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `refillprescription`
--
ALTER TABLE `refillprescription`
  MODIFY `refill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `transferprescription`
--
ALTER TABLE `transferprescription`
  MODIFY `tp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
