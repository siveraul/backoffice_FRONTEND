-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 05, 2023 at 04:12 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dataproxy01`
--

-- --------------------------------------------------------

--
-- Table structure for table `ae_entidade_aeroporto`
--

DROP TABLE IF EXISTS `ae_entidade_aeroporto`;
CREATE TABLE IF NOT EXISTS `ae_entidade_aeroporto` (
  `ae_id` int NOT NULL AUTO_INCREMENT,
  `ae_aeroporto_id` int NOT NULL,
  `ae_entidade_id` int NOT NULL,
  PRIMARY KEY (`ae_id`),
  KEY `ae_aeroporto_id` (`ae_aeroporto_id`),
  KEY `ae_entidade_id` (`ae_entidade_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `ae_entidade_aeroporto`
--

INSERT INTO `ae_entidade_aeroporto` (`ae_id`, `ae_aeroporto_id`, `ae_entidade_id`) VALUES
(1, 1, 2),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `a_aeroporto`
--

DROP TABLE IF EXISTS `a_aeroporto`;
CREATE TABLE IF NOT EXISTS `a_aeroporto` (
  `a_id` int NOT NULL AUTO_INCREMENT,
  `a_nome` varchar(100) NOT NULL,
  `a_email` varchar(100) DEFAULT NULL,
  `a_contacto` varchar(100) DEFAULT NULL,
  `a_Tipo_aeroporto` varchar(150) DEFAULT NULL,
  `a_create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `a_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `a_create_by` int DEFAULT NULL,
  `a_update_by` int DEFAULT NULL,
  `id_provincia` int DEFAULT NULL,
  `a_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`a_id`),
  KEY `id_provincia` (`id_provincia`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `a_aeroporto`
--

INSERT INTO `a_aeroporto` (`a_id`, `a_nome`, `a_email`, `a_contacto`, `a_Tipo_aeroporto`, `a_create_date`, `a_update_date`, `a_create_by`, `a_update_by`, `id_provincia`, `a_status`) VALUES
(1, 'Aeroporto internacional de Maputo', 'mz@gmail.com', '844772669', 'Internacil', '2023-10-04 13:00:50', '2023-10-05 14:00:53', 13, NULL, 1, 1),
(2, 'Aeroporto internacional de Pemba', 'pemba@gmail.com', '844772669', 'Internacil', '2023-10-05 11:44:10', NULL, 13, NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `d_distrito`
--

DROP TABLE IF EXISTS `d_distrito`;
CREATE TABLE IF NOT EXISTS `d_distrito` (
  `d_id` int NOT NULL AUTO_INCREMENT,
  `d_nome` varchar(50) NOT NULL,
  `d_create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `d_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `d_create_by` int DEFAULT NULL,
  `d_update_by` int DEFAULT NULL,
  `d_status` int NOT NULL DEFAULT '1',
  `id_provincia` int DEFAULT NULL,
  PRIMARY KEY (`d_id`),
  KEY `id_privincia` (`id_provincia`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `d_distrito`
--

INSERT INTO `d_distrito` (`d_id`, `d_nome`, `d_create_date`, `d_update_date`, `d_create_by`, `d_update_by`, `d_status`, `id_provincia`) VALUES
(1, 'Maputo', '2023-10-04 12:35:23', NULL, NULL, NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `e_entidade`
--

DROP TABLE IF EXISTS `e_entidade`;
CREATE TABLE IF NOT EXISTS `e_entidade` (
  `e_id` int NOT NULL AUTO_INCREMENT,
  `e_nome` varchar(100) NOT NULL,
  `e_email` varchar(100) DEFAULT NULL,
  `e_contacto` varchar(50) DEFAULT NULL,
  `e_entidade_banco` varchar(50) NOT NULL,
  `e_referencia_banco` varchar(70) NOT NULL,
  `e_create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `e_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `e_create_by` int DEFAULT NULL,
  `e_update_by` int DEFAULT NULL,
  `e_status` int DEFAULT '1',
  PRIMARY KEY (`e_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `e_entidade`
--

INSERT INTO `e_entidade` (`e_id`, `e_nome`, `e_email`, `e_contacto`, `e_entidade_banco`, `e_referencia_banco`, `e_create_date`, `e_update_date`, `e_create_by`, `e_update_by`, `e_status`) VALUES
(2, 'Kudumba', 'Kudumba@gmail.com', '844775232', '870009', '855646446767', '2023-10-05 14:02:12', '2023-10-05 14:03:24', 13, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pp_permissoes_perfil`
--

DROP TABLE IF EXISTS `pp_permissoes_perfil`;
CREATE TABLE IF NOT EXISTS `pp_permissoes_perfil` (
  `pp_id` int NOT NULL AUTO_INCREMENT,
  `pp_nome` varchar(60) NOT NULL,
  `criar_zona` int DEFAULT '0',
  `editar_zona` int DEFAULT '0',
  `ver_zona` int DEFAULT '0',
  `deletar_zona` int DEFAULT '0',
  `criar_provincia` int DEFAULT '0',
  `editar_provincia` int DEFAULT '0',
  `deletar_provincia` int DEFAULT '0',
  `ver_provincia` int DEFAULT '0',
  `criar_distrito` int DEFAULT '0',
  `editar_distrito` int DEFAULT '0',
  `ver_distrito` int DEFAULT '0',
  `deletar_distrito` int DEFAULT '0',
  `criar_aeroporto` int DEFAULT '0',
  `ver_aeroporto` int DEFAULT '0',
  `editar_aeroporto` int DEFAULT '0',
  `deletar_aeroporto` int DEFAULT '0',
  `criar_tipo_carga` int DEFAULT '0',
  `ver_tipo_carga` int DEFAULT '0',
  `editar_tipo_carga` int DEFAULT '0',
  `deletar_tipo_carga` int DEFAULT '0',
  `criar_permissoes` int DEFAULT '0',
  `editar_permissoes` int DEFAULT '0',
  `ver_permissoes` int DEFAULT '0',
  `deletar_permissoes` int DEFAULT '0',
  `criar_terminal` int DEFAULT '0',
  `editar_terminal` int DEFAULT '0',
  `ver_terminal` int DEFAULT '0',
  `deletar_terminal` int DEFAULT '0',
  `criar_utilizador` int DEFAULT '0',
  `editar_utilizador` int DEFAULT '0',
  `ver_utilizador` int DEFAULT '0',
  `detelar_utilizador` int DEFAULT '0',
  `criar_taxa` int NOT NULL DEFAULT '0',
  `ver_taxa` int NOT NULL DEFAULT '0',
  `editar_taxa` int NOT NULL DEFAULT '0',
  `deletar_taxa` int NOT NULL DEFAULT '0',
  `criar_sessao_do_terminal` int NOT NULL DEFAULT '0',
  `editar_sessao_do_terminal` int NOT NULL DEFAULT '0',
  `ver_sessao_do_terminal` int NOT NULL DEFAULT '0',
  `deletar_sessao_do_terminal` int NOT NULL DEFAULT '0',
  `pp_created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `pp_updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `pp_created_by` int DEFAULT NULL,
  `pp_updated_by` int DEFAULT NULL,
  `pp_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`pp_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `pp_permissoes_perfil`
--

INSERT INTO `pp_permissoes_perfil` (`pp_id`, `pp_nome`, `criar_zona`, `editar_zona`, `ver_zona`, `deletar_zona`, `criar_provincia`, `editar_provincia`, `deletar_provincia`, `ver_provincia`, `criar_distrito`, `editar_distrito`, `ver_distrito`, `deletar_distrito`, `criar_aeroporto`, `ver_aeroporto`, `editar_aeroporto`, `deletar_aeroporto`, `criar_tipo_carga`, `ver_tipo_carga`, `editar_tipo_carga`, `deletar_tipo_carga`, `criar_permissoes`, `editar_permissoes`, `ver_permissoes`, `deletar_permissoes`, `criar_terminal`, `editar_terminal`, `ver_terminal`, `deletar_terminal`, `criar_utilizador`, `editar_utilizador`, `ver_utilizador`, `detelar_utilizador`, `criar_taxa`, `ver_taxa`, `editar_taxa`, `deletar_taxa`, `criar_sessao_do_terminal`, `editar_sessao_do_terminal`, `ver_sessao_do_terminal`, `deletar_sessao_do_terminal`, `pp_created_date`, `pp_updated_date`, `pp_created_by`, `pp_updated_by`, `pp_status`) VALUES
(2, 'Admin', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, '2023-10-05 11:52:01', NULL, NULL, NULL, 1),
(3, 'Admin2', 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, '2023-10-05 11:57:12', '2023-10-05 12:05:30', NULL, NULL, 1),
(4, 'tecnico terminal', 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, '2023-10-05 12:04:10', NULL, 13, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `p_provincia`
--

DROP TABLE IF EXISTS `p_provincia`;
CREATE TABLE IF NOT EXISTS `p_provincia` (
  `p_id` int NOT NULL AUTO_INCREMENT,
  `p_nome` varchar(50) NOT NULL,
  `p_create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `p_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `p_create_by` int DEFAULT NULL,
  `p_update_by` int DEFAULT NULL,
  `id_zona` int DEFAULT NULL,
  `p_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`p_id`),
  KEY `id_zona` (`id_zona`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `p_provincia`
--

INSERT INTO `p_provincia` (`p_id`, `p_nome`, `p_create_date`, `p_update_date`, `p_create_by`, `p_update_by`, `id_zona`, `p_status`) VALUES
(1, 'Sofala', '2023-10-04 11:59:25', '2023-10-04 12:02:38', NULL, NULL, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `st_sessao_termal`
--

DROP TABLE IF EXISTS `st_sessao_termal`;
CREATE TABLE IF NOT EXISTS `st_sessao_termal` (
  `st_id` int NOT NULL AUTO_INCREMENT,
  `st_nome` varchar(90) NOT NULL,
  `st_create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `st_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `st_create_by` int DEFAULT NULL,
  `st_update_by` int DEFAULT NULL,
  `st_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`st_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `ta_taxas`
--

DROP TABLE IF EXISTS `ta_taxas`;
CREATE TABLE IF NOT EXISTS `ta_taxas` (
  `ta_id` int NOT NULL AUTO_INCREMENT,
  `ta_nome` varchar(50) NOT NULL,
  `ta_forma_calculo` varchar(50) NOT NULL,
  `ta_valor_por_quilo` double DEFAULT NULL,
  `ta_valor_centimentro_cubicos` double DEFAULT NULL,
  `ta_valor_metro_distancia` double DEFAULT NULL,
  `ta_create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ta_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `ta_create_by` int DEFAULT NULL,
  `ta_update_by` int DEFAULT NULL,
  `id_entidade` int DEFAULT NULL,
  `ta_tipo_carga_id` int DEFAULT NULL,
  `valor_por_tipo_carga` double DEFAULT NULL,
  `ta_status` int DEFAULT '1',
  PRIMARY KEY (`ta_id`),
  KEY `id_entidade` (`id_entidade`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `ta_taxas`
--

INSERT INTO `ta_taxas` (`ta_id`, `ta_nome`, `ta_forma_calculo`, `ta_valor_por_quilo`, `ta_valor_centimentro_cubicos`, `ta_valor_metro_distancia`, `ta_create_date`, `ta_update_date`, `ta_create_by`, `ta_update_by`, `id_entidade`, `ta_tipo_carga_id`, `valor_por_tipo_carga`, `ta_status`) VALUES
(1, 'Kudumba', 'peso', 12, NULL, NULL, '2023-10-05 15:56:36', NULL, 13, NULL, 2, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tc_tipo_de_carga`
--

DROP TABLE IF EXISTS `tc_tipo_de_carga`;
CREATE TABLE IF NOT EXISTS `tc_tipo_de_carga` (
  `tc_id` int NOT NULL AUTO_INCREMENT,
  `tc_nome` varchar(100) NOT NULL,
  `tc_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tc_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `tc_create_by` int DEFAULT NULL,
  `tc_update_by` int DEFAULT NULL,
  `tc_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`tc_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `tc_tipo_de_carga`
--

INSERT INTO `tc_tipo_de_carga` (`tc_id`, `tc_nome`, `tc_created_at`, `tc_update_date`, `tc_create_by`, `tc_update_by`, `tc_status`) VALUES
(1, 'granel', '2023-10-04 14:10:25', NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `t_terminal`
--

DROP TABLE IF EXISTS `t_terminal`;
CREATE TABLE IF NOT EXISTS `t_terminal` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `t_nome` varchar(90) NOT NULL,
  `t_create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `t_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `t_create_by` int DEFAULT NULL,
  `t_update_by` int DEFAULT NULL,
  `id_aeroporto` int DEFAULT NULL,
  `t_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`t_id`),
  KEY `id_aeroporto` (`id_aeroporto`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `t_terminal`
--

INSERT INTO `t_terminal` (`t_id`, `t_nome`, `t_create_date`, `t_update_date`, `t_create_by`, `t_update_by`, `id_aeroporto`, `t_status`) VALUES
(1, 'Terminal de carga', '2023-10-04 13:50:49', '2023-10-05 12:56:40', NULL, 13, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `u_utilizadores`
--

DROP TABLE IF EXISTS `u_utilizadores`;
CREATE TABLE IF NOT EXISTS `u_utilizadores` (
  `u_id` int NOT NULL AUTO_INCREMENT,
  `u_nome` varchar(500) NOT NULL,
  `u_Email` varchar(200) NOT NULL,
  `u_MSISDN_contacto` varchar(50) NOT NULL,
  `u_nome_usuário` varchar(500) NOT NULL,
  `u_PIN` varchar(3000) NOT NULL,
  `u_numero_documento` varchar(200) NOT NULL,
  `u_Nuit` varchar(200) DEFAULT NULL,
  `u_alvara` varchar(200) DEFAULT NULL,
  `u_Data_início_actividade` date DEFAULT NULL,
  `u_aeroporto_id` int NOT NULL,
  `u_permissoes_id` int NOT NULL,
  `u_create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `u_created_by` int DEFAULT NULL,
  `u_updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `u_updated_by` int DEFAULT NULL,
  `is_password_change` int DEFAULT '0',
  `u_status` int DEFAULT '1',
  PRIMARY KEY (`u_id`),
  KEY `u_aeroporto_id` (`u_aeroporto_id`),
  KEY `u_permissoes_id` (`u_permissoes_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `u_utilizadores`
--

INSERT INTO `u_utilizadores` (`u_id`, `u_nome`, `u_Email`, `u_MSISDN_contacto`, `u_nome_usuário`, `u_PIN`, `u_numero_documento`, `u_Nuit`, `u_alvara`, `u_Data_início_actividade`, `u_aeroporto_id`, `u_permissoes_id`, `u_create_date`, `u_created_by`, `u_updated_date`, `u_updated_by`, `is_password_change`, `u_status`) VALUES
(13, 'Raul Sive', 'raulsive4107@gmail.com', '844777269', 'raul.sive', '$2b$10$mco5ejILb2INVbxuU39yzuC1qewRk/xWMFwpfclELvkPTmyGAevWO', '123234234', '112121212', '112121212', '2023-10-05', 1, 2, '2023-10-05 11:15:13', NULL, NULL, NULL, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `z_zona`
--

DROP TABLE IF EXISTS `z_zona`;
CREATE TABLE IF NOT EXISTS `z_zona` (
  `z_id` int NOT NULL AUTO_INCREMENT,
  `z_nome` varchar(50) NOT NULL,
  `z_create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `z_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `z_create_by` int DEFAULT NULL,
  `z_update_by` int DEFAULT NULL,
  `z_status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`z_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `z_zona`
--

INSERT INTO `z_zona` (`z_id`, `z_nome`, `z_create_date`, `z_update_date`, `z_create_by`, `z_update_by`, `z_status`) VALUES
(1, 'Sul 1', '2023-10-04 11:21:17', '2023-10-04 11:24:13', NULL, NULL, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
