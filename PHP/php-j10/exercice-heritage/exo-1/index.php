<?php
require 'Reader.class.php';


$guignol = new Reader("jean.poisson@gmail.com", "azerty123");

$books = $guignol->addBookToFavorites("Ce que je cherche dans l'amphi N | J.Bardella");
$books = $guignol->addBookToFavorites("Top 5 des dénis de démocatie ! | E.Macron");

print_r($books);


$books = $guignol->removeBookFromFavorites("Top 5 des dénis de démocatie! | E.Macron");

print_r($books);

$phpdemerde = $guignol->login();

print_r($phpdemerde);
