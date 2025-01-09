<?php

$host = "";
$port = "";
$dbname = "";
$connexionString = "";

$user = "";
$password = "";

$db = new PDO(
    $connexionString,
    $user,
    $password
);

var_dump($db);

?>