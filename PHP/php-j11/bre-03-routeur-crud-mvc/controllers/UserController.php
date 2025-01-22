<?php

class UserController
{
    function __construct() {}

    function show(): void
    {
        $route = "show";
        require '../templates/users/show.phtml';
    }

    function create()
    {
        $route = "create";
        require '../templates/users/create.phtml';
    }

    function contact()
    {
        $route = "contact";
        require '../templates/layout.phtml';
    }

    function notFound()
    {
        $route = "notFound";
        require '../templates/layout.phtml';
    }
}
