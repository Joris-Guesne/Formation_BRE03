<?php

class Router
{
    function __construct() {}
    function handleRequest(array $get)
    {
        require '../controllers/PageControllers.php';
        if (isset($get["route"])) {
            if ($get["route"] === "a-propos") {
                $pageController = new PageController();
                $routeAbout = $pageController->about();
            }
        } else if (!isset($get["route"])) {
            $pageController = new PageController();
            $routeAbout = $pageController->home();
        } else {
            $pageController = new PageController();
            $routeAbout = $pageController->notFound();
        }
    }
}
