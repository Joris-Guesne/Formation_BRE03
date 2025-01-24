<?php

class Router
{
    public function __construct() {}
    public function handleRequest(): void
    {
        if (isset($_GET["route"])) {

            $route = $_GET["route"];

            if ($route === "show_user") {
                $userController = new UserController();
                $userController->show();
            } elseif ($route === "create_user") {
                $userController = new UserController();
                $userController->create();
            } elseif ($route === "check_create_user") {
                $userController = new UserController();
                $userController->checkCreate();
            } elseif ($route === "update_user") {
                $userController = new UserController();
                $userController->update();
            } elseif ($route === "check_update_user") {
                $userController = new UserController();
                $userController->checkUpdate();
            } elseif ($route === "delete_user") {
                $userController = new UserController();
                $userController->delete();
            } else {
            }
        } else {
            $userController = new UserController();
            $userController->list();
        }
    }
}
