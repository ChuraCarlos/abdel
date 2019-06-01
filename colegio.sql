-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-08-2018 a las 02:46:55
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `colegio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad`
--

CREATE TABLE `actividad` (
  `id_actividad` int(100) NOT NULL,
  `nombre_actividad` varchar(200) DEFAULT NULL,
  `hora_actividad` varchar(50) DEFAULT NULL,
  `responsable` varchar(100) DEFAULT NULL,
  `fecha_actividad` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `actividad`
--

INSERT INTO `actividad` (`id_actividad`, `nombre_actividad`, `hora_actividad`, `responsable`, `fecha_actividad`) VALUES
(1, 'dia del maestro', '10:12', 'docentes', '2018-12-01'),
(2, 'AmbientaciÃ³n de Nuestra InstituciÃ³n para el proyecto de valores', '10:00', 'Grupo valores', '2018-08-21'),
(3, 'DÃ­a del Folclore', '08:00', 'Grupo valores', '2018-08-22'),
(4, 'ProyecciÃ³n Social: Beneficencia PÃºblica de Ilo', '10:00', 'Grupo valores', '2018-08-24'),
(5, 'ProyecciÃ³n social a Cuna mÃ¡s â€Mercedes Cabelloâ€ y colegio Algarrobal', '09:00', 'Grupo valores', '2017-08-25'),
(6, 'Actividad integradora 25 aÃ±os: â€œConociÃ©ndonos mejorâ€(secundaria)', '10:00', 'Tutores', '2017-08-28'),
(7, 'Concurso â€œRazonandoâ€  ( matemÃ¡tica y comunicaciÃ³n)', '10:00', 'Directora y Coordinadores de la InstituciÃ³n ', '2017-08-29'),
(8, 'FENCYT', '10:00', 'OrganizaciÃ³n: docentes de CTA ParticipaciÃ³n de los alumnos: tutores', '2017-08-31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id_administrador` int(11) NOT NULL,
  `login` varchar(95) DEFAULT NULL,
  `clave` varchar(100) DEFAULT NULL,
  `dato_id_dato` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id_administrador`, `login`, `clave`, `dato_id_dato`) VALUES
(1, 'castle', 'castle', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dato`
--

CREATE TABLE `dato` (
  `id_dato` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `dni` varchar(20) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `foto` varchar(95) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dato`
--

INSERT INTO `dato` (`id_dato`, `nombre`, `apellido`, `dni`, `email`, `foto`) VALUES
(3, 'richter', 'belmont', '55554444', 'ejemplo@hotmail.com', 'img/'),
(4, 'trevort', 'belmont', '123456', 'qwe@gmail.com', '17-12-22--1513952716.jpeg'),
(5, 'trevort', 'belmont', '123456', 'qwe@gmail.com', '17-12-22--1513952727.jpeg'),
(6, 'trevort', 'belmont', '123456', 'qwe@gmail.com', '17-12-22--1513952737.jpeg'),
(7, 'trevort', 'belmont', '123456', 'qwe@gmail.com', '17-12-22--1513952812.jpeg'),
(8, 'trevort', 'belmont', '123456', 'qwe@gmail.com', '17-12-22--1513952827.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE `docente` (
  `id_docente` int(11) NOT NULL,
  `dato_id_dato` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `docente`
--

INSERT INTO `docente` (`id_docente`, `dato_id_dato`) VALUES
(1, 4),
(2, 5),
(3, 6),
(4, 7),
(5, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foto_fecha`
--

CREATE TABLE `foto_fecha` (
  `id_foto_fecha` int(11) NOT NULL,
  `foto_fe` varchar(95) DEFAULT NULL,
  `des` varchar(200) DEFAULT NULL,
  `fecha_fo` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `foto_fecha`
--

INSERT INTO `foto_fecha` (`id_foto_fecha`, `foto_fe`, `des`, `fecha_fo`) VALUES
(1, '2017-12-20--1513808642.jpeg', '', '2017-12-20'),
(2, '17-12-21--1513811896.jpeg', '', '2017-11-14'),
(3, '17-12-21--1513811921.jpeg', '', '2017-10-04'),
(4, '17-12-21--1513811942.jpeg', '', '2017-09-07'),
(5, '17-12-21--1513811957.jpeg', '', '2017-08-16'),
(6, '17-12-21--1513811969.jpeg', '', '2017-08-17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foto_noticia`
--

CREATE TABLE `foto_noticia` (
  `id_foto_noticia` int(11) NOT NULL,
  `foto_no` varchar(95) DEFAULT NULL,
  `noticia_id_noticia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia`
--

CREATE TABLE `noticia` (
  `id_noticia` int(11) NOT NULL,
  `titulo` varchar(150) DEFAULT NULL,
  `texto` varchar(7000) DEFAULT NULL,
  `fecha_no` date DEFAULT NULL,
  `foto_titulo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `noticia`
--

INSERT INTO `noticia` (`id_noticia`, `titulo`, `texto`, `fecha_no`, `foto_titulo`) VALUES
(1, 'bodas de oro', 'el comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino.\r\nel comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino.\r\nel comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino.\r\nel comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino.\r\nel comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino.', '2017-12-05', '17-12-22--1513900351.jpeg'),
(2, 'bodas de plata', 'el comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino', '2017-12-05', '17-12-22--1513900393.jpeg'),
(3, 'bodas de rubi', 'el comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino', '2017-12-05', '17-12-22--1513900411.jpeg'),
(4, 'bodas de esmeralda', 'el comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino', '2017-12-05', '17-12-22--1513900438.jpeg'),
(5, 'bodas de diamante', 'el comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino', '2017-12-05', '17-12-22--1513900476.jpeg'),
(6, 'bodas de cristal', 'el comienzo de su ceremonia fue interesante.despues al finalizar la actividad todo termino', '2017-12-05', '17-12-22--1513900529.jpeg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad`
--
ALTER TABLE `actividad`
  ADD PRIMARY KEY (`id_actividad`);

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id_administrador`),
  ADD KEY `fk_administrador_dato_idx` (`dato_id_dato`);

--
-- Indices de la tabla `dato`
--
ALTER TABLE `dato`
  ADD PRIMARY KEY (`id_dato`);

--
-- Indices de la tabla `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`id_docente`),
  ADD KEY `fk_docente_dato1_idx` (`dato_id_dato`);

--
-- Indices de la tabla `foto_fecha`
--
ALTER TABLE `foto_fecha`
  ADD PRIMARY KEY (`id_foto_fecha`);

--
-- Indices de la tabla `foto_noticia`
--
ALTER TABLE `foto_noticia`
  ADD PRIMARY KEY (`id_foto_noticia`),
  ADD KEY `fk_foto_noticia_noticia1_idx` (`noticia_id_noticia`);

--
-- Indices de la tabla `noticia`
--
ALTER TABLE `noticia`
  ADD PRIMARY KEY (`id_noticia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividad`
--
ALTER TABLE `actividad`
  MODIFY `id_actividad` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id_administrador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `dato`
--
ALTER TABLE `dato`
  MODIFY `id_dato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `docente`
--
ALTER TABLE `docente`
  MODIFY `id_docente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `foto_fecha`
--
ALTER TABLE `foto_fecha`
  MODIFY `id_foto_fecha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `foto_noticia`
--
ALTER TABLE `foto_noticia`
  MODIFY `id_foto_noticia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `noticia`
--
ALTER TABLE `noticia`
  MODIFY `id_noticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `fk_administrador_dato` FOREIGN KEY (`dato_id_dato`) REFERENCES `dato` (`id_dato`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `docente`
--
ALTER TABLE `docente`
  ADD CONSTRAINT `fk_docente_dato1` FOREIGN KEY (`dato_id_dato`) REFERENCES `dato` (`id_dato`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `foto_noticia`
--
ALTER TABLE `foto_noticia`
  ADD CONSTRAINT `fk_foto_noticia_noticia1` FOREIGN KEY (`noticia_id_noticia`) REFERENCES `noticia` (`id_noticia`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
