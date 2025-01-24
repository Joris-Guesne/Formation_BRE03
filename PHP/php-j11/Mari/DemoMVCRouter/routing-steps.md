1. L'utilisateur demande la page `index.php?route=a_propos` dans son navigateur
2. Le serveur charge le point d'entrée du site : `index.php`
3. L'`index.php` charge le fichier `config/autoload.php`
4. Le fichier `config/autoload.php` charge la définition de la classe `Router` grâce au fichier `config/Router.php`
5. Le fichier `config/autoload.php` charge la définition de la classe `PageController` grâce au fichier `controllers/PageController.php`
6. Le fichier `config/autoload.php` a fini son travail : retour à l'`index.php` qui l'avait appelé
7. `index.php` crée une instance de la classe `Router` et la stocke dans une variable `$router`
8. `index.php` appelle la méthode `handleRequest()` de la variable `$router` qui est une instance de la classe `Router`
9. la méthode `handleRequest()` vérifie si l'url contient bien un paramètre appelé `route`
10. Si l'url contient bien un paramètre appelé `route`
11. La méthode `handleRequest()` déclare une variable appelée `$route` et lui donne la valeur du paramètre d'URL `route`
12. La méthode `handleRequest()` vérifie la valeur de la variable `$route`
13. Si la variable `$route` vaut `a_propos`
14. La méthode `handleRequest()` crée une instance de la classe `PageController` et la stocke dans une variable appelée `$pageController`
15. La méthode `handleRequest()` appelle la méthode `about()` de la variable `$pageController`
16. La méthode `about()` de la classe `PageController` déclare une variable appelée `$template` et lui donne comme valeur le nom du template qu'elle va vouloir utiliser : `about`
17. La méthode `about` charge ensuite le template principal du site : le fichier `templates/layout.phtml`
18. Le fichier `templates/layout.phtml` charge le fichier dont le nom est contenu dans la variable `$template`