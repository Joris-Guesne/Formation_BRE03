<?php

class PageControllers
{
    function __construct() {}

    function home(): void
    {
        $route = "home";
        require '../templates/layout.phtml';
    }

    function about()
    {
        $route = "about";
        require '../templates/layout.phtml';
    }

    function notFound()
    {
        $route = "notFound";
        require '../templates/layout.phtml';
    }
}
