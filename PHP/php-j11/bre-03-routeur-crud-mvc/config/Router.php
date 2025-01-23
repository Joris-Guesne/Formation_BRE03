<?php

class Router
{
    function __construct() {}
    function handleRequest(array $get)
    {
        if (isset($get["route"])) {
            if ($get["route"] === "show") {
                $userController = new UserController();
                $routeShow = $userController->show();
            } elseif ($get["route"] === "create") {
                $userController = new UserController();
                $routeCreate = $userController->create();
            } elseif ($get["route"] === "check_create_user") {
                $userController = new UserController();
                $routeCheckCreate = $userController->checkCreate();
            } elseif ($get["route"] === "update") {
                $userController = new UserController();
                $routeUpdate = $userController->update();
            } elseif ($get["route"] === "check_update_user") {
                $userController = new UserController();
                $routeCheckUpdate = $userController->checkUpdate();
            } elseif ($get["route"] === "delete_user") {
                $userController = new UserController();
                $routeDelete = $userController->delete();
            } else {
                $userController = new UserController();
                $routeList = $userController->list();
            }
        }
    }
}
