-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 18, 2019 at 06:16 PM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 5.6.40-1+ubuntu18.04.1+deb.sury.org+2+will+reach+end+of+life+in+april+2019

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myEckerds`
--

-- --------------------------------------------------------

--
-- Table structure for table `priceCheck`
--

CREATE TABLE `priceCheck` (
  `pc_id` int(11) NOT NULL,
  `location` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `medicines` varchar(256) NOT NULL,
  `note` varchar(256) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `priceCheck`
--

INSERT INTO `priceCheck` (`pc_id`, `location`, `name`, `phone`, `email`, `medicines`, `note`, `createdAt`) VALUES
(11, 'Wauchula', 'Mike', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', '2019-03-11 15:45:24'),
(12, 'Palmetto', 'Russel', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', '2019-03-11 15:45:09'),
(13, 'Bradenton', 'Chrales', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', '2019-03-11 15:45:24'),
(14, 'Apollo Beach', 'Mike', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', '2019-03-11 15:45:24'),
(15, 'New Port Richey', 'Russel', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', '2019-03-11 15:45:09'),
(16, 'Lack  Jackson', 'Chrales', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', '2019-03-11 15:45:24'),
(17, 'West Bradenton', 'Mike', '+1-433-232-2313', 'c@gmail.com', 'Lyrica', 'Whta\'s the Price?', '2019-03-11 15:45:24'),
(18, 'Wauchula', 'Jason', '+1-433-232-4544', 'jason@gmail.com', 'Paracetamol', 'Hey, i need to know about the price of this medicine.', '2019-03-11 15:45:24');

-- --------------------------------------------------------

--
-- Table structure for table `refillPrescription`
--

CREATE TABLE `refillPrescription` (
  `refill_id` int(11) NOT NULL,
  `location` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `email` varchar(2546) NOT NULL,
  `rxnumbers` varchar(256) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(256) NOT NULL,
  `note` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `refillPrescription`
--

INSERT INTO `refillPrescription` (`refill_id`, `location`, `name`, `phone`, `email`, `rxnumbers`, `date`, `time`, `note`, `createdAt`) VALUES
(5, 'Wauchula', 'James', '+1-432-321-2323', 'j@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', '2019-03-11 15:47:04'),
(6, 'Palmetto', 'Chrlie', '+1-422-221-2323', 'c@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', '2019-03-11 15:47:04'),
(7, 'Bradenton', 'James', '+1-432-321-2323', 'j@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', '2019-03-11 15:47:04'),
(8, 'Apollo Beach', 'Chrlie', '+1-422-221-2323', 'c@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', '2019-03-11 15:47:04'),
(9, 'Wauchula', 'James', '+1-432-321-2323', 'j@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', '2019-03-11 15:47:04'),
(10, 'Palmetto', 'Chrlie', '+1-422-221-2323', 'c@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', '2019-03-11 15:47:04'),
(11, 'Bradenton', 'James', '+1-432-321-2323', 'j@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', '2019-03-11 15:47:04'),
(12, 'Apollo Beach', 'Chrlie', '+1-422-221-2323', 'c@gmail.com', '43434423433', '2019-03-13', '23:54', 'This is urgent request!', '2019-03-11 15:47:04');

-- --------------------------------------------------------

--
-- Table structure for table `transferPrescription`
--

CREATE TABLE `transferPrescription` (
  `tp_id` int(11) NOT NULL,
  `location` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `email` varchar(2546) NOT NULL,
  `fromName` varchar(256) NOT NULL,
  `pharmacyPhone` varchar(256) NOT NULL,
  `rxNumbers` varchar(256) NOT NULL,
  `myDate` date NOT NULL,
  `myTime` varchar(256) NOT NULL,
  `note` varchar(256) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transferPrescription`
--

INSERT INTO `transferPrescription` (`tp_id`, `location`, `name`, `phone`, `email`, `fromName`, `pharmacyPhone`, `rxNumbers`, `myDate`, `myTime`, `note`, `createdAt`) VALUES
(6, 'Lake Jackson', 'John', '+1-222-323-3433', 'john@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', '2019-03-08 18:11:48'),
(7, 'Palmetto', 'Charles', '+1-202-423-2342', 'charles@g.c', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', '2019-03-08 18:11:48'),
(8, 'Bradenton', 'Andrea', '+1-202-423-2342', 'andrea@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', '2019-03-08 18:11:48'),
(9, 'Apollo Beach', 'Edwin', '+1-202-423-2342', 'edwin@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', '2019-03-08 18:11:48'),
(10, 'Lake Jackson', 'John', '+1-222-323-3433', 'john@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', '2019-03-08 18:11:48'),
(11, 'Wauchula', 'Charles', '+1-202-423-2342', 'charles@g.c', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', '2019-03-08 18:11:48'),
(12, 'Bradenton', 'Andrea', '+1-202-423-2342', 'andrea@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', '2019-03-08 18:11:48'),
(13, 'Apollo Beach', 'Edwin', '+1-202-423-2342', 'edwin@gmail.com', 'Charles', '+1-202-555-3432', '434444244243', '2019-03-26', '12:03 AM', 'Can you transfer my prescription?', '2019-03-08 18:11:48');

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
-- Indexes for table `priceCheck`
--
ALTER TABLE `priceCheck`
  ADD PRIMARY KEY (`pc_id`);

--
-- Indexes for table `refillPrescription`
--
ALTER TABLE `refillPrescription`
  ADD PRIMARY KEY (`refill_id`);

--
-- Indexes for table `transferPrescription`
--
ALTER TABLE `transferPrescription`
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
-- AUTO_INCREMENT for table `priceCheck`
--
ALTER TABLE `priceCheck`
  MODIFY `pc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `refillPrescription`
--
ALTER TABLE `refillPrescription`
  MODIFY `refill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `transferPrescription`
--
ALTER TABLE `transferPrescription`
  MODIFY `tp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
