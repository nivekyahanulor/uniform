-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2025 at 04:43 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_uniformv2`
--

-- --------------------------------------------------------

--
-- Table structure for table `v_cart`
--

CREATE TABLE `v_cart` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `size` varchar(36) NOT NULL,
  `transaction_code` varchar(100) NOT NULL,
  `is_checkout` int(11) NOT NULL,
  `is_status` int(11) NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `v_cart`
--

INSERT INTO `v_cart` (`id`, `customer_id`, `product_id`, `quantity`, `size`, `transaction_code`, `is_checkout`, `is_status`, `date_added`) VALUES
(1, 1, 1, 1, 'Medium', 'EL5CpV', 1, 1, '2025-05-11 11:42:46');

-- --------------------------------------------------------

--
-- Table structure for table `v_products`
--

CREATE TABLE `v_products` (
  `id` int(12) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` varchar(36) NOT NULL,
  `quantity` int(12) NOT NULL,
  `out_qty` int(100) NOT NULL,
  `product_description` text NOT NULL,
  `location` text NOT NULL,
  `category` varchar(36) NOT NULL,
  `date_added` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `v_products`
--

INSERT INTO `v_products` (`id`, `product_name`, `product_price`, `quantity`, `out_qty`, `product_description`, `location`, `category`, `date_added`) VALUES
(1, 'GREEN UNIFORM - MEN', '400', 20, 0, 'GREEN UNIFORM - MEN', 'male.jpg', 'Universal Uniform', '2025-05-11 01:33:39'),
(2, 'WHITE UNIFORM - MEN', '400', 20, 0, 'WHITE UNIFORM - MEN', 'cog-logo4.png', 'White Uniform', '2025-05-11 18:21:07');

-- --------------------------------------------------------

--
-- Table structure for table `v_users`
--

CREATE TABLE `v_users` (
  `id` int(12) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(12) NOT NULL,
  `code` varchar(36) NOT NULL,
  `date_added` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `v_users`
--

INSERT INTO `v_users` (`id`, `fullname`, `mobile`, `address`, `email`, `password`, `role`, `code`, `date_added`) VALUES
(6, 'Super Admin', '', '', 'superadmin@gmail.com', '$2y$10$iSyz36LGO/vNf//MJg89F.Ai1ZFdca7JvZjMjQbkfJM4epzOh1tQG', 'admin', '', '2025-05-13 04:42:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `v_cart`
--
ALTER TABLE `v_cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `v_products`
--
ALTER TABLE `v_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `v_users`
--
ALTER TABLE `v_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `v_cart`
--
ALTER TABLE `v_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `v_products`
--
ALTER TABLE `v_products`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `v_users`
--
ALTER TABLE `v_users`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
