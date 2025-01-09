<?php

session_start();

$password = $_POST["password"];

$hash = password_hash($password, PASSWORD_DEFAULT);

$_SESSION["hashedPassword"] = $hash;

echo ($password . " en hash deviens > " . $_SESSION["hashedPassword"]);
