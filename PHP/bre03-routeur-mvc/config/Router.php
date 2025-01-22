<?php

class Router
{
    function __construct() {}
    function handleRequest(array $get)
    {
        if (isset($get["route"])) {
            if ($get["route"] === "a-propos") {
            }
        } else {
        }
    }
}
