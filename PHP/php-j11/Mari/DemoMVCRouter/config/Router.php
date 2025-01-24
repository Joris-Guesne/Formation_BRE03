<?php

class Router
{
    public function __construct() {}

    public function handleRequest(): void
    {
        /* 9. la méthode `handleRequest()` vérifie si l'url contient bien un paramètre appelé `route` */
        if (isset($_GET["route"])) {
            /* 10. Si l'url contient bien un paramètre appelé `route` */

            /* 11. La méthode `handleRequest()` déclare une variable appelée `$route` et lui donne la valeur du paramètre d'URL `route` */
            $route = $_GET["route"];

            /* 12. La méthode `handleRequest()` vérifie la valeur de la variable `$route` */
            if ($route === "a_propos") {
                /* 13. Si la variable `$route` vaut `a_propos` */

                /* 14. La méthode `handleRequest()` crée une instance de la classe `PageController` et la stocke dans une variable appelée `$pageController` */
                $pageController = new PageController();

                /* 15. La méthode `handleRequest()` appelle la méthode `about()` de la variable `$pageController` */
                $pageController->about();
            } else if ($route === "contact") {
                $pageController = new PageController();

                $pageController->contact();
            } else {
                $pageController = new PageController();

                $pageController->notFound();
            }
        } else {
            $pageController = new PageController();

            $pageController->homepage();
        }
    }
}
