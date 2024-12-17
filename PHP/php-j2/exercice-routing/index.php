<?php

function routing(): string
{
    if (isset($_GET['route']) && $_GET['route'] === 'about') {
        $template = "about";
    } else if (isset($_GET['route']) && $_GET['route'] === 'contact') {
        $template =  "contact";
    } else {
        $template =  "homepage";
    }

    return $template;
}

$template = routing();

require "templates/layout.phtml";
