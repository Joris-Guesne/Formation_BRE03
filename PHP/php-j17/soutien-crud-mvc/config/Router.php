<?php

class Router
{

    public function handleRequest()
    {
        $userController = new UserController();
        if (isset($_GET["route"])) {
            if ($_GET["route"] === "show_user") {
                $userController->show();
            } elseif ($_GET["route"] === "create_user") {

                $userController->create();
            } elseif ($_GET["route"] === "check_create_user") {

                $userController->checkCreate();
            } elseif ($_GET["route"] === "update_user") {

                $userController->update();
            } elseif ($_GET["route"] === "check_update_user") {

                $userController->checkUpdate();
            } elseif ($_GET["route"] === "delete_user") {

                $userController->delete();
            }
        } else {
            $userController->list();
        }
    }
}
