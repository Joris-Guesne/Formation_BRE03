<?php
require 'connexion.php';

$query = $db->prepare('
    SELECT users.first_name, users.last_name, address.street, address.city, address.zipcode
    FROM users JOIN address
    ON address.id = users.address 
');

$query->execute();

$users = $query->fetchAll(PDO::FETCH_ASSOC);

var_dump($users);
?>