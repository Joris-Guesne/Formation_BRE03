<?php

if ($_POST["password"] === $_POST["confirm_password"]) {
    echo ("Vérification des mots de passe : OK");
} else if ($_POST["password"] !== $_POST["confirm_password"]) {
    echo ("WTF c'est quoi ca !!!!! Les mots de passes ne correspondent pas !!!");
}

if (isset($_POST["newsletter"])) {
    $newsLetterStatus = "Oui";
} else {
    $newsLetterStatus = "Non";
}
echo ("Email :" . $_POST["email"] . "Mot de passe :" . $_POST["password"] . "Newsletter :" . $newsLetterStatus);
