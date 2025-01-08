<?php

$host = "db.3wa.io";
$port = "3306";
$dbname = "jorisguesne_phpj5";
$connexionString = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8";

$user = "jorisguesne";
$password = "d4dcb9996956389775fdf3662779ac8b";

$db = new PDO(
    $connexionString,
    $user,
    $password
);

var_dump($db);

?>