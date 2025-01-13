<?php

require 'connexion.php';

require 'User.php';

$superman = [
    "first_name" => "Clark",
    "last_name" => "Kent",
    "email" => "clark.kent@test.fr"
];

$instance1 = new User($superman["first_name"], $superman["last_name"], $superman["email"]);


$query = $db->prepare("SELECT * FROM users ORDER BY id ASC LIMIT 1");
$parameters = [];
$query->execute($parameters);
$userDB = $query->fetch(PDO::FETCH_ASSOC);
echo ($userDB['first_name']);
echo ($userDB['last_name']);
echo ($userDB['email']);

$instanceDB1 = new User($userDB["first_name"], $userDB["last_name"], $userDB["email"]);

$query = $db->prepare("SELECT * FROM users");
$parameters = [];
$query->execute($parameters);
$usersDB = $query->fetchAll(PDO::FETCH_ASSOC);
