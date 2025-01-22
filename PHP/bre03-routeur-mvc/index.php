<?php

require 'config/autoload.php';
$route = new Router();
$request = $route->handleRequest($_GET);
