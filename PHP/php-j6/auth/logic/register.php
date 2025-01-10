<?php 
require '../connexion.php';

if (isset($_POST)){
    $prenom = $_POST['first_name'];
    $nom = $_POST['last_name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
}

$query = $db->prepare('
INSERT INTO users (first_name, last_name, email, password)
VALUES (:first_name, :last_name, :email, :password)
');
$parameters = [
    'first_name' => $prenom,
    'last_name' => $nom,
    'email' => $email,
    'password' => $password
];
$query->execute($parameters);
header('Location: index.php?route=home');

?>