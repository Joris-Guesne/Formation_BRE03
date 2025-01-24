<?php
/* 2. Le serveur charge le point d'entrée du site : `index.php` */

/* 3. L'`index.php` charge le fichier `config/autoload.php` */
require "config/autoload.php";

/* 7. `index.php` créée une instance de la classe `Router` et la stocke dans une variable `$router` */
$router = new Router();

/* 8. `index.php` appelle la méthode `handleRequest()` de la variable `$router` qui est une instance de la classe `Router` */
$router->handleRequest();
