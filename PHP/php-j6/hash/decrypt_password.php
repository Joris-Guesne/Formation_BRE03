<?php

$password = $_POST["password"];
$hashedPassword = $_POST["hashedPassword"];

$isPasswordCorrect = password_verify($password, $hashedPassword);

if ($isPasswordCorrect === true) {
    echo ("Punaise génial ca correspond");
} else {
    echo ("Ah non c'est po bon...");
};
