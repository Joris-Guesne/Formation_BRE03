<?php
session_start();
$pseudo = "invité";


if(isset($_SESSION["nickname"])){
    $pseudo = $_SESSION["nickname"];
};
echo('Bienvenue ' . $pseudo . " !");
?>