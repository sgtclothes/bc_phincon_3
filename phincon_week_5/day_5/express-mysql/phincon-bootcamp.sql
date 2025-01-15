/*
 Navicat Premium Data Transfer

 Source Server         : MySQL Server
 Source Server Type    : MySQL
 Source Server Version : 80040
 Source Host           : localhost:3306
 Source Schema         : phincon-bootcamp

 Target Server Type    : MySQL
 Target Server Version : 80040
 File Encoding         : 65001

 Date: 13/01/2025 11:44:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for advisors
-- ----------------------------
DROP TABLE IF EXISTS `advisors`;
CREATE TABLE `advisors`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `advisor_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `faculty` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of advisors
-- ----------------------------
INSERT INTO `advisors` VALUES (1, 'John Applessed', 'Faculty of Computer Science and Information Technology');
INSERT INTO `advisors` VALUES (2, 'Bob', 'Faculty of Computer Science and Information Technology');
INSERT INTO `advisors` VALUES (5, 'Jordy', 'Faculty of Science');

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `stock` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT '2025-01-13 03:51:03',
  `updatedAt` datetime NOT NULL DEFAULT '2025-01-13 03:51:03',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('6b3cbffc-c17f-4bfa-b977-fbcea3cc1e3f', 'Radio', 2500000, 'Electronics', 20, '2025-01-13 03:51:03', '2025-01-13 03:51:03');
INSERT INTO `products` VALUES ('8685538c-fb44-4cf4-8bd1-2e3aef12a4d7', 'Television', 3000000, 'Electronics', 10, '2025-01-13 03:51:03', '2025-01-13 03:51:03');
INSERT INTO `products` VALUES ('cf22722e-1a04-4a4a-becb-814dfbcb7731', 'Lemari', 20000000, 'Dekorasi', 500, '2025-01-13 04:21:33', '2025-01-13 04:21:33');
INSERT INTO `products` VALUES ('e1e217c2-27f3-4935-88e8-c8fba1442e5e', 'Laci', 20000000, 'Dekorasi', 500, '2025-01-13 04:24:02', '2025-01-13 04:24:02');

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20250113023658-create-product.js');

-- ----------------------------
-- Table structure for student_scores
-- ----------------------------
DROP TABLE IF EXISTS `student_scores`;
CREATE TABLE `student_scores`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `student_id` int NULL DEFAULT NULL,
  `subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `score` float NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  FULLTEXT INDEX `fulltext_subject_idx`(`subject`)
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student_scores
-- ----------------------------
INSERT INTO `student_scores` VALUES (1, 'John Doe', 1, 'Math', 80);
INSERT INTO `student_scores` VALUES (2, 'John Doe', 1, 'English', 90);
INSERT INTO `student_scores` VALUES (3, 'Jane Doe', 2, 'Math', 85);
INSERT INTO `student_scores` VALUES (4, 'Jane Doe', 2, 'English', 75);
INSERT INTO `student_scores` VALUES (5, 'Average Joe', 3, 'Math', 75);
INSERT INTO `student_scores` VALUES (6, 'Average Joe', 3, 'English', 95);
INSERT INTO `student_scores` VALUES (8, 'Alice A', 4, 'English', 85);

-- ----------------------------
-- Table structure for student_scores_json
-- ----------------------------
DROP TABLE IF EXISTS `student_scores_json`;
CREATE TABLE `student_scores_json`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `student_id` int NULL DEFAULT NULL,
  `score` json NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `student_id`(`student_id`) USING BTREE,
  CONSTRAINT `student_scores_json_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student_scores_json
-- ----------------------------
INSERT INTO `student_scores_json` VALUES (3, 'Jane Doe', 5, '{\"math\": 90}');
INSERT INTO `student_scores_json` VALUES (4, 'Alice A', 6, '{\"math\": 90, \"physics\": 85}');
INSERT INTO `student_scores_json` VALUES (5, 'Average Joe', 7, '{\"math\": 100, \"english\": 85, \"physics\": 70}');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `admission_year` int NULL DEFAULT NULL,
  `major` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `advisor_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `advisor_id`(`advisor_id`) USING BTREE,
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`advisor_id`) REFERENCES `advisors` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES (5, 'Jane Doe', 2018, 'Computer Science', 1);
INSERT INTO `students` VALUES (6, 'Alice A', 2018, 'Computer Science', 2);
INSERT INTO `students` VALUES (7, 'Average Joe', 2018, 'Game Design', 2);
INSERT INTO `students` VALUES (9, 'Joe Sandy', 2024, 'Physics', NULL);
INSERT INTO `students` VALUES (10, 'Sandhika Galih', 2025, 'Programming', NULL);
INSERT INTO `students` VALUES (11, 'Bokir', 2018, 'Computer Science', NULL);

SET FOREIGN_KEY_CHECKS = 1;
