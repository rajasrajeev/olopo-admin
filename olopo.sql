-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 26, 2025 at 08:56 AM
-- Server version: 11.8.3-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u650733641_olopo`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `icon`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Shopping', 'categories/icons/AD8bnAFts1QtoB9zkAiTznFJI2eNQu7sbgXAnE2f.gif', 1, '2025-06-08 09:46:52', '2025-06-08 09:46:52'),
(2, 'My Ads', 'categories/icons/mDkmucjUEBrbQRZc5SKMWcLM3X4a9Y3xUoGssmA8.gif', 1, '2025-06-08 11:09:10', '2025-06-08 11:09:10'),
(3, 'Referrals', 'categories/icons/vNQCFp3r0xSK14Ls6mEnVHFV9I4zQGtXaiwRQIGy.gif', 1, '2025-06-08 11:11:38', '2025-06-08 11:11:38'),
(4, 'Activities', 'categories/icons/gwjTeEWYljHpwdkB7oHdakSwEK7PrMsTkq3q2zih.gif', 1, '2025-06-08 11:12:59', '2025-06-08 11:12:59'),
(5, 'Travel', 'categories/icons/7afYpGJsfRC9FXNkWVyPnhP4yaMIaW02ZeIXL6zj.gif', 1, '2025-06-08 11:13:14', '2025-06-08 11:13:14'),
(6, 'Coupons', 'categories/icons/Ti8aT3WHt86UbfEJfQ0ZSdgivTbAwpbAx4qEiNdJ.gif', 1, '2025-06-08 11:13:25', '2025-06-08 11:13:25'),
(7, 'Movies', 'categories/icons/xDClHKwgdzIpiSHFQIQthcVR1uDkWOc3BIqGD9Rt.gif', 1, '2025-06-08 11:13:40', '2025-06-08 11:13:40'),
(8, 'Scratch Card', 'categories/icons/UwQdJGV98IRaaiyeMpZOJtMOvGvR6xohOYtBHfqX.gif', 1, '2025-06-08 11:13:57', '2025-06-08 11:13:57'),
(9, 'Events', 'categories/icons/e73yXwYYrNQ1VhD5WUkharmaK51O6RQEnyu7KR2o.gif', 1, '2025-06-08 11:14:06', '2025-06-08 11:14:06');

-- --------------------------------------------------------

--
-- Table structure for table `category_details`
--

CREATE TABLE `category_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_details`
--

INSERT INTO `category_details` (`id`, `category_id`, `title`, `banner_image`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Shopping more value for your money', 'category-details/banners/YUvLzQJLKBtZzp0IiBk2y0jFsZotjIZLn2WKxcch.png', 'Olopo App is a next-generation wealth management app that transforms your\r\n            spending into reward points and helps you start saving effortlessly.Use the Scan & Pay feature\r\n            to make payments while\r\n            shopping, and earn reward points that can be used for future purchases.', 1, '2025-06-08 10:45:24', '2025-06-09 11:14:53'),
(2, 2, 'Create a cost-effective advertising with just ₹1/Day', 'category-details/banners/fB57bTZaEpAUk24jRtAQKGMOIlXIJonxwT9vgEW8.png', NULL, 1, '2025-06-08 11:11:12', '2025-06-09 11:15:14'),
(3, 3, 'Refer. Earn. Repeat.', 'category-details/banners/CsuNAq7VZMCaRU8lLihnLkDWnB1boY4PNSXhtJg9.png', 'Sharing Olopo is rewarding – literally\r\n\r\nWith our easy referral system, you earn every time someone signs up and shops using your code.', 1, '2025-06-08 11:12:34', '2025-06-09 11:15:35'),
(4, 4, 'Make an Impact, Get Rewarded', 'category-details/banners/i4b4VwG6tRFfGS46sCCh6v799eZRf1d422aiyYR5.png', 'Your time is valuable and now, it\'s also meaningful\r\n\r\nAt Olopo, we believe that doing good should always be rewarding', 1, '2025-06-08 11:18:21', '2025-06-09 11:15:55'),
(5, 5, 'Explore the World Without Breaking the Bank', 'category-details/banners/En4iCppw4Z7M0Yf4NaVjGbRdNTVuRpmmqqHdpDUp.png', NULL, 1, '2025-06-08 11:20:13', '2025-06-09 11:16:23'),
(6, 6, 'Looking for extra savings?', 'category-details/banners/FYDRwz0gOhmKA4Tqm6twMbz9y1WiNeiLkapnUfTf.png', 'With Olopo Coupons, you get exclusive deals that you can purchase and redeem', 1, '2025-06-08 11:21:40', '2025-06-09 11:16:44'),
(7, 7, 'Turn Your Points into Popcorn Moments', 'category-details/banners/GXAZoR9JI2YToRTGlwSgT0SeD77ledKmT9J6d2OK.png', 'Turn your shopping rewards into entertainment!\r\n\r\nUse your Olopo loyalty points to purchase movie tickets and enjoy your favorite films without spending an extra cash.', 1, '2025-06-08 11:24:02', '2025-06-09 11:17:03'),
(8, 9, 'Experience More with Your Points', 'category-details/banners/HI11OFrb9eJ5CF9zXeXztuEZFIvgfBj1eifq5pHE.png', 'With Olopo, attending or hosting events has never been easier or more rewarding\r\n\r\nUse Your Points for Event Passes', 1, '2025-06-08 11:25:15', '2025-06-13 12:57:18'),
(9, 8, 'Coming Soon', 'category-details/banners/y4hGDSebOUjk1YVKWyegTUirYAPWfKwCdHOn6bGY.png', NULL, 1, '2025-06-08 12:21:54', '2025-06-09 11:17:19');

-- --------------------------------------------------------

--
-- Table structure for table `category_detail_accordions`
--

CREATE TABLE `category_detail_accordions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_detail_id` bigint(20) UNSIGNED NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` longtext NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_detail_accordions`
--

INSERT INTO `category_detail_accordions` (`id`, `category_detail_id`, `question`, `answer`, `sort_order`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'How to Pay & Earn', '<h5><strong style=\"color: rgb(85, 85, 85);\">Make a Payment</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Use the Olopo App as your payment method online or at offline partner stores.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">If the store accepts Olopo, you’re eligible for exclusive rewards!</span></li></ol><h5><strong style=\"color: rgb(85, 85, 85);\">Scan &amp; Pay at Checkout</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">After shopping, simply Scan &amp; Pay using Olopo.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">You’ll instantly earn loyalty or shopping points with every successful payment.</span></li></ol><h5><strong style=\"color: rgb(85, 85, 85);\">Find Rewards Near You</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Explore nearby stores and outlets offering deals and cashback through the app.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Pay smart, save more.</span></li></ol><h5><strong style=\"color: rgb(85, 85, 85);\">Win with Scratch Cards</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Every eligible payment gives you a digital scratch card in the app.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Scratch to reveal instant rewards like cashback, points, or special offers right after you pay.</span></li></ol><p><br></p>', 1, 1, '2025-06-08 10:45:24', '2025-06-08 10:45:24'),
(2, 1, 'Earn Cash-back', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">When you make a purchase, you earn Olopo Loyalty Points (OLP), these points are credited to your Olopo account.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">We are turning every rupee into your future savings.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">A minimum of 4% cashback on every eligible purchase</span></li></ol><p><br></p>', 2, 1, '2025-06-08 10:45:24', '2025-06-08 10:45:24'),
(3, 1, 'Redeem Your Rewards', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(85, 85, 85);\">Olopo points can be easily redeemed in 2 ways:</span></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Online Redemption: Use points directly on your next purchase.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Offline Redemption: Spend your points at participating local stores and outlets</span></li></ol><p><br></p>', 3, 1, '2025-06-08 10:45:24', '2025-06-08 10:45:24'),
(4, 1, 'How to earn points?', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(85, 85, 85);\">Olopo offers you with 2 types of points</span></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Olopo Loyalty Points :This is your real reward! These points can be converted into discounts, cashbacks, or used for future purchases. Adding more value to every transaction.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Shopping Points: Earned instantly when you shop Buy OSP (Olopo shopping points) directly using cash for faster access to exclusive deals. Earn points every time you shop, and use them to save more on your next purchase. These points can be converted into cashbacks, and also used for future purchases.</span></li></ol><p><br></p>', 4, 1, '2025-06-08 10:45:24', '2025-06-08 10:45:24'),
(5, 1, 'Why Choose Olopo?', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Easy Access: One platform, endless shopping options.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Guaranteed Savings: A minimum of 4% cashback on every eligible purchase</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">One-Stop Solution: From daily essentials to luxury brands, everything you need is right here.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Time-Saving: Shop smart and fast with Olopo App.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Assured Rewards: Earn points every time you shop, and use them to save more on your next purchase.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">More Value for Your Money: Make every rupee count with rewards and real time savings</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Be an entrepreneur : A customer can use the Olopo platform to start their own business.</span></li></ol><p><br></p>', 5, 1, '2025-06-08 10:45:24', '2025-06-08 10:45:24'),
(6, 2, 'What are My Ads?', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(85, 85, 85);\">My Ads is Olopo’s in-app advertising tool designed to help businesses big or small get noticed easily.</span></p>', 1, 1, '2025-06-08 11:11:13', '2025-06-08 11:11:13'),
(7, 2, 'Do You Have a Product or Service to Sell?.', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(85, 85, 85);\">My Ads lets you advertise your product or service directly to Olopo app users starting at only ₹1 per day!</span></p>', 2, 1, '2025-06-08 11:11:13', '2025-06-08 11:11:13'),
(8, 2, 'Achieve all your sales in one place', '<h5><strong style=\"color: rgb(85, 85, 85);\">Whether you\'re selling a product, service, or offer, you can</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Upload your product or service details</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Create a free catalogue directly on the Olopo platform</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Let customers purchase using their Olopo reward points.</span></li></ol><h5><strong style=\"color: rgb(85, 85, 85);\">Ad Categories You Can Choose From</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Direct Purchase Link – Instantly redirect users to buy.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Product to App – Drive attention to your listed items in the Olopo app</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Order Placed via App – Encourage direct purchases right through the platform</span></li></ol><h5><strong style=\"color: rgb(85, 85, 85);\">How to Use My Ads</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Upload your product or service</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Create your free catalogue on the Olopo platform</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Set preferences like location, duration, and ad category</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Go live and start reaching out to real customers!</span></li></ol><h5><strong style=\"color: rgb(85, 85, 85);\">Ad Specifications</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Cost: ₹1 per day – that’s it!</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Visibility: Target specific locations where your potential customers are</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Ad Validity: Choose how long your ad runs as based on your needs</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Guided Setup: Simple step-by-step instructions with visuals (attach screenshots or video guide).</span></li></ol><h5><strong style=\"color: rgb(85, 85, 85);\">Why Choose My Ads?</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Achieve all your sales in one place</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Reaches real users in real locations</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Works with Olopo’s rewards ecosystem</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Increases visibility without complicated setup</span></li></ol>', 3, 1, '2025-06-08 11:11:13', '2025-06-08 11:11:13'),
(9, 3, 'How it Works:', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">1. Share your referral code with friends and family</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">2. When they sign up and make their first purchase, you both earn Olopo Cash Points.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">3. Track your progress through your dashboard with our Referral Tracker – it\'s simple and transparent.</span></li></ol><p><br></p>', 1, 1, '2025-06-08 11:12:34', '2025-06-08 11:12:34'),
(10, 3, 'Smart Tracking with NPS', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(85, 85, 85);\">We use the Net Promoter Score (NPS) to understand how engaged our users are. The better your referrals perform (spending, engagement, loyalty), the more exclusive rewards you unlock</span></p>', 2, 1, '2025-06-08 11:12:34', '2025-06-08 11:12:34'),
(11, 4, 'What Is It All About?', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(85, 85, 85);\">We’re on a mission to inspire people, organizations, and communities to come together for a better tomorrow. Whether it\'s planting trees, supporting local businesses, or spreading awareness about drug prevention, your involvement always matters</span></p>', 1, 1, '2025-06-08 11:18:21', '2025-06-08 11:18:21'),
(12, 4, 'How It Works', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Join a cause you care about</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Take part in verified activities</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Track your time and contributions</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Earn Olopo points as an honorarium</span></li></ol><p><span style=\"color: rgb(85, 85, 85);\">Yes it’s that simple!</span></p><p><br></p>', 2, 1, '2025-06-08 11:18:21', '2025-06-08 11:18:21'),
(13, 4, 'Who Can Join?', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(85, 85, 85);\">This initiative is open to all</span></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Local bodies</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Corporates (perfect for CSR initiatives)</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Individual volunteers</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Community groups and NGOs</span></li></ol><p><span style=\"color: rgb(85, 85, 85);\">Whether you\'re looking to do good on your own or represent an organization</span></p><p><span style=\"color: rgb(85, 85, 85);\">There\'s always a space for everyone.</span></p><p><br></p>', 3, 1, '2025-06-08 11:18:22', '2025-06-08 11:18:22'),
(14, 4, 'Some Missions You Can Support:', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Environmental conservation and clean-ups</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Supporting the local economy</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Sustainable development projects</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Anti-drug awareness and education</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Charity drives and welfare activities</span></li></ol><p><br></p>', 4, 1, '2025-06-08 11:18:22', '2025-06-08 11:18:22'),
(15, 4, 'Why It Matters', '<p><span style=\"color: rgb(85, 85, 85);\">Your time is powerful. When used for a good cause, it becomes even more powerful. And with Olopo, you don’t just grow. Every minute you contribute earns you points, which can be redeemed for rewards, offers, and more.</span></p><p class=\"ql-align-center\"><span style=\"color: rgb(85, 85, 85);\">Do good. Feel good. Get rewarded :)</span></p><p><br></p>', 5, 1, '2025-06-08 11:18:22', '2025-06-08 11:18:22'),
(16, 5, 'Ever dreamed of traveling more, but worried about the cost?', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">With the Olopo app, you can turn your everyday purchases into travel reward</span></li></ol>', 1, 1, '2025-06-08 11:20:13', '2025-06-08 11:20:13'),
(17, 5, 'Travel Smarter with Olopo App', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Travel plans often feel like a luxury because of the time and money involved</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">With the Olopo app, you can turn your everyday purchases into travel rewards</span></li></ol><p><br></p>', 2, 1, '2025-06-08 11:20:13', '2025-06-08 11:20:13'),
(18, 5, 'Host, Promote & Empower Local Travel', '<p><span style=\"color: rgb(85, 85, 85);\">Join Olopo’s mission to promote local tourism, cultural experiences, and sustainable travel.</span></p><h5><strong style=\"color: rgb(85, 85, 85);\">You can:</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Offer homestay facilities</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">List farm tourism and nature-based experiences</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Share local adventures, food tours, and community-based activities</span></li></ol><h5><strong style=\"color: rgb(85, 85, 85);\">All through the Olopo App!</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Promote your services here</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Get free trainings from olopo business experts</span></li></ol><p><br></p>', 3, 1, '2025-06-08 11:20:13', '2025-06-08 11:20:13'),
(19, 5, 'Why Choose Olopo for Travel?', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Travel affordably using points, not just cash</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Support local communities and explore authentic culture</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Promote your region as a local host and earn</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Learn and grow with free training on tourism entrepreneurship</span></li></ol><p><br></p>', 4, 1, '2025-06-08 11:20:14', '2025-06-08 11:20:14'),
(20, 6, 'What Are Olopo Coupons?', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(85, 85, 85);\">Olopo Coupons rewards you with special discounts and offers from your favorite brands and local stores</span></p>', 1, 1, '2025-06-08 11:21:40', '2025-06-08 11:21:40'),
(21, 6, 'How to Get Coupons', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Browse all valid and available coupons in the Coupons section</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Buy coupons using your Olopo loyalty points or cash</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Save them and redeem later at participating stores or platforms</span></li></ol><p><br></p>', 2, 1, '2025-06-08 11:21:40', '2025-06-08 11:21:40'),
(22, 6, 'Why Use Olopo Coupons?', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">More savings on top of your rewards</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Targeted offers based on your location and interests</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Flexible redemption use when it suits you!</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Perfect for everyday shopping or special purchases</span></li></ol><p><br></p>', 3, 1, '2025-06-08 11:21:40', '2025-06-08 11:21:40'),
(23, 7, 'How It Works:', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Shop as usual through the Olopo app, online partners, or in-store.</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Earn loyalty points with every purchase</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Use your points to purchase movie tickets, no cash needed!</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Head to the theatre, grab your popcorn, and enjoy:).</span></li></ol><p><br></p>', 1, 1, '2025-06-08 11:24:02', '2025-06-08 11:24:02'),
(24, 7, 'Why You\'ll Love It:', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(85, 85, 85);\">Olopo points can be easily redeemed in 2 ways:</span></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Spend less, watch more</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Redeem points for real movie tickets</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Save your money for snacks instead :)</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Discover new releases and old favorites, all in Olopo App</span></li></ol><p><span style=\"color: rgb(85, 85, 85);\">Still Wondering How to Earn Points?</span></p><p><a href=\"https://www.olopo.app/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">https://www.olopo.app/</a></p>', 2, 1, '2025-06-08 11:24:02', '2025-06-08 11:24:02'),
(25, 8, 'Are you Planning an event?', '<h5><strong style=\"color: rgb(85, 85, 85);\">For Event Organizers</strong></h5><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">List your event and sell tickets faster</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Accept points as a form of payment</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Get better visibility and smoother ticketing</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Ideal for concerts, expos, community events, and private shows</span></li></ol><p><br></p>', 1, 1, '2025-06-08 11:25:16', '2025-06-08 11:25:16'),
(26, 8, 'Why Use Olopo for Events?', '<ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Attendees: Save money, attend more</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Organizers: Sell smarter, engage better</span></li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span><span style=\"color: rgb(85, 85, 85);\">Community: Connect people through experiences</span></li></ol><p class=\"ql-align-center\"><span style=\"color: rgb(85, 85, 85);\">From entry to experience Olopo makes every event more rewarding</span></p><p><br></p>', 2, 1, '2025-06-08 11:25:16', '2025-06-08 11:25:16'),
(27, 8, 'Got loyalty points or shopping points?', '<p>Great! You can redeem them to purchase entry passes for a wide range of events concerts, festivals, exhibitions, workshops, and more  No need to spend cash when your points can open the doors for you!</p>', 0, 1, '2025-06-13 12:57:53', '2025-06-13 12:57:53');

-- --------------------------------------------------------

--
-- Table structure for table `category_detail_images`
--

CREATE TABLE `category_detail_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_detail_id` bigint(20) UNSIGNED NOT NULL,
  `gallery_id` bigint(20) UNSIGNED NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_detail_images`
--

INSERT INTO `category_detail_images` (`id`, `category_detail_id`, `gallery_id`, `sort_order`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 0, '2025-06-08 11:56:18', '2025-06-08 11:56:18');

-- --------------------------------------------------------

--
-- Table structure for table `category_detail_videos`
--

CREATE TABLE `category_detail_videos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_detail_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `video_path` varchar(255) NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_detail_videos`
--

INSERT INTO `category_detail_videos` (`id`, `category_detail_id`, `title`, `video_path`, `thumbnail`, `description`, `sort_order`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'test', 'category-details/videos/EZjzMPdy0w4GWclZlCMgAIvYVMShVeL5h9uT7NbE.mp4', NULL, 'test', 0, 1, '2025-06-08 11:07:47', '2025-06-08 11:07:47'),
(2, 6, 'test', 'category-details/videos/yZXRXT0y6ggNs42KHX1vq76hndT3kTbTaczro9po.mp4', NULL, 'test', 0, 1, '2025-06-08 11:22:11', '2025-06-08 11:22:11');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `alt_text` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `title`, `image_path`, `alt_text`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'testing', 'gallery/0XB2FE37ZfXKtrH6EXPLaxEW9WqjLnsRkEdLovib.png', 'test', NULL, 1, '2025-06-08 09:33:17', '2025-06-08 09:46:12');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2021_10_26_062609_create_projects_table', 1),
(3, '2021_10_26_062628_create_tasks_table', 1),
(4, '2021_11_09_055917_create_password_resets', 1),
(11, '2025_06_08_142343_create_categories_table', 2),
(12, '2025_06_08_142518_create_category_details_table', 2),
(13, '2025_06_08_142536_create_gallery_table', 2),
(14, '2025_06_08_142604_create_category_detail_accordions_table', 2),
(15, '2025_06_08_142621_create_category_detail_videos_table', 2),
(16, '2025_06_08_142637_create_category_detail_images_table', 2),
(17, '2025_06_09_044441_create_site_settings', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `is_enabled` tinyint(4) DEFAULT NULL,
  `is_used` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `site_settings`
--

CREATE TABLE `site_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `privacy_policy` longtext DEFAULT NULL,
  `terms_conditions` longtext DEFAULT NULL,
  `footer_address` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `site_settings`
--

INSERT INTO `site_settings` (`id`, `privacy_policy`, `terms_conditions`, `footer_address`, `created_at`, `updated_at`) VALUES
(1, '<h2>Introduction</h2><p>This Privacy Policy explains our policies and procedures regarding the collection, use, and disclosure of your information when you use our Service. It informs you about your privacy rights and how the law protects you. By using the Service, you agree to the collection and use of information as described in this Privacy Policy.</p><h2>Interpretation and Definitions</h2><h2>Interpretation</h2><p>Words with the initial letter capitalized have meanings defined below. These definitions have the same meaning whether they appear in singular or plural form.</p><h2>Definitions</h2><p>For the purposes of this Privacy Policy:</p><ul><li><strong>Merchant</strong>&nbsp;- A person or company involved in wholesale trade, particularly one dealing with foreign countries or supplying goods to a specific trade.</li><li><strong>Account</strong>&nbsp;- A unique account created for you to access our Service or parts of our Service.</li><li><strong>Business</strong>&nbsp;- Refers to the Company as the legal entity that collects consumers\' personal information and determines the purposes and means of processing this information, or on behalf of which such information is collected. This entity operates in India.</li><li><strong>Company</strong>&nbsp;- Referred to as \"the Company,\" \"We,\" \"Us,\" or \"Our\" in this Agreement. The Company is the Data Controller for the purpose of this Privacy Policy.</li><li><strong>Country</strong>&nbsp;- Refers to India and may include international countries.</li><li><strong>Consumer</strong>&nbsp;- Any person who buys a product or hires/avails of a service for consideration as per the Consumer Protection Act, 1986. It includes any user of such goods or beneficiary of such services provided with the buyer\'s approval.</li><li><strong>Personal Data</strong>&nbsp;- Any information relating to an identified or identifiable individual.</li><li><strong>Service</strong>&nbsp;- Refers to the services provided by our mobile application.</li><li><strong>Service Provider</strong>&nbsp;- Any individual, private agency, company, partnership, sole proprietorship, or other body authorized by the appropriate Government to offer services through electronic means.</li><li><strong>Usage Data</strong>&nbsp;- Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li><li><strong>Website</strong>&nbsp;- Refers to aspiromtechnologies.com</li><li><strong>You</strong>&nbsp;- The individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service.</li></ul><h2>Collecting and Using Your Personal Data</h2><h2>Types of Data Collected</h2><h2>Personal Data</h2><p>While using our Service, we may ask you to provide certain personally identifiable information, which may include, but is not limited to:</p><ul><li>Company Name</li><li>Email address</li><li>GST Details</li><li>PAN Card Details</li><li>Bank Account details</li><li>Phone number</li><li>Address, State, Postal code, City</li></ul><h2>Usage Data</h2><p>Usage Data is collected automatically when using the Service. This may include information such as your device\'s IP address, browser type, browser version, pages of our Service you visit, time and date of your visit, time spent on those pages, unique device identifiers, and other diagnostic data. When accessing the Service via a mobile device, we may collect information such as the location of your device, contacts, gallery, relevant applications, device type, unique device ID, IP address, mobile operating system, and browser type.</p><h2>API Based Tokens for Secure User Authentication</h2><ul><li>Authentication establishes the identity of the user and verifies that the user is who (or what) it says it is. Authentication protects your resources by denying access to unauthenticated users.</li><li>Authentication gives each user a distinct identity, protecting your data and theirs. Applications that require users to create an account give each user a unique profile, which is what determines the data shown to the user. For example, PayPal requires users to sign in before displaying their account balance and transactions.</li></ul><h2>Use of Your Personal Data</h2><p>The Company may use Personal Data for the following purposes:</p><ul><li><strong>To provide and maintain our Service:</strong>&nbsp;Including monitoring the usage of our Service.</li><li><strong>To manage your account:</strong>&nbsp;To manage your registration as a merchant of the Service and provide access to various functionalities available to registered users.</li><li><strong>To contact you:</strong>&nbsp;By email, telephone calls, SMS, or other forms of electronic communication.</li><li><strong>To provide you with news and offers:</strong>&nbsp;Regarding our services and events, similar to those you have already purchased or enquired about unless you opt out.</li><li><strong>To manage your requests:</strong>&nbsp;To attend and manage requests made by you.</li><li><strong>For other purposes:</strong>&nbsp;Such as data analysis, identifying usage trends, evaluating promotional campaigns, and improving our Service, products, services, marketing, and consumer experience.</li></ul><h2>Sharing Your Personal Information</h2><p>We may share your personal information with:</p><ul><li>Service Providers</li><li>Payment processors</li><li>Our affiliates</li><li>Our business partners</li><li>Third-party vendors authorized by you or your agents in connection with products or services we provide to you.</li></ul><h2>Requests and Verification</h2><p>To request clarification or information, you must:</p><ul><li>Provide sufficient information to verify your identity and authority.</li><li>Describe your request in sufficient detail to allow us to understand, evaluate, and respond.</li></ul><p>We will disclose and deliver the requested information free of charge within 45 days of receiving your verifiable request, extendable by an additional 45 days with prior notice if necessary.</p><h2>Transfer of Your Personal Data</h2><p>Your data, including personal information, is processed at the Company\'s offices and other locations involved in the process. This means your data might be transferred to and stored on computers outside your state, province, or country, where data protection laws might be different.</p><p>By agreeing to this Privacy Policy and providing your information, you consent to this transfer.</p><p>The Company will take all reasonable steps to ensure your data is handled securely and according to this Privacy Policy. No data transfer will occur unless the receiving organization or country has adequate data protection measures in place.</p><h2>Disclosure of Your Personal Data</h2><h2>Business Transactions</h2><p>If the Company is involved in a merger, acquisition, or sale of assets, your personal data may be transferred. We will notify you before your data is transferred and becomes subject to a different Privacy Policy.</p><h2>Law Enforcement</h2><p>The Company may disclose your personal data if required by law or in response to valid requests from public authorities (e.g., a court or government agency).</p><h2>Other Legal Requirements</h2><p>The Company may disclose your personal data if it believes in good faith that such action is necessary to:</p><ul><li>Comply with a legal obligation</li><li>Protect and defend the Company\'s rights or property</li><li>Prevent or investigate possible wrongdoing related to the service</li><li>Protect the personal safety of service users or the public</li><li>Protect against legal liability</li></ul><h2>Security of Your Personal Data</h2><p>The security of your personal data is important to us, but no method of internet transmission or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.</p><h2>Detailed Information on the Processing of Your Personal Data</h2><p>Our service providers may access your personal data. These third-party vendors collect, store, use, process, and transfer information about your activity on our service according to their privacy policies.</p><h2>Analytics</h2><p>We may use third-party service providers to monitor and analyse the use of our service.</p><h2>Email Marketing</h2><p>We may use your personal data to contact you with newsletters, marketing, promotional materials, and other information of interest. You can opt out of these communications by following the unsubscribe link or instructions in any email we send or by contacting us.</p><h2>Payments</h2><p>We may offer paid products and services. In such cases, we use third-party payment processors. We do not store or collect your payment card details; this information is provided directly to our payment processors, whose use of your personal information is governed by their privacy policies.</p><h2>Legal Basis for Processing Personal Data</h2><p>We may process your personal data under these conditions:</p><ul><li><strong>Consent:</strong>&nbsp;You have given us permission to process your data for specific reasons.</li><li><strong>Performance of a contract:</strong>&nbsp;We need your data to fulfill a contract or pre-contractual obligations.</li><li><strong>Legal obligations:</strong>&nbsp;We need to process your data to comply with the law.</li><li><strong>Vital interests:</strong>&nbsp;We need to process your data to protect your vital interests or those of another person.</li><li><strong>Public interests:</strong>&nbsp;We process your data for tasks in the public interest or official authority.</li><li><strong>Legitimate interests:</strong>&nbsp;We process your data for our legitimate business interests.</li></ul><p>We can explain the specific legal basis for processing your data and whether providing your data is legally or contractually required.</p><h2>Your Rights</h2><p>We respect your privacy and rights regarding your personal data.</p><ul><li><strong>Access your data:</strong>&nbsp;You can access, update, or delete your data in your account settings or by contacting us.</li><li><strong>Correct your data:</strong>&nbsp;You can ask us to correct any incomplete or inaccurate information.</li><li><strong>Object to processing:</strong>&nbsp;You can object to our processing of your data if it affects you.</li><li><strong>Request erasure:</strong>&nbsp;You can ask us to delete your data if there is no reason for us to keep it.</li><li><strong>Request data transfer:</strong>&nbsp;We can provide your data in a machine-readable format to you or a third party.</li><li><strong>Withdraw consent:</strong>&nbsp;You can withdraw your consent for us to use your data, though this may limit certain services we provide.</li></ul><h2>Do Not Share My Personal Information</h2><p>Upon receiving a verifiable merchant request, we will not share your information with third parties without consent. To exercise your rights, we may need to verify your identity. We will respond as quickly as possible.</p><p>If you have any privacy concerns, please contact us.</p><h2>Changes to This Privacy Policy</h2><p>We may update our Privacy Policy from time to time. Changes will be posted on this page, and we will notify you via email and/or a prominent notice on our Service prior to the changes becoming effective. You are advised to review this Privacy Policy periodically.</p><h2>Contact Us</h2><p>If you have any questions about this Privacy Policy, you can contact us:</p><ul><li>By visiting this page on our website:&nbsp;<a href=\"https://aspiromtechnologies.com/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(94, 114, 228);\">aspiromtechnologies.com</a></li><li>By sending us an email:&nbsp;<a href=\"mailto:info@olopo.app\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(94, 114, 228);\">info@olopo.app</a></li></ul><p><br></p>', '<p>Last Updated: May, 2025</p><h2>1. Acceptance of Terms</h2><p>By using Olopo, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any applicable laws and regulations.</p><h2>2. Use of Service</h2><p>You agree to use the app solely for personal, non-commercial purposes. You may not reproduce, distribute, or modify content from Olopo without explicit permission.</p><h2>3. User Accounts</h2><p>When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials.</p><h2>4. Prohibited Activities</h2><ul><li>Sharing pirated or unauthorized content</li><li>Attempting to breach security or access unauthorized areas</li><li>Posting harmful, abusive, or illegal content</li></ul><h2>5. Intellectual Property</h2><p>All content, trademarks, and branding on Olopo are the property of their respective owners. Unauthorized use may violate copyright laws.</p><h2>6. Modifications</h2><p>We reserve the right to update or modify these Terms at any time. Continued use of the app after changes implies your acceptance of the revised terms.</p><h2>7. Termination</h2><p>We may suspend or terminate your account if we believe you\'ve violated any part of these Terms. Termination may result in loss of access to your profile or watchlist.</p><h2>8. Limitation of Liability</h2><p>Olopo is provided \"as is.\" We are not liable for any damages arising from your use of the service, including data loss or downtime.</p><h2>9. Governing Law</h2><p>These Terms are governed by the laws of your country or region, and any disputes shall be handled in the appropriate jurisdiction.</p><h2>10. Contact Us</h2><p>If you have any questions regarding these Terms, please contact us at&nbsp;<a href=\"mailto:support@olopo.app\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(94, 114, 228);\">support@olopo.app</a>.</p>', 'Syama Dynamics, 6th Floor, Vytila, Eranakulam, Kerala, India', '2025-06-09 00:19:17', '2025-06-09 00:38:24');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `headline` varchar(255) DEFAULT NULL,
  `about_me` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `profile_pic` varchar(255) NOT NULL DEFAULT 'default.jpg',
  `confirmation_code` varchar(255) DEFAULT NULL,
  `timezone` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `confirmed` tinyint(1) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `password_changed_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `last_login_at` timestamp NULL DEFAULT NULL,
  `mobile_notification` tinyint(1) NOT NULL DEFAULT 1,
  `email_notification` tinyint(1) NOT NULL DEFAULT 1,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `last_login_ip` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `first_name`, `last_name`, `headline`, `about_me`, `address`, `city`, `country`, `postal_code`, `phone_number`, `profile_pic`, `confirmation_code`, `timezone`, `active`, `confirmed`, `status`, `password_changed_at`, `deleted_at`, `last_login_at`, `mobile_notification`, `email_notification`, `email_verified_at`, `last_login_ip`) VALUES
(1, 'Dr. Dedrick Dooley I', 'admin@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL),
(2, 'Miss Jewell Skiles', 'schuyler79@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL),
(3, 'Althea Aufderhar', 'rjacobi@example.org', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL),
(4, 'Otilia Rodriguez', 'randi55@example.net', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL),
(5, 'Garth Brekke', 'ybernhard@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL),
(6, 'Dr. Candido Cassin', 'watsica.ed@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL),
(7, 'Mr. Kip Daniel', 'christophe71@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL),
(8, 'Nella Stehr', 'wilkinson.may@example.org', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL),
(9, 'Brain Prohaska', 'beier.amparo@example.org', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL),
(10, 'Mr. Vincent King', 'boehm.eli@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'default.jpg', NULL, NULL, 1, 0, 1, NULL, NULL, NULL, 1, 1, '2025-06-05 19:26:04', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_details`
--
ALTER TABLE `category_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_details_category_id_foreign` (`category_id`);

--
-- Indexes for table `category_detail_accordions`
--
ALTER TABLE `category_detail_accordions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_detail_accordions_category_detail_id_foreign` (`category_detail_id`);

--
-- Indexes for table `category_detail_images`
--
ALTER TABLE `category_detail_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_detail_images_category_detail_id_foreign` (`category_detail_id`),
  ADD KEY `category_detail_images_gallery_id_foreign` (`gallery_id`);

--
-- Indexes for table `category_detail_videos`
--
ALTER TABLE `category_detail_videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_detail_videos_category_detail_id_foreign` (`category_detail_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_settings`
--
ALTER TABLE `site_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `category_details`
--
ALTER TABLE `category_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `category_detail_accordions`
--
ALTER TABLE `category_detail_accordions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `category_detail_images`
--
ALTER TABLE `category_detail_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category_detail_videos`
--
ALTER TABLE `category_detail_videos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `site_settings`
--
ALTER TABLE `site_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category_details`
--
ALTER TABLE `category_details`
  ADD CONSTRAINT `category_details_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `category_detail_accordions`
--
ALTER TABLE `category_detail_accordions`
  ADD CONSTRAINT `category_detail_accordions_category_detail_id_foreign` FOREIGN KEY (`category_detail_id`) REFERENCES `category_details` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `category_detail_images`
--
ALTER TABLE `category_detail_images`
  ADD CONSTRAINT `category_detail_images_category_detail_id_foreign` FOREIGN KEY (`category_detail_id`) REFERENCES `category_details` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `category_detail_images_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `category_detail_videos`
--
ALTER TABLE `category_detail_videos`
  ADD CONSTRAINT `category_detail_videos_category_detail_id_foreign` FOREIGN KEY (`category_detail_id`) REFERENCES `category_details` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
