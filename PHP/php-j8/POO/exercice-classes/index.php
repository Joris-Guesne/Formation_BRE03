<?php

require 'User.php';

$admin = new User(1, "admin", "admin");

$user = new User(2, "user", "user");

echo ('Utilisateur n° ' . $admin->getId() . ' ' . $admin->getUsename() . ' à pour mot de passe : ' . $admin->getPassword() . '<br>');
echo ('Utilisateur n° ' . $user->getId() . ' ' . $user->getUsename() . ' à pour mot de passe : ' . $user->getPassword() . '<br>');
