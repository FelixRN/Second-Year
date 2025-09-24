-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: libreria
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
-- ==========================================================
-- Creación de la Base de Datos
-- ==========================================================

   CREATE DATABASE IF NOT EXISTS libreria;

-- ==========================================================
-- Seleccionar la Base de Datos
-- ==========================================================

   USE libreria;
--
-- Table structure for table `control`
--

DROP TABLE IF EXISTS `control`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `control` (
  `parametro` varchar(50) NOT NULL,
  `valor` varchar(50) NOT NULL,
  PRIMARY KEY (`parametro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `control`
--

LOCK TABLES `control` WRITE;
/*!40000 ALTER TABLE `control` DISABLE KEYS */;
INSERT INTO `control` VALUES ('Empresa','liburudenda'),('IVA','4'),('sede ','Rue del Percebe s/n'),('Site','www.liburudenda.net');
/*!40000 ALTER TABLE `control` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `idempleado` int NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `activo` int NOT NULL,
  PRIMARY KEY (`idempleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,'AGUERO RAMOS','EMILIO','Azafranal','emilio@gmail.com',1),(2,'SANCHEZ ROMERO','KATHIA','Buenos Aires','kathia@yahoo.es',1),(3,'LUNG WON','FELIX','Van Dyck','gato@hotmail.com',1),(4,'CASTILLO RAMOS','EDUARDO','Rector Esperabé','lalo@gmail.com',0),(5,'MILICICH FLORES','LAURA','San Pablo','laura@usil.pe',1),(6,'DELGADO BARRERA','KENNETH','Toro','loko@gmail.com',1),(7,'GARCIA SOLIS','JOSE ELVIS','Rua','pepe@gmail.com',0);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promocion`
--

DROP TABLE IF EXISTS `promocion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promocion` (
  `idpromocion` smallint NOT NULL,
  `cantmin` smallint NOT NULL,
  `cantmax` smallint NOT NULL,
  `porcentaje` decimal(4,2) NOT NULL,
  PRIMARY KEY (`idpromocion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promocion`
--

LOCK TABLES `promocion` WRITE;
/*!40000 ALTER TABLE `promocion` DISABLE KEYS */;
INSERT INTO `promocion` VALUES (1,1,4,0.00),(2,5,10,0.03),(3,11,20,0.05),(4,21,50,0.07),(5,51,100,0.10),(6,101,1000,0.12);
/*!40000 ALTER TABLE `promocion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacion` (
  `idpublicacion` char(8) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `nroedicion` smallint NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `idtipo` char(3) NOT NULL,
  PRIMARY KEY (`idpublicacion`),
  KEY `fk_publicacion_tipo` (`idtipo`),
  CONSTRAINT `fk_publicacion_tipo` FOREIGN KEY (`idtipo`) REFERENCES `tipo` (`idtipo`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
INSERT INTO `publicacion` VALUES ('COM00001','Watchmen','Alan Moore y Dave Gibbons',1,25.00,1000,'COM'),('COM00002','Maus','Art Spiegelman',1,20.00,30,'COM'),('COM00003','V de Vendetta ','Alan Moore y David LLoyd',1,25.00,120,'COM'),('COM00004','Akira ','Katsuhiro Otomo',2,24.00,55,'COM'),('COM00005','Los surcos del azar','Paco Roca',1,24.00,155,'COM'),('COM00006','Brian The Brain Integral','Miguel Ángel Martín',1,30.00,230,'COM'),('LIB00001','Power Builder 6.0','William B. Heys',1,50.00,1000,'LIB'),('LIB00002','Visual Basic 6.0','Joel Carrasco',2,45.00,1500,'LIB'),('LIB00003','Programación C/S con VB','Kenneth L. Spenver',1,45.00,450,'LIB'),('LIB00004','VBScript a través de Ejemplos','Jery Honeycutt',1,35.00,720,'LIB'),('LIB00005','UNIX en 12 lecciones','Juan Matías Matías',1,25.00,500,'LIB'),('LIB00006','Visual Basic y SQL Server','Eric G. Coronel Castillo',1,35.00,5000,'LIB'),('LIB00007','Power Builder y SQL Server','Eric G. Coronel Castillo',1,35.00,5000,'LIB'),('LIB00008','PHP y MySQL','Eric G. Coronel Castillo',1,55.00,5000,'LIB'),('LIB00009','Lenguaje de Programación Java 2','Eric G. Coronel Castillo',1,55.00,5000,'LIB'),('LIB00010','Oracle Database 10g','Eric G. Coronel Castillo',1,75.00,5000,'LIB'),('LIB00011','Harry Potter y la piedra filosofal','Eric G. Coronel Castillo',1,75.00,5000,'LIB'),('LIB00012','Harry Potter y la piedra filosofal','J. K. Rowling',1,75.00,5000,'LIB'),('LIB00013','Harry Potter y el prisionero de Azkaban','J. K. Rowling',1,75.00,5000,'LIB'),('LIB00014','Cien años de soledad','Gabriel García Márquez',1,75.00,5000,'LIB'),('LIB00015','El coronel no tiene quien le escriba','Gabriel García Márquez',1,75.00,5000,'LIB'),('LIB00016','La guerra civil contada a los jóvenes','Arturo Pérez Reverte',2,50.00,1000,'LIB'),('LIB00017','El coronel no tiene quien le escriba','Arturo Pérez Reverte',1,70.00,5000,'LIB'),('LIB00018','Hombres buenos','Arturo Pérez Reverte',1,70.00,5000,'LIB'),('LIB00019','La sombra del águila','Arturo Pérez Reverte',1,70.00,5000,'LIB'),('LIB00020','La Reina del Sur','Arturo Pérez Reverte',1,20.00,2500,'LIB'),('LIB00021','Sunset Park','Paul Auster',1,25.00,2500,'LIB'),('LIB00022','Leviatán','Paul Auster',1,30.00,2500,'LIB'),('REV00001','Eureka','GrapPeru',1,4.00,770,'REV'),('REV00002','El Programador','ElectroSoft S.A.C.',1,6.00,1200,'REV'),('REV00003','La Revista del Programador','PeruDev',1,10.00,590,'REV');
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo` (
  `idtipo` char(3) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  PRIMARY KEY (`idtipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES ('COM','Comic'),('LIB','Libro'),('REV','Revista');
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idempleado` int NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `activo` int NOT NULL,
  PRIMARY KEY (`idempleado`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'eaguero','a78b6ea3c3d1b4e9a5c464b96258455cb524bb2b',1),(2,'ksanchez','38ea2969155dc3b534271971753347a680ca572e',1),(3,'flung','9a27438ac52b22805f831b2ffd62ef7347d488b7',0),(4,'ecastillo','5f563b3b3f942be03ce2ff36b7a7c5bdda2d9df5',1),(5,'lmilicich','aac93008f65166d7ccd3bb40092ca0c2773284a3',0),(6,'kdelgado','c30811c2a03b335610f0e138b73de9d86dcde7e1',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `idventa` int NOT NULL,
  `cliente` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `idempleado` int NOT NULL,
  `idpublicacion` char(8) NOT NULL,
  `cantidad` int NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `dcto` decimal(10,2) NOT NULL,
  `impuesto` decimal(10,2) NOT NULL,
  PRIMARY KEY (`idventa`),
  KEY `fk_venta_publicacion` (`idpublicacion`),
  KEY `fk_venta_empleado` (`idempleado`),
  CONSTRAINT `fk_venta_empleado` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_venta_publicacion` FOREIGN KEY (`idpublicacion`) REFERENCES `publicacion` (`idpublicacion`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
INSERT INTO `venta` VALUES (1,'ISIL','2021-07-17',5,'LIB00003',2,45.00,0.00,14.37),(2,'UNI','2021-07-18',1,'REV00002',4,6.00,0.00,3.83),(3,'Pedro','2021-07-19',3,'LIB00005',6,25.00,0.75,23.23),(5,'Vilma','2021-07-20',1,'LIB00003',3,45.00,0.00,21.55),(6,'Betty','2021-07-20',5,'REV00002',7,6.00,0.18,6.50),(7,'Mercy','2021-07-21',6,'LIB00010',3,75.00,0.00,35.92),(9,'Delia','2021-07-23',6,'LIB00006',8,35.00,1.05,43.36),(12,'Edgar','2021-07-26',2,'LIB00006',3,35.00,0.00,16.76),(13,'IPAE','2021-07-27',3,'LIB00003',2,45.00,0.00,14.37),(14,'ISL','2021-07-28',6,'REV00002',4,6.00,0.00,3.83),(15,'UNI','2021-07-30',1,'LIB00005',6,25.00,0.75,23.23),(17,'Delia','2021-07-30',5,'LIB00003',3,45.00,0.00,21.55),(18,'Ricardo','2021-08-06',1,'REV00002',7,6.00,0.18,6.50),(19,'Claudia','2021-08-09',4,'LIB00005',3,25.00,0.00,11.97),(21,'Nora','2021-08-14',2,'LIB00006',8,35.00,1.05,43.36),(24,'Alejandra','2021-08-17',3,'LIB00007',3,35.00,0.00,16.76);
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-15 19:13:30