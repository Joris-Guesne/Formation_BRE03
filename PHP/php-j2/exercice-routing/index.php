<?php

function routing(): string
{
    if (($_GET['route']) === 'about') {
        return "about";
    } else if (($_GET['route']) === 'contact') {
        return "contact";
    } else {
        return "homepage";
    };
}

require "templates/layout.phtml";
