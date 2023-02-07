
![Logo](https://zupimages.net/up/22/48/u9xp.png)


# Hi-Cloud API

Hi-Cloud est un projet réaliser dans le cadre du CESI, il a pour but de créer une station météo qui communique via requete POST et GET pour enregister des donnée dans une base de donnée MySQL et les afficher sur une page web.



## Installation

Pour installer le serveur de l'API, il vous suffit de telecharger ce projet et d'executer ces commandes :

```bash
  npm install express mysql2
```


    
## Démarage

Pour démarer le projet en mode test, ce qui permettra de redemarer automatiquement a chaque modification, il faut utiliser cette commande :

```bash
  npm test
```

Pour démarer le projet en mode normal, il faut utiliser cette commande :

```bash
  npm start
```

## Base de données

#### Données Météo
```sql
CREATE TABLE `weather` (
             `id` int(11) NOT NULL AUTO_INCREMENT,
             `date` date DEFAULT NULL,
             `time` time DEFAULT NULL,
             `temp` decimal(3,1) DEFAULT NULL,
             `humidity` decimal(5,2) DEFAULT NULL,
             `station_id` int(11) DEFAULT NULL,
             PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

#### Station Météo
```sql
EN DEV
```


## Utiliser l'API

#### Récuperer toutes les données

```http
  GET /api/weather
```


#### Récuperer une seule donnée

```http
  GET /api/weather/${id}
```



#### Envoyer des données dans la base donnée

```http
  POST /api/weather
```

| Paramètre | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `temp`      | `string` | **Requis**. Temperature à ajouté |
| `humidity`      | `string` | **Requis**. Humiditée à ajouté |
| `station_id`      | `string` | **Requis**. ID de la station Météo |

## Auteurs

- [@DodoLeReporter](https://github.com/dodolereporter)
- [@ZDashinGC](https://github.com/ZDashinGC)
- [@devospecornet](https://github.com/devospecornet)
## License

[MIT](https://github.com/dodolereporter/Hi-Cloud-API/blob/main/LICENSE)

