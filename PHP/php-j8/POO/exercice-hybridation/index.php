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
echo ($userDB['first_name'] . ' ' . $userDB['last_name'] . ' ' . $userDB['email'] . '<br>');

$instanceDB1 = new User($userDB["first_name"], $userDB["last_name"], $userDB["email"]);
$instanceDB1->setId($userDb["id"]);

$query = $db->prepare("SELECT * FROM users");
$query->execute();
$usersDB = $query->fetchAll(PDO::FETCH_ASSOC);


foreach ($usersDB as $user) {
    echo $user['first_name'] . ' ' . $user['last_name'] . '<br>';
}

$query = $db->prepare('INSERT INTO users (first_name, last_name, email) VALUES (:first_name, :last_name, :email)');
$parameters = [];
$query->execute($parameters);
$userDB = $query->fetch(PDO::FETCH_ASSOC);
