<?php

/* 4. Le fichier `config/autoload.php` charge la définition de la classe `Router` grâce au fichier `config/Router.php` */
require "config/Router.php";

/* 5. Le fichier `config/autoload.php` charge la définition de la classe `PageController` grâce au fichier  `controllers/PageController.php`*/
require "controllers/PageController.php";

/* 6. Le fichier `config/autoload.php` a fini son travail : retour à l'`index.php` qui l'avait appelé */

