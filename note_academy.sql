-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-04-2024 a las 21:26:08
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `note_academy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaturas`
--

CREATE TABLE `asignaturas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `id_grupo` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asignaturas`
--

INSERT INTO `asignaturas` (`id`, `nombre`, `id_grupo`, `createdAt`, `updatedAt`) VALUES
(477, 'MECANICA', 236, '2024-03-18', '2024-03-18'),
(478, 'sena', 238, '2024-03-19', '2024-03-19'),
(479, 'Español', 238, '2024-03-19', '2024-03-19'),
(480, 'Errores', 238, '2024-03-19', '2024-03-19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `codigo` varchar(50) DEFAULT NULL,
  `id_administrador` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`id`, `nombre`, `codigo`, `id_administrador`, `createdAt`, `updatedAt`) VALUES
(1, '11°4', '64b415081cbd1', 2, NULL, NULL),
(2, '11°4', '64b41932284e7', 12, NULL, NULL),
(3, '7°2', '64b5b53954821', 12, NULL, NULL),
(4, 'm', '64b77aadd8cc8', 2, NULL, NULL),
(5, 'k', '64b77abdddf7c', 2, NULL, NULL),
(6, 'kjh', '64b77ad0b37c4', 2, NULL, NULL),
(7, '12', '64bfb9c1ac8c4', 12, NULL, NULL),
(8, '12', '64bfba5c34ea8', 12, NULL, NULL),
(9, '12', '64bfbaef1bb0b', 12, NULL, NULL),
(10, '12', '64bfbb0800ab6', 12, NULL, NULL),
(11, '12', '64bfbb147887e', 12, NULL, NULL),
(12, '12', '64bfbb2e079e6', 12, NULL, NULL),
(13, '12', '64bfbb33c0d0c', 12, NULL, NULL),
(14, '12', '64bfbb3ae2669', 12, NULL, NULL),
(15, '12', '64bfbb5262d62', 12, NULL, NULL),
(16, '12', '64bfbb6940cc1', 12, NULL, NULL),
(17, '12', '64bfbbadd986f', 12, NULL, NULL),
(18, '12', '64bfbc42e34a5', 12, NULL, NULL),
(19, '12', '64bfbcc2f13f4', 12, NULL, NULL),
(20, '45', '64bfbd6aa2b18', 12, NULL, NULL),
(21, '3', '64bfbd7a40e90', 12, NULL, NULL),
(22, 'holaaaaa', '64bfbdba7570f', 12, NULL, NULL),
(23, '12', '64bfbe34dd233', 12, NULL, NULL),
(24, '12', '64bfbe5edb2dc', 12, NULL, NULL),
(25, '12', '64bfbe7177341', 12, NULL, NULL),
(26, '12', '64bfbeb5d3a13', 12, NULL, NULL),
(27, '12', '64bfbed10a98b', 12, NULL, NULL),
(28, '12', '64bfbf01c250f', 12, NULL, NULL),
(29, '12', '64bfc5067fe2e', 12, NULL, NULL),
(30, '12j,khgfd', '64bfc52ab959c', 12, NULL, NULL),
(31, '12', '64c01cc0b79b6', 12, NULL, NULL),
(32, 'mico', '64c0214aa0e65', 12, NULL, NULL),
(33, 'mico', '64c02171eb237', 12, NULL, NULL),
(34, 'mico', '64c0227a9e303', 12, NULL, NULL),
(35, 'mico', '64c022c3f193d', 12, NULL, NULL),
(36, 'kjhgfd', '64c102b7ebbe0', NULL, NULL, NULL),
(37, 'kjhgfd', '64c113caac0fd', NULL, NULL, NULL),
(38, 'kjhgfd', '64c114d3decbd', NULL, NULL, NULL),
(39, 'ilo', '64c115002d74d', NULL, NULL, NULL),
(40, 'ilo', '64c115970d50f', NULL, NULL, NULL),
(41, 'ilo', '64c1159b96427', NULL, NULL, NULL),
(42, 'ilo', '64c115b997911', NULL, NULL, NULL),
(43, 'ilooli', '64c115e6073b5', NULL, NULL, NULL),
(44, 'ilooli', '64c1187478f7b', NULL, NULL, NULL),
(45, 'ilooli', '64c119e7e3803', NULL, NULL, NULL),
(46, 'ilooli', '64c119f9e11b0', NULL, NULL, NULL),
(47, 'ilooli', '64c11bafcf4c7', NULL, NULL, NULL),
(48, 'ilooli', '64c11bb86029a', NULL, NULL, NULL),
(49, 'ilooli', '64c11c0d2541c', NULL, NULL, NULL),
(50, '12', '64c11d0319416', 12, NULL, NULL),
(51, '12', '64c11d1f78d3a', 12, NULL, NULL),
(52, '12', '64c11eb93ff57', 12, NULL, NULL),
(53, '12', '64c11ec24c203', 12, NULL, NULL),
(54, '12', '64c11f00d0d09', 12, NULL, NULL),
(55, '12', '64c11f9959e91', 12, NULL, NULL),
(56, '12', '64c1201a5d3fd', 12, NULL, NULL),
(57, '12', '64c1201c03c40', 12, NULL, NULL),
(58, '12', '64c1222b2563e', 12, NULL, NULL),
(59, '12', '64c122a25536c', 12, NULL, NULL),
(60, 'holaaa', '64cd6f46a2f6b', 12, NULL, NULL),
(61, 'mico', '64d502bd8a052', 12, NULL, NULL),
(62, '10°4', '64d68ca7ebb87', 12, NULL, NULL),
(63, 'BRO', '64d68f4cad7d7', 12, NULL, NULL),
(146, 'd', 'SGQoTCEx', 55, '2024-02-06', '2024-02-06'),
(147, 'd', '1EcyOc6f', 55, '2024-02-06', '2024-02-06'),
(148, 'd', 'k8sMsj5I', 55, '2024-02-06', '2024-02-06'),
(149, 'd', 'pjGf9a0Q', 55, '2024-02-06', '2024-02-06'),
(150, 'd', 'vf28sRqD', 55, '2024-02-06', '2024-02-06'),
(151, 'd', 'qjytcQNr', 55, '2024-02-06', '2024-02-06'),
(152, 'd', '9rPdP1XT', 55, '2024-02-06', '2024-02-06'),
(153, 'd', 'lq6RNKZE', 55, '2024-02-06', '2024-02-06'),
(154, 'd', 'mSYXw1qJ', 55, '2024-02-06', '2024-02-06'),
(155, 'd', 'V5oFngBo', 55, '2024-02-06', '2024-02-06'),
(156, 'd', 'ZFxiNCMj', 55, '2024-02-06', '2024-02-06'),
(157, 's', 'u8fmigpq', 55, '2024-02-06', '2024-02-06'),
(158, 's', 'ctTTZptf', 55, '2024-02-06', '2024-02-06'),
(159, 's', 'q89z4eeK', 55, '2024-02-06', '2024-02-06'),
(160, 's', 'ge8jg995', 55, '2024-02-06', '2024-02-06'),
(161, 'd', 'qGORoBbN', 55, '2024-02-06', '2024-02-06'),
(162, 'd', '0OuF6Kz6', 55, '2024-02-06', '2024-02-06'),
(163, 'd', 'j7NnMMhz', 55, '2024-02-06', '2024-02-06'),
(164, 'd', 'YdJgeF2v', 55, '2024-02-06', '2024-02-06'),
(165, 'd', 'Ov4Jq2UC', 55, '2024-02-06', '2024-02-06'),
(166, NULL, NULL, NULL, '2024-02-06', '2024-02-06'),
(167, 'd', '2iJ6p9li', 55, '2024-02-06', '2024-02-06'),
(168, NULL, NULL, NULL, '2024-02-06', '2024-02-06'),
(169, 'd', 'ccIkpHjy', 55, '2024-02-06', '2024-02-06'),
(170, NULL, NULL, NULL, '2024-02-06', '2024-02-06'),
(171, 'd', 'd5hRqUvx', 55, '2024-02-06', '2024-02-06'),
(172, NULL, NULL, NULL, '2024-02-06', '2024-02-06'),
(173, 'd', 'L9Qt3d3D', 55, '2024-02-06', '2024-02-06'),
(174, 'dsa', 'Qx1N16v2', 55, '2024-02-06', '2024-02-06'),
(175, 'dsa', 'LbvtuHlU', 55, '2024-02-06', '2024-02-06'),
(176, 'dsa', '6zXEbmTd', 55, '2024-02-06', '2024-02-06'),
(177, NULL, NULL, NULL, '2024-02-06', '2024-02-06'),
(178, 'dsa', 'omGwKSM6', 55, '2024-02-06', '2024-02-06'),
(179, NULL, NULL, NULL, '2024-02-06', '2024-02-06'),
(180, 'dsa', 'lXdm1W6d', 55, '2024-02-06', '2024-02-06'),
(181, NULL, NULL, NULL, '2024-02-06', '2024-02-06'),
(182, 'dsa', '09iuM7ot', 55, '2024-02-06', '2024-02-06'),
(183, NULL, NULL, NULL, '2024-02-06', '2024-02-06'),
(184, 'dsa', '6mJ3WUne', 55, '2024-02-06', '2024-02-06'),
(185, 'dsa', 'HdrloVTl', 55, '2024-02-06', '2024-02-06'),
(186, 'sas', 'fQuxTuID', 55, '2024-02-06', '2024-02-06'),
(187, 'd', 'GpI3gi7u', 56, '2024-02-07', '2024-02-07'),
(188, '11°5', 'h7pT6EsW', 57, '2024-02-07', '2024-02-07'),
(189, 'k', 'AqksVPxp', NULL, '2024-02-08', '2024-02-08'),
(190, 'k', 'cUVcLIc6', NULL, '2024-02-08', '2024-02-08'),
(191, 'k', 'mKCpP6Rj', NULL, '2024-02-08', '2024-02-08'),
(192, 'k', 'igZKg1vT', NULL, '2024-02-08', '2024-02-08'),
(193, 'k', 'NGgtOcI0', NULL, '2024-02-08', '2024-02-08'),
(194, 'k', '7ifZpbGS', NULL, '2024-02-08', '2024-02-08'),
(195, '10°5', 'k9cEgqD7', 59, '2024-02-08', '2024-02-08'),
(196, 'SENA', '39MwNZp8', 61, '2024-02-08', '2024-02-08'),
(197, '10-2', 'GKOSxP8c', 59, '2024-02-08', '2024-02-08'),
(198, 'L{KÑJILHUKJGH', 'IIbxythI', 59, '2024-02-08', '2024-02-08'),
(199, 'sdsd', 'oAhFbey9', 63, '2024-02-08', '2024-02-08'),
(200, 'r', 'wdVhmRtH', 64, '2024-02-09', '2024-02-09'),
(201, 's', 'GFqBdnaG', 12, '2024-02-09', '2024-02-09'),
(202, 'holi', '05CgDyJq', 67, '2024-02-09', '2024-02-09'),
(203, 'wsdwd', 'k7QgroNA', 68, '2024-02-09', '2024-02-09'),
(204, 'l', '54N4yuI1', 69, '2024-02-09', '2024-02-09'),
(205, '11°5', 'JmAqTrXL', 73, '2024-02-10', '2024-02-10'),
(206, 'ADSO', 'TxLNiPn5', 74, '2024-02-13', '2024-02-13'),
(207, 'holaa', 'VTyVOrmD', 12, '2024-02-14', '2024-02-14'),
(208, 'h', 'kc96Z9Wa', 12, '2024-02-14', '2024-02-14'),
(209, 'ljkh', '96Bxz8u9', 12, '2024-02-14', '2024-02-14'),
(210, 'Clase1', 'DhQqaCUa', 75, '2024-02-29', '2024-02-29'),
(211, 'm,', 'RyPuOBQJ', 57, '2024-03-03', '2024-03-03'),
(212, '3°1', 'jInUCtqg', 76, '2024-03-04', '2024-03-04'),
(213, '3-1', 'vmjNjRko', 76, '2024-03-04', '2024-03-04'),
(214, 'ihkuyt', 'DyByB3io', 76, '2024-03-04', '2024-03-04'),
(215, '11°4', 'DGpdLq9M', 76, '2024-03-04', '2024-03-04'),
(216, '3°1', 'NOlJCabr', 76, '2024-03-05', '2024-03-05'),
(217, 'ADSO', 'qU4c71DR', 77, '2024-03-05', '2024-03-05'),
(218, '2', '6JvdC2tl', 12, '2024-03-05', '2024-03-05'),
(219, 'ADSO', '4QaRgc42', 57, '2024-03-05', '2024-03-05'),
(220, 'SZS', 'mfXUQhFj', 12, '2024-03-05', '2024-03-05'),
(221, '10°5', 'lfS9KsZf', 78, '2024-03-06', '2024-03-06'),
(222, 'ADSO', 'u8n51Em8', 57, '2024-03-06', '2024-03-06'),
(223, 'a', 'zHeruT28', 78, '2024-03-06', '2024-03-06'),
(224, 'ADSO', 'E3hoTjAL', 79, '2024-03-06', '2024-03-06'),
(225, 'ADSO', 'KI0bj6AZ', 57, '2024-03-06', '2024-03-06'),
(226, 'j', 'v7t4YNqc', 57, '2024-03-08', '2024-03-08'),
(227, 'd', 'a6kTmYrk', 80, '2024-03-08', '2024-03-08'),
(228, 'wdfdscb', 'HUX1AzPi', 81, '2024-03-08', '2024-03-08'),
(229, '11°5', 'zTsB5yXV', 82, '2024-03-11', '2024-03-11'),
(230, 'poiujh', 'PE62ompS', 82, '2024-03-11', '2024-03-11'),
(231, 'ADSO', 'ZUfiGhKC', 73, '2024-03-13', '2024-03-13'),
(232, 'ADSO', 'Q4aXgoUe', 73, '2024-03-13', '2024-03-13'),
(233, 's', 'XWwpbn1L', 73, '2024-03-13', '2024-03-13'),
(234, 'ADSO', 'WJViasGb', 73, '2024-03-13', '2024-03-13'),
(235, 'ADSO', 'zUUAN8Jl', 12, '2024-03-14', '2024-03-14'),
(236, 'ADSO', 'cLEFGjJk', 12, '2024-03-17', '2024-03-17'),
(237, '', 'oxSC9sBF', 83, '2024-03-19', '2024-03-19'),
(238, '10°1', 'torni', 83, '2024-03-19', '2024-03-19'),
(239, 'ADSO', 'RiSNQMLd', 84, '2024-03-23', '2024-03-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recordatorios`
--

CREATE TABLE `recordatorios` (
  `id` int(11) NOT NULL,
  `id_asignatura` int(11) DEFAULT NULL,
  `id_grupo` int(11) DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `fecha_limite` date DEFAULT NULL,
  `prioridad` varchar(11) DEFAULT NULL,
  `archivo` varchar(500) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recordatorios`
--

INSERT INTO `recordatorios` (`id`, `id_asignatura`, `id_grupo`, `titulo`, `descripcion`, `fecha_limite`, `prioridad`, `archivo`, `createdAt`, `updatedAt`) VALUES
(483, 477, 236, 'pdwk{1wd', 'l{pkjoihugytgfd', '2024-03-05', 'Alta', '6536eba803023_brochure_note_academy(1)_NKV7EYYA (1)_1of0JMSU.pdf', '2024-03-18', '2024-03-18'),
(484, 477, 236, 'k', 'holadfhgh.ghg,mnm,', '2024-03-06', 'Alta', '6536eba803023_brochure_note_academy(1)_NKV7EYYA (1)_OYGo5dHw.pdf', '2024-03-18', '2024-03-18'),
(486, 479, 238, 'Adicion  a la pagina ', 'que el admin puede ver quien realizo el recordatorio.tambien que pueda observar si el estudiante observo el recordatorio.', '2024-03-18', 'Alta', '', '2024-03-19', '2024-03-19'),
(488, 480, 238, 'Errores ', 'ya soluciono un problema del recordatorio.que el admin puede ver quien realizo el recordatorio.tambien que pueda observar si el estudiante observo el recordatorio.', '2024-03-18', 'Alta', '', '2024-03-19', '2024-03-19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `documento` varchar(15) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `contrasena` varchar(50) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `documento`, `nombre`, `contrasena`, `createdAt`, `updatedAt`) VALUES
(2, '1013339284', 'jhojan andres rojas arroyave', 'jhojan12', NULL, NULL),
(3, '1024559876', 'daniel', 'daniel12', NULL, NULL),
(4, '1045557896', 'alexis', 'alexis12', NULL, NULL),
(5, '1128428690', 'sirley', 'sirly12', NULL, NULL),
(6, '1011397818', 'Alejo', 'jhojan', NULL, NULL),
(7, '1011393527', 'Emanuel', 'EMANUEL55', NULL, NULL),
(8, '1021804497', 'luis', 'luis12', NULL, NULL),
(9, '1024559873', 'Lina', 'Lina12', NULL, NULL),
(10, '1013339281', 'harold', 'harold12', NULL, NULL),
(11, '1011395225', 'Chammy', 'teamoandres', NULL, NULL),
(12, '1', 'a1', 'a1', NULL, NULL),
(13, '2', 'a2', 'a2', NULL, NULL),
(14, '3', 'a3', 'a3', NULL, NULL),
(15, '4', 'a4', 'a4', NULL, NULL),
(16, '5', 'a4', 'a5', NULL, NULL),
(17, '6', 'a6', 'a6', NULL, NULL),
(18, '7', 'a7', 'a7', NULL, NULL),
(19, '1234567890', 'johan', 'johan12', NULL, NULL),
(20, '0', 'a0', 'a0', NULL, NULL),
(21, '1011394580', 'edwin', 'edwin12', NULL, NULL),
(22, '40', 'aandrezz40', '40', NULL, NULL),
(23, '04', 'axian', '04', NULL, NULL),
(24, '11', 'p', 'p', NULL, NULL),
(25, '1234567812', 'sebastian', 'sebas12', NULL, NULL),
(26, '123', 'fer', 'fer12', NULL, NULL),
(27, '1011394757', 'Nicol', '1233456789', NULL, NULL),
(28, '1021804497', 'Wendy la mas bonita', 'wendyyjhojanlosmejoresamigosporsiempre', NULL, NULL),
(29, '14', 'W&A', 'W&A', NULL, NULL),
(30, '121', 'yusepe', 'holi', NULL, NULL),
(31, '00', 'pipi', 'pipi', NULL, NULL),
(32, '123321', 'johan', '12', NULL, NULL),
(33, '1234321', 'oli', 'oli', NULL, NULL),
(34, '111', 'sergio', '111', NULL, NULL),
(35, '15', 'oscar', '15', NULL, NULL),
(36, '16', 'isa', '16', NULL, NULL),
(37, '', '', '', NULL, NULL),
(38, '1025', 'ALIRIO', '123', NULL, NULL),
(39, '1234432', 'pilo', '12', NULL, NULL),
(40, '12345543', 'nico', '12', NULL, NULL),
(41, '191', 'andres', '191', NULL, NULL),
(42, '191', 'fico', '1', NULL, NULL),
(43, '181', 'pato', '1', NULL, NULL),
(44, '171', 'alex', '1', NULL, NULL),
(45, '10120', 'sol', '10120', NULL, NULL),
(46, '7171', 'bros', '7171', NULL, NULL),
(47, '7654', 'kjhglkkjh', 'ñoiu', NULL, NULL),
(48, NULL, NULL, NULL, '2024-02-04', '2024-02-04'),
(49, '444', '444', '444', '2024-02-04', '2024-02-04'),
(50, '444', '444', '444', '2024-02-04', '2024-02-04'),
(51, NULL, 'www', NULL, '2024-02-05', '2024-02-05'),
(52, NULL, '3333', NULL, '2024-02-05', '2024-02-05'),
(53, '113322', 'torny', '113322', '2024-02-05', '2024-02-05'),
(54, '112233', 'tony', '112233', '2024-02-05', '2024-02-05'),
(55, '1122333', 'tony', '1122333', '2024-02-05', '2024-02-05'),
(56, '1033180805', 'sergio', '1033180805', '2024-02-06', '2024-02-06'),
(57, '1012229284', 'manuela', 'manuela12', '2024-02-07', '2024-02-07'),
(58, '666', 'xz', '666', '2024-02-08', '2024-02-08'),
(59, '1020', 'sebas', '1020', '2024-02-08', '2024-02-08'),
(60, '1018', 'gg', '1018', '2024-02-08', '2024-02-08'),
(61, '101010', 'hj', '101010', '2024-02-08', '2024-02-08'),
(62, '1020', 'samuel', '1020', '2024-02-08', '2024-02-08'),
(63, '3434', '3434', '3434', '2024-02-08', '2024-02-08'),
(64, '4340', '4340', '4340', '2024-02-09', '2024-02-09'),
(65, '1', 'a1', 'a1', '2024-02-09', '2024-02-09'),
(66, '12093', 'nuevo', '12093', '2024-02-09', '2024-02-09'),
(67, '34345', 'extra', '3434', '2024-02-09', '2024-02-09'),
(68, '56', 'rick', '56', '2024-02-09', '2024-02-09'),
(69, '54', '1012229284', '54', '2024-02-09', '2024-02-09'),
(70, '2209', 'prevent', '2209', '2024-02-10', '2024-02-10'),
(71, '101222', 'GG', '101222', '2024-02-10', '2024-02-10'),
(72, '3535345', 'Lina Rojas', '3535345', '2024-02-10', '2024-02-10'),
(73, '1023632512', 'Manuela', 'manu12', '2024-02-10', '2024-02-10'),
(74, '9768', 'santiiii', '9768', '2024-02-13', '2024-02-13'),
(75, '1033333333', 'David', '123', '2024-02-29', '2024-02-29'),
(76, '101792977', 'Isabel Arroyave', '12', '2024-03-04', '2024-03-04'),
(77, '383', 'Luisa', '123', '2024-03-05', '2024-03-05'),
(78, '1020455336', 'Lorena arroyave', 'lore12', '2024-03-06', '2024-03-06'),
(79, '10205', 'Matthew', '123', '2024-03-06', '2024-03-06'),
(80, 'r', '1012229284', 'manuela12', '2024-03-08', '2024-03-08'),
(81, 'sjkhgfa', '1012229284', 'manuela12', '2024-03-08', '2024-03-08'),
(82, '1023632511', 'Valery', 'VA12', '2024-03-11', '2024-03-11'),
(83, '101139781888', 'TORNI', 'hola123', '2024-03-19', '2024-03-19'),
(84, '1001', 'andres', '1234', '2024-03-23', '2024-03-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_grupos`
--

CREATE TABLE `usuarios_grupos` (
  `id_usuario` int(11) NOT NULL,
  `id_grupo` int(11) NOT NULL,
  `es_administrador` int(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios_grupos`
--

INSERT INTO `usuarios_grupos` (`id_usuario`, `id_grupo`, `es_administrador`, `createdAt`, `updatedAt`) VALUES
(2, 6, 1, NULL, NULL),
(3, 3, 1, NULL, NULL),
(4, 4, 1, NULL, NULL),
(5, 5, 0, NULL, NULL),
(8, 1, 1, NULL, NULL),
(8, 42, 1, NULL, NULL),
(9, 5, 0, NULL, NULL),
(10, 5, 0, NULL, NULL),
(11, 5, 1, NULL, NULL),
(12, 236, 2, '2024-03-17', '2024-03-17'),
(13, 62, 0, NULL, NULL),
(14, 43, 1, NULL, NULL),
(15, 21, 1, NULL, NULL),
(16, 9, 1, NULL, NULL),
(17, 10, 1, NULL, NULL),
(18, 42, 1, NULL, NULL),
(20, 12, 0, NULL, NULL),
(21, 13, 1, NULL, NULL),
(22, 14, 1, NULL, NULL),
(23, 14, 1, NULL, NULL),
(24, 15, 1, NULL, NULL),
(25, 14, 0, NULL, NULL),
(26, 14, 0, NULL, NULL),
(27, 19, 1, NULL, NULL),
(29, 20, 1, NULL, NULL),
(30, 25, 1, NULL, NULL),
(31, 23, 1, NULL, NULL),
(32, 25, 0, NULL, NULL),
(33, 30, 1, NULL, NULL),
(34, 32, 1, NULL, NULL),
(35, 34, 1, NULL, NULL),
(36, 35, 1, NULL, NULL),
(38, 40, 1, NULL, NULL),
(39, 45, 1, NULL, NULL),
(40, 48, 0, NULL, NULL),
(41, 46, 1, NULL, NULL),
(55, 184, 1, '2024-02-06', '2024-02-06'),
(55, 185, 1, '2024-02-06', '2024-02-06'),
(55, 186, 1, '2024-02-06', '2024-02-06'),
(56, 187, 1, '2024-02-07', '2024-02-07'),
(57, 229, 0, '2024-03-11', '2024-03-11'),
(59, 195, 1, '2024-02-08', '2024-02-08'),
(59, 197, 1, '2024-02-08', '2024-02-08'),
(59, 198, 1, '2024-02-08', '2024-02-08'),
(61, 196, 1, '2024-02-08', '2024-02-08'),
(63, 238, 1, '2024-03-19', '2024-03-19'),
(64, 200, 1, '2024-02-09', '2024-02-09'),
(67, 202, 1, '2024-02-09', '2024-02-09'),
(68, 203, 1, '2024-02-09', '2024-02-09'),
(69, 204, 1, '2024-02-09', '2024-02-09'),
(70, 199, 0, '2024-02-10', '2024-02-10'),
(71, 204, 0, '2024-02-10', '2024-02-10'),
(72, 204, 0, '2024-02-10', '2024-02-10'),
(73, 234, 2, '2024-03-13', '2024-03-13'),
(74, 206, 1, '2024-02-13', '2024-02-13'),
(75, 211, 1, '2024-03-04', '2024-03-04'),
(76, 216, 2, '2024-03-05', '2024-03-05'),
(77, 217, 2, '2024-03-05', '2024-03-05'),
(78, 223, 2, '2024-03-06', '2024-03-06'),
(79, 224, 2, '2024-03-06', '2024-03-06'),
(80, 227, 2, '2024-03-08', '2024-03-08'),
(81, 228, 2, '2024-03-08', '2024-03-08'),
(82, 230, 2, '2024-03-11', '2024-03-11'),
(83, 238, 2, '2024-03-19', '2024-03-19'),
(84, 239, 2, '2024-03-23', '2024-03-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_recordatorios`
--

CREATE TABLE `usuarios_recordatorios` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_recordatorio` int(11) DEFAULT NULL,
  `realizado` tinyint(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios_recordatorios`
--

INSERT INTO `usuarios_recordatorios` (`id`, `id_usuario`, `id_recordatorio`, `realizado`, `createdAt`, `updatedAt`) VALUES
(451, 12, 483, 1, '2024-03-18', '2024-03-18'),
(452, 12, 484, 1, '2024-03-18', '2024-03-18'),
(454, 83, 486, 0, '2024-03-19', '2024-03-19'),
(456, 83, 488, 0, '2024-03-19', '2024-03-19');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_grupo` (`id_grupo`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD KEY `id_administrador` (`id_administrador`);

--
-- Indices de la tabla `recordatorios`
--
ALTER TABLE `recordatorios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_asignatura` (`id_asignatura`),
  ADD KEY `id_grupo` (`id_grupo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios_grupos`
--
ALTER TABLE `usuarios_grupos`
  ADD PRIMARY KEY (`id_usuario`,`id_grupo`),
  ADD KEY `id_grupo` (`id_grupo`);

--
-- Indices de la tabla `usuarios_recordatorios`
--
ALTER TABLE `usuarios_recordatorios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_recordatorio` (`id_recordatorio`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=487;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;

--
-- AUTO_INCREMENT de la tabla `recordatorios`
--
ALTER TABLE `recordatorios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=491;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de la tabla `usuarios_recordatorios`
--
ALTER TABLE `usuarios_recordatorios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=459;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  ADD CONSTRAINT `asignaturas_ibfk_1` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id`);

--
-- Filtros para la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD CONSTRAINT `grupos_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `recordatorios`
--
ALTER TABLE `recordatorios`
  ADD CONSTRAINT `recordatorios_ibfk_1` FOREIGN KEY (`id_asignatura`) REFERENCES `asignaturas` (`id`),
  ADD CONSTRAINT `recordatorios_ibfk_2` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id`);

--
-- Filtros para la tabla `usuarios_grupos`
--
ALTER TABLE `usuarios_grupos`
  ADD CONSTRAINT `usuarios_grupos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `usuarios_grupos_ibfk_2` FOREIGN KEY (`id_grupo`) REFERENCES `grupos` (`id`);

--
-- Filtros para la tabla `usuarios_recordatorios`
--
ALTER TABLE `usuarios_recordatorios`
  ADD CONSTRAINT `usuarios_recordatorios_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `usuarios_recordatorios_ibfk_2` FOREIGN KEY (`id_recordatorio`) REFERENCES `recordatorios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
