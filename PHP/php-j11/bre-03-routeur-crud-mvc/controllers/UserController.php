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
        //developper la function check create
    }

    function update()
    {
        $route = "update_user";
        require '../templates/users/update.phtml';
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
        require '../templates/users/list.phtml';
    }
}
