-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 14-05-2025 a las 19:56:14
-- Versión del servidor: 11.7.2-MariaDB-ubu2404
-- Versión de PHP: 8.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `teambim`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad_log`
--

CREATE TABLE `actividad_log` (
  `id_actividad_log` int(11) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `tipo_accion` varchar(30) NOT NULL,
  `id_relacion` int(11) NOT NULL,
  `mensaje` text NOT NULL,
  `fecha_creacion_log` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivo`
--

CREATE TABLE `archivo` (
  `id_archivo` int(11) NOT NULL,
  `id_tarea` int(11) NOT NULL,
  `cargado_por_archivo` int(11) NOT NULL,
  `archivo_url` varchar(512) NOT NULL,
  `nombre_archivo` varchar(15) NOT NULL,
  `tipo_arcvhivo` varchar(20) NOT NULL,
  `fecha_cargado` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bloqueo`
--

CREATE TABLE `bloqueo` (
  `id_bloqueo` bigint(20) NOT NULL,
  `tipo_bloqueable` varchar(50) NOT NULL,
  `id_bloqueable` bigint(20) NOT NULL,
  `fecha_bloqueo` datetime NOT NULL,
  `fecha_desbloqueo_prob` datetime NOT NULL,
  `esta_activo` tinyint(1) NOT NULL DEFAULT 1,
  `bloqueado_por` int(11) NOT NULL,
  `desbloqueado_por` int(11) NOT NULL,
  `fecha_desbloqueo` datetime NOT NULL,
  `razon_bloqueo` text NOT NULL,
  `razon_desbloqueo` text NOT NULL,
  `fecha_creacion_bloq` datetime NOT NULL,
  `fecha_modif_bloq` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id_comentario` int(11) NOT NULL,
  `id_tarea` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `contenido` text NOT NULL,
  `fecha_creacion_com` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etapa`
--

CREATE TABLE `etapa` (
  `id_etapa` int(11) NOT NULL,
  `nombre_etapa` varchar(15) NOT NULL,
  `id_tablero` int(11) NOT NULL,
  `posicion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modelo_bim`
--

CREATE TABLE `modelo_bim` (
  `id_modelo_bim` int(11) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  `nombre_mod` varchar(25) NOT NULL,
  `archivo_url_mod` varchar(512) NOT NULL,
  `version` int(11) NOT NULL,
  `cargado_por_mod` int(11) NOT NULL,
  `fecha_cargado_mod` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `id_proyecto` int(11) NOT NULL,
  `nombre_proy` varchar(15) NOT NULL,
  `descripcion_proy` varchar(50) NOT NULL,
  `estatus_proy` varchar(15) NOT NULL,
  `fecha_inicio_proy` date NOT NULL,
  `fecha_fin_proy` date NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_creacion_proy` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_modif_proy` timestamp NOT NULL DEFAULT current_timestamp()
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablero`
--

CREATE TABLE `tablero` (
  `id_tablero` int(11) NOT NULL,
  `nombre_tab` varchar(20) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  `descripcion_tab` varchar(50) NOT NULL,
  `fecha_creacion_tab` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_modif_tab` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarea`
--

CREATE TABLE `tarea` (
  `id_tarea` int(11) NOT NULL,
  `titulo` varchar(20) NOT NULL,
  `descripcion_ta` varchar(50) NOT NULL,
  `id_etapa` int(11) NOT NULL,
  `usuario_asigando` int(11) NOT NULL,
  `fecha_vencimiento` datetime NOT NULL,
  `prioridad` varchar(10) NOT NULL,
  `estatus_ta` varchar(15) NOT NULL,
  `creado_por_ta` int(11) NOT NULL,
  `fecha_creacion_ta` datetime NOT NULL,
  `fecha_modif_ta` datetime NOT NULL
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(10) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `avatar_url` varchar(512) NOT NULL,
  `fecha_creacion_us` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_modif_us` date NOT NULL DEFAULT current_timestamp()
) ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_proyecto`
--

CREATE TABLE `usuario_proyecto` (
  `id_usuario_proy` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_proyecto` int(11) NOT NULL,
  `rol_proyecto` varchar(30) NOT NULL,
  `fecha_union` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `version_modelo`
--

CREATE TABLE `version_modelo` (
  `id_version` int(11) NOT NULL,
  `id_modelo_bim` int(20) NOT NULL,
  `num_version` int(11) NOT NULL,
  `resumen` text NOT NULL,
  `cargado_por_v` int(11) NOT NULL,
  `fecha_cargado_v` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad_log`
--
ALTER TABLE `actividad_log`
  ADD PRIMARY KEY (`id_actividad_log`),
  ADD KEY `id_proyecto` (`id_proyecto`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `archivo`
--
ALTER TABLE `archivo`
  ADD PRIMARY KEY (`id_archivo`),
  ADD KEY `id_tarea` (`id_tarea`),
  ADD KEY `cargado_por_archivo` (`cargado_por_archivo`);

--
-- Indices de la tabla `bloqueo`
--
ALTER TABLE `bloqueo`
  ADD PRIMARY KEY (`id_bloqueo`),
  ADD KEY `bloqueado_por` (`bloqueado_por`),
  ADD KEY `desbloqueado_por` (`desbloqueado_por`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_tarea` (`id_tarea`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `etapa`
--
ALTER TABLE `etapa`
  ADD PRIMARY KEY (`id_etapa`),
  ADD KEY `id_tablero` (`id_tablero`);

--
-- Indices de la tabla `modelo_bim`
--
ALTER TABLE `modelo_bim`
  ADD PRIMARY KEY (`id_modelo_bim`),
  ADD KEY `id_proyecto` (`id_proyecto`),
  ADD KEY `cargado_por_mod` (`cargado_por_mod`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id_proyecto`),
  ADD KEY `creado_por` (`creado_por`);

--
-- Indices de la tabla `tablero`
--
ALTER TABLE `tablero`
  ADD PRIMARY KEY (`id_tablero`),
  ADD KEY `id_proyecto` (`id_proyecto`);

--
-- Indices de la tabla `tarea`
--
ALTER TABLE `tarea`
  ADD PRIMARY KEY (`id_tarea`),
  ADD KEY `id_etapa` (`id_etapa`),
  ADD KEY `creado_por_ta` (`creado_por_ta`),
  ADD KEY `usuario_asigando` (`usuario_asigando`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `usuario_proyecto`
--
ALTER TABLE `usuario_proyecto`
  ADD PRIMARY KEY (`id_usuario_proy`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_proyecto` (`id_proyecto`);

--
-- Indices de la tabla `version_modelo`
--
ALTER TABLE `version_modelo`
  ADD PRIMARY KEY (`id_version`),
  ADD KEY `id_modelo_bim` (`id_modelo_bim`),
  ADD KEY `cargado_por_v` (`cargado_por_v`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bloqueo`
--
ALTER TABLE `bloqueo`
  MODIFY `id_bloqueo` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `version_modelo`
--
ALTER TABLE `version_modelo`
  MODIFY `id_version` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividad_log`
--
ALTER TABLE `actividad_log`
  ADD CONSTRAINT `actividad_log_ibfk_1` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`),
  ADD CONSTRAINT `actividad_log_ibfk_2` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`),
  ADD CONSTRAINT `actividad_log_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `archivo`
--
ALTER TABLE `archivo`
  ADD CONSTRAINT `archivo_ibfk_1` FOREIGN KEY (`id_tarea`) REFERENCES `tarea` (`id_tarea`),
  ADD CONSTRAINT `archivo_ibfk_2` FOREIGN KEY (`cargado_por_archivo`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `bloqueo`
--
ALTER TABLE `bloqueo`
  ADD CONSTRAINT `bloqueo_ibfk_1` FOREIGN KEY (`bloqueado_por`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `bloqueo_ibfk_2` FOREIGN KEY (`desbloqueado_por`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_tarea`) REFERENCES `tarea` (`id_tarea`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `etapa`
--
ALTER TABLE `etapa`
  ADD CONSTRAINT `etapa_ibfk_1` FOREIGN KEY (`id_tablero`) REFERENCES `tablero` (`id_tablero`);

--
-- Filtros para la tabla `modelo_bim`
--
ALTER TABLE `modelo_bim`
  ADD CONSTRAINT `modelo_bim_ibfk_1` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`),
  ADD CONSTRAINT `modelo_bim_ibfk_2` FOREIGN KEY (`cargado_por_mod`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `proyecto_ibfk_1` FOREIGN KEY (`creado_por`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `tablero`
--
ALTER TABLE `tablero`
  ADD CONSTRAINT `tablero_ibfk_1` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`);

--
-- Filtros para la tabla `tarea`
--
ALTER TABLE `tarea`
  ADD CONSTRAINT `tarea_ibfk_1` FOREIGN KEY (`id_etapa`) REFERENCES `etapa` (`id_etapa`),
  ADD CONSTRAINT `tarea_ibfk_2` FOREIGN KEY (`creado_por_ta`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `tarea_ibfk_3` FOREIGN KEY (`usuario_asigando`) REFERENCES `usuario` (`id_usuario`),

--
-- Filtros para la tabla `usuario_proyecto`
--
ALTER TABLE `usuario_proyecto`
  ADD CONSTRAINT `usuario_proyecto_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `usuario_proyecto_ibfk_2` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`);

--
-- Filtros para la tabla `version_modelo`
--
ALTER TABLE `version_modelo`
  ADD CONSTRAINT `version_modelo_ibfk_1` FOREIGN KEY (`id_modelo_bim`) REFERENCES `modelo_bim` (`id_modelo_bim`),
  ADD CONSTRAINT `version_modelo_ibfk_2` FOREIGN KEY (`cargado_por_v`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;