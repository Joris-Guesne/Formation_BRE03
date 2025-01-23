<?php

class UserController
{
    function __construct() {}

    function show(): void
    {
        $route = "show";
        require '../templates/layout.phtml';
    }

    function create(): void
    {
        $route = "create";
        require '../templates/layout.phtml';
    }

    function checkCreate()
    {
        $route = "check_create_user";
        //developper la function check create
    }

    function update(): void
    {
        $route = "update";
        require '../templates/layout.phtml';
    }

    function checkUpdate()
    {
        $route = "check_update_user";
        //developper la function check update
    }

    function delete()
    {
        $route = "delete_user";
        //developper la function delete
    }

    function list(): void
    {
        $route = "list";
        require '../templates/layout.phtml';
    }
}
