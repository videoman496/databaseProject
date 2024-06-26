-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 147.232.47.244    Database: Pervashov
-- ------------------------------------------------------
-- Server version	5.5.59-0+deb8u1

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

--
-- Table structure for table `Exponát`
--

DROP TABLE IF EXISTS `Exponát`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Exponát` (
  `ID_exponátu` int(11) NOT NULL AUTO_INCREMENT,
  `Názov` varchar(255) COLLATE utf8_slovak_ci DEFAULT NULL,
  `Očakávaný_vek` int(11) DEFAULT NULL,
  `Cena` decimal(15,2) DEFAULT NULL,
  `Druh` varchar(100) COLLATE utf8_slovak_ci DEFAULT NULL,
  `Krajina_pôvodu` varchar(100) COLLATE utf8_slovak_ci DEFAULT NULL,
  `Popis` text COLLATE utf8_slovak_ci,
  `Datum_zapôžičania` date DEFAULT NULL,
  `Datum_vrátenia` date DEFAULT NULL,
  `ID_zamestnanca` int(11) DEFAULT NULL,
  `ID_výstavnej_sály` int(11) DEFAULT NULL,
  `Vitrína` tinyint(1) DEFAULT NULL,
  `ID_kategórie` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_exponátu`),
  KEY `ID_zamestnanca` (`ID_zamestnanca`),
  KEY `ID_výstavnej_sály` (`ID_výstavnej_sály`),
  KEY `ID_kategórie` (`ID_kategórie`),
  CONSTRAINT `Exponát_ibfk_1` FOREIGN KEY (`ID_zamestnanca`) REFERENCES `Zamestnanec` (`ID_zamestnanca`),
  CONSTRAINT `Exponát_ibfk_2` FOREIGN KEY (`ID_výstavnej_sály`) REFERENCES `Výstavná_sála` (`ID_sály`),
  CONSTRAINT `Exponát_ibfk_3` FOREIGN KEY (`ID_kategórie`) REFERENCES `Kategória_exponátu` (`ID_kategórie`)
) ENGINE=InnoDB AUTO_INCREMENT=1340 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exponát`
--

LOCK TABLES `Exponát` WRITE;
/*!40000 ALTER TABLE `Exponát` DISABLE KEYS */;
INSERT INTO `Exponát` VALUES (5,'Exponát40',2002,4628.48,'Druh40','Krajina40','Popis40','2022-02-11','2022-03-06',3,1,0,NULL),(6,'Exponát50',240,9458.01,'Druh50','Krajina50','Popis50','2022-08-02','2022-02-01',3,1,1,5),(7,'Exponát60',1128,6234.71,'Druh60','Krajina60','Popis60','2022-06-10','2022-05-02',2,3,0,2),(11,'Exponát1',721,3037.47,'Druh1','Krajina1','Popis1','2022-02-01','2022-07-08',2,1,1,2),(13,'Exponát21',698,9311.71,'Druh21','Krajina21','Popis21','2022-03-28','2022-05-23',1,1,0,2),(14,'Exponát31',844,8563.66,'Druh31','Krajina31','Popis31','2022-10-10','2022-04-23',1,1,1,NULL),(16,'Exponát51',871,6926.68,'Druh51','Krajina51','Popis51','2022-12-10','2022-08-16',2,3,0,3),(24,'Exponát32',3118,7598.55,'Druh32','Krajina32','Popis32','2022-12-05','2022-05-12',1,1,0,1),(25,'Exponát42',2229,9026.94,'Druh42','Krajina42','Popis42','2022-03-06','2022-03-03',2,1,1,2),(28,'Exponát72',1909,2053.69,'Druh72','Krajina72','Popis72','2022-11-18','2022-10-16',2,1,1,1),(29,'Exponát82',121,6199.39,'Druh82','Krajina82','Popis82','2022-01-10','2022-04-11',2,3,0,5),(30,'Exponát92',4794,3932.72,'Druh92','Krajina92','Popis92','2022-02-02','2022-04-08',1,3,1,2),(33,'Exponát23',1799,1351.00,'Druh23','Krajina23','Popis23','2022-08-06','2022-07-29',1,3,0,5),(35,'Exponát43',1460,4616.85,'Druh43','Krajina43','Popis43','2022-06-07','2022-10-11',3,3,0,2),(41,'Exponát4',3659,6581.69,'Druh4','Krajina4','Popis4','2022-02-04','2022-07-03',1,3,0,5),(45,'Exponát44',613,9647.53,'Druh44','Krajina44','Popis44','2022-06-16','2022-05-21',3,3,1,NULL),(46,'Exponát54',4562,4724.47,'Druh54','Krajina54','Popis54','2022-08-17','2022-09-16',3,1,1,1),(47,'Exponát64',215,6844.27,'Druh64','Krajina64','Popis64','2022-04-17','2022-05-31',1,3,1,NULL),(49,'Exponát84',4609,7479.38,'Druh84','Krajina84','Popis84','2022-12-22','2022-08-17',1,1,0,NULL),(52,'Exponát15',4490,7545.88,'Druh15','Krajina15','Popis15','2022-01-29','2022-02-17',2,3,0,NULL),(53,'Exponát25',444,3250.04,'Druh25','Krajina25','Popis25','2022-05-11','2022-10-25',1,3,1,NULL),(57,'Exponát65',4653,288.16,'Druh65','Krajina65','Popis65','2022-05-09','2022-09-04',2,3,1,2),(60,'Exponát95',4429,3252.66,'Druh95','Krajina95','Popis95','2022-12-20','2022-11-13',2,3,0,3),(61,'Exponát6',200,8288.21,'Druh6','Krajina6','Popis6','2022-01-09','2022-08-19',1,3,1,5),(66,'Exponát56',467,1817.77,'Druh56','Krajina56','Popis56','2022-08-18','2022-08-06',1,3,0,5),(70,'Exponát96',4896,8761.22,'Druh96','Krajina96','Popis96','2022-06-11','2022-08-02',3,1,0,3),(73,'Exponát27',3349,7003.61,'Druh27','Krajina27','Popis27','2022-06-29','2022-05-12',2,3,1,NULL),(75,'Exponát47',2731,1327.29,'Druh47','Krajina47','Popis47','2022-01-10','2022-09-23',3,3,0,1),(76,'Exponát57',443,3166.16,'Druh57','Krajina57','Popis57','2022-04-26','2022-08-21',1,1,0,NULL),(79,'Exponát87',3306,2970.61,'Druh87','Krajina87','Popis87','2022-07-02','2022-08-13',3,1,0,NULL),(86,'Exponát58',4707,3433.41,'Druh58','Krajina58','Popis58','2022-11-22','2022-06-07',2,1,0,1),(89,'Exponát88',3849,2568.12,'Druh88','Krajina88','Popis88','2022-12-22','2022-02-06',3,3,0,3),(97,'Exponát69',3931,1704.80,'Druh69','Krajina69','Popis69','2022-06-30','2022-12-16',2,3,0,5),(98,'Exponát79',206,7383.84,'Druh79','Krajina79','Popis79','2022-07-27','2022-08-17',2,1,1,5),(100,'Exponát99',3603,9379.09,'Druh99','Krajina99','Popis99','2022-07-12','2022-10-28',3,1,0,5),(131,'Exponát30',3392,920.59,'Druh30','Krajina30','Popis30','2022-07-27','2022-01-28',3,1,1,5),(133,'Exponát50',3046,746.48,'Druh50','Krajina50','Popis50','2022-11-27','2022-04-14',3,3,0,2),(135,'Exponát70',3894,400.08,'Druh70','Krajina70','Popis70','2022-08-31','2022-02-13',3,3,1,NULL),(136,'Exponát80',4659,516.21,'Druh80','Krajina80','Popis80','2022-10-14','2022-05-18',3,3,0,NULL),(137,'Exponát90',579,623.92,'Druh90','Krajina90','Popis90','2022-10-09','2022-12-27',3,1,1,1),(138,'Exponát1',4594,180.90,'Druh1','Krajina1','Popis1','2022-02-24','2022-03-14',3,1,0,NULL),(140,'Exponát21',1895,184.97,'Druh21','Krajina21','Popis21','2022-10-15','2022-05-20',3,3,0,2),(146,'Exponát81',4466,26.04,'Druh81','Krajina81','Popis81','2022-06-14','2022-03-05',3,1,1,2),(147,'Exponát91',2839,849.48,'Druh91','Krajina91','Popis91','2022-07-18','2022-03-04',1,3,0,5),(148,'Exponát2',2703,958.85,'Druh2','Krajina2','Popis2','2022-03-04','2022-12-25',2,1,0,2),(152,'Exponát42',889,546.12,'Druh42','Krajina42','Popis42','2022-03-13','2022-05-07',1,3,1,3),(154,'Exponát62',1789,771.63,'Druh62','Krajina62','Popis62','2022-10-14','2022-08-10',3,3,1,3),(157,'Exponát92',296,372.63,'Druh92','Krajina92','Popis92','2022-09-08','2022-04-23',2,3,0,NULL),(161,'Exponát33',4711,767.09,'Druh33','Krajina33','Popis33','2022-01-04','2022-09-28',3,1,1,3),(163,'Exponát53',2504,153.94,'Druh53','Krajina53','Popis53','2022-04-08','2022-11-15',3,1,0,1),(164,'Exponát63',4275,703.69,'Druh63','Krajina63','Popis63','2022-12-14','2022-08-27',2,1,0,NULL),(165,'Exponát73',222,42.51,'Druh73','Krajina73','Popis73','2022-01-29','2022-04-09',1,3,0,2),(169,'Exponát14',4386,876.84,'Druh14','Krajina14','Popis14','2022-10-02','2022-02-17',2,3,1,2),(174,'Exponát64',3078,673.93,'Druh64','Krajina64','Popis64','2022-07-10','2022-08-04',2,1,1,3),(175,'Exponát74',3078,660.66,'Druh74','Krajina74','Popis74','2022-06-16','2022-04-20',1,3,0,2),(177,'Exponát94',2963,919.51,'Druh94','Krajina94','Popis94','2022-10-27','2022-05-04',1,1,0,NULL),(180,'Exponát25',2435,299.30,'Druh25','Krajina25','Popis25','2022-01-13','2022-04-13',2,3,0,2),(182,'Exponát45',1857,643.09,'Druh45','Krajina45','Popis45','2022-02-06','2022-07-29',3,1,1,2),(185,'Exponát75',3999,633.19,'Druh75','Krajina75','Popis75','2022-10-07','2022-12-07',2,1,0,1),(192,'Exponát46',4271,742.27,'Druh46','Krajina46','Popis46','2022-02-24','2022-07-07',1,1,0,1),(195,'Exponát76',4934,596.39,'Druh76','Krajina76','Popis76','2022-01-08','2022-04-26',3,3,1,2),(196,'Exponát86',718,115.18,'Druh86','Krajina86','Popis86','2022-02-22','2022-05-19',2,1,0,NULL),(197,'Exponát96',4904,946.89,'Druh96','Krajina96','Popis96','2022-10-17','2022-02-13',1,3,0,5),(198,'Exponát7',274,840.86,'Druh7','Krajina7','Popis7','2022-01-15','2022-09-04',2,1,0,NULL),(200,'Exponát27',2074,211.12,'Druh27','Krajina27','Popis27','2022-10-23','2022-06-03',3,1,0,1),(201,'Exponát37',3308,286.66,'Druh37','Krajina37','Popis37','2022-06-13','2022-05-20',3,3,1,2),(205,'Exponát77',4472,792.44,'Druh77','Krajina77','Popis77','2022-04-12','2022-01-07',1,1,0,2),(207,'Exponát97',3507,542.79,'Druh97','Krajina97','Popis97','2022-08-11','2022-06-02',2,1,1,3),(208,'Exponát8',415,773.50,'Druh8','Krajina8','Popis8','2022-08-14','2022-10-09',1,3,1,3),(209,'Exponát18',3329,10.57,'Druh18','Krajina18','Popis18','2022-01-21','2022-03-31',1,3,1,2),(214,'Exponát68',1267,471.46,'Druh68','Krajina68','Popis68','2022-08-06','2022-07-28',1,3,1,2),(216,'Exponát88',3344,173.10,'Druh88','Krajina88','Popis88','2022-11-10','2022-10-10',2,1,1,5),(218,'Exponát9',2998,971.75,'Druh9','Krajina9','Popis9','2022-01-22','2022-05-20',3,3,0,2),(219,'Exponát19',1394,577.12,'Druh19','Krajina19','Popis19','2022-01-18','2022-07-07',2,3,1,5),(223,'Exponát59',514,76.68,'Druh59','Krajina59','Popis59','2022-01-28','2022-02-22',2,1,1,2),(225,'Exponát79',4773,616.97,'Druh79','Krajina79','Popis79','2022-03-22','2022-04-03',3,1,0,2),(255,'Exponát0',1190,670.87,'Druh0','Krajina0','Popis0','2022-08-22','2022-03-10',1,3,1,2),(256,'Exponát10',2392,698.18,'Druh10','Krajina10','Popis10','2022-01-21','2022-03-08',3,1,1,1),(258,'Exponát30',113,871.75,'Druh30','Krajina30','Popis30','2022-04-17','2022-11-02',2,1,0,3),(261,'Exponát60',2338,627.02,'Druh60','Krajina60','Popis60','2022-09-25','2022-10-12',3,1,1,NULL),(263,'Exponát80',4664,549.84,'Druh80','Krajina80','Popis80','2022-12-14','2022-02-08',3,1,0,NULL),(266,'Exponát11',1257,581.33,'Druh11','Krajina11','Popis11','2022-02-25','2022-01-07',3,1,1,3),(267,'Exponát21',495,817.25,'Druh21','Krajina21','Popis21','2022-10-15','2022-06-30',1,1,1,5),(271,'Exponát61',1652,55.76,'Druh61','Krajina61','Popis61','2022-04-15','2022-04-09',2,3,1,3),(277,'Exponát22',4770,933.17,'Druh22','Krajina22','Popis22','2022-10-21','2022-03-21',3,3,1,1),(279,'Exponát42',1988,846.12,'Druh42','Krajina42','Popis42','2022-01-14','2022-08-25',1,3,0,3),(283,'Exponát82',255,435.94,'Druh82','Krajina82','Popis82','2022-01-10','2022-10-28',1,3,1,NULL),(284,'Exponát92',3200,171.43,'Druh92','Krajina92','Popis92','2022-12-09','2022-03-04',1,3,0,5),(285,'Exponát3',481,914.30,'Druh3','Krajina3','Popis3','2022-04-14','2022-09-02',3,3,0,3),(286,'Exponát13',3042,464.92,'Druh13','Krajina13','Popis13','2022-07-02','2022-02-06',1,3,1,5),(289,'Exponát43',779,335.38,'Druh43','Krajina43','Popis43','2022-03-18','2022-01-15',3,3,0,5),(297,'Exponát24',1378,28.41,'Druh24','Krajina24','Popis24','2022-04-26','2022-06-29',3,1,1,5),(304,'Exponát94',4484,59.23,'Druh94','Krajina94','Popis94','2022-08-09','2022-11-07',2,3,1,5),(305,'Exponát5',547,956.86,'Druh5','Krajina5','Popis5','2022-06-16','2022-05-29',3,1,1,5),(306,'Exponát15',4370,421.11,'Druh15','Krajina15','Popis15','2022-06-26','2022-02-25',2,1,1,5),(311,'Exponát65',1392,104.86,'Druh65','Krajina65','Popis65','2022-09-09','2022-02-17',3,3,1,1),(315,'Exponát6',3631,980.47,'Druh6','Krajina6','Popis6','2022-09-22','2022-09-04',1,1,0,2),(316,'Exponát16',3608,960.67,'Druh16','Krajina16','Popis16','2022-08-22','2022-04-24',3,1,0,NULL),(320,'Exponát56',3841,160.24,'Druh56','Krajina56','Popis56','2022-07-01','2022-01-01',3,3,0,NULL),(324,'Exponát96',3728,845.04,'Druh96','Krajina96','Popis96','2022-12-27','2022-05-28',1,1,0,5),(331,'Exponát67',230,802.58,'Druh67','Krajina67','Popis67','2022-11-16','2022-12-19',1,1,1,NULL),(335,'Exponát8',4517,800.90,'Druh8','Krajina8','Popis8','2022-04-18','2022-01-25',2,1,1,NULL),(341,'Exponát68',1267,20.33,'Druh68','Krajina68','Popis68','2022-05-05','2022-08-24',1,1,1,5),(343,'Exponát88',2983,36.79,'Druh88','Krajina88','Popis88','2022-05-24','2022-11-10',1,1,1,3),(345,'Exponát9',3513,69.31,'Druh9','Krajina9','Popis9','2022-03-29','2022-12-26',1,1,1,3);
/*!40000 ALTER TABLE `Exponát` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Kategória_exponátu`
--

DROP TABLE IF EXISTS `Kategória_exponátu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Kategória_exponátu` (
  `ID_kategórie` int(11) NOT NULL AUTO_INCREMENT,
  `Názov_kategórie` varchar(255) COLLATE utf8_slovak_ci DEFAULT NULL,
  PRIMARY KEY (`ID_kategórie`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Kategória_exponátu`
--

LOCK TABLES `Kategória_exponátu` WRITE;
/*!40000 ALTER TABLE `Kategória_exponátu` DISABLE KEYS */;
INSERT INTO `Kategória_exponátu` VALUES (1,'Sochy'),(2,'Maliarstvo'),(3,'Archeológia'),(5,'Numizmatika'),(6,'ban');
/*!40000 ALTER TABLE `Kategória_exponátu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Výstavná_sála`
--

DROP TABLE IF EXISTS `Výstavná_sála`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Výstavná_sála` (
  `ID_sály` int(11) NOT NULL AUTO_INCREMENT,
  `Názov_sály` varchar(255) COLLATE utf8_slovak_ci DEFAULT NULL,
  PRIMARY KEY (`ID_sály`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Výstavná_sála`
--

LOCK TABLES `Výstavná_sála` WRITE;
/*!40000 ALTER TABLE `Výstavná_sála` DISABLE KEYS */;
INSERT INTO `Výstavná_sála` VALUES (1,'Sála 1'),(3,'Sála 3'),(5,'Sála 1'),(7,'Sála 3'),(8,'Depozitár');
/*!40000 ALTER TABLE `Výstavná_sála` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Zamestnanec`
--

DROP TABLE IF EXISTS `Zamestnanec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Zamestnanec` (
  `ID_zamestnanca` int(11) NOT NULL AUTO_INCREMENT,
  `Meno` varchar(100) COLLATE utf8_slovak_ci DEFAULT NULL,
  `Priezvisko` varchar(100) COLLATE utf8_slovak_ci DEFAULT NULL,
  `Pozícia` varchar(100) COLLATE utf8_slovak_ci DEFAULT NULL,
  PRIMARY KEY (`ID_zamestnanca`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_slovak_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Zamestnanec`
--

LOCK TABLES `Zamestnanec` WRITE;
/*!40000 ALTER TABLE `Zamestnanec` DISABLE KEYS */;
INSERT INTO `Zamestnanec` VALUES (1,'Peter','Novák','Kurátor'),(2,'Eva','Hrušková','Konzervátor'),(3,'Ján','Malý','Právník'),(5,'ban','ban','bna');
/*!40000 ALTER TABLE `Zamestnanec` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-23 11:46:38
