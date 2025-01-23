<?php

class UserController
{
    function __construct() {}

    function show(): void
    {
        $route = "show_user";
        require '../templates/users/show.phtml';
    }

    function create()
    {
        $route = "create_user";
        require '../templates/users/create.phtml';
    }

    function checkCreate()
    {
        $route = "check_create_user";
        require '../templates/users/show.phtml';
    }

    function update()
    {
        $route = "update_user";
        require '../templates/users/update.phtml';
    }

    function checkUpdate()
    {
        $route = "check_update_user";
        require '../templates/users/show.phtml';
    }

    function delete()
    {
        $route = "delete_user";
        require '../templates/users/update.phtml';
    }

    function list(): void 
    {
        require '../templates/users/list.phtml';
    }
}
