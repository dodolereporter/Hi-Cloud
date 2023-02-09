CREATE TABLE `weather` (
                           `id` int(11) NOT NULL AUTO_INCREMENT,
                           `date` date DEFAULT NULL,
                           `time` time DEFAULT NULL,
                           `temp` decimal(3,1) DEFAULT NULL,
                           `humidity` decimal(5,2) DEFAULT NULL,
                           `station_id` int(11) DEFAULT NULL,
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;