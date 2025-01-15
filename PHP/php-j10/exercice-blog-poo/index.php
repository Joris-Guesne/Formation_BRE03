<?php


require_once './models/Category.class.php';
require_once './models/Post.class.php';

$user1 = new User("Kramator2000", "nicolas.dussert@wanadoo.fr", "Medor2007!", "USER", new DateTime());

echo "<pre>";
var_dump($user1);
echo "</pre>";

$category = new Category("Accessibilité", "Les articles traitant de l'accessibilité web");

echo "<pre>";
var_dump($category);
echo "</pre>";

$post = new Post("Mettez des alt", "On oublie trop souvent les textes alternatifs des balises images...", "Et c'est pas bien ça me rend tout-e colère !", $user1, new DateTime());

echo "<pre>";
var_dump($post);
echo "</pre>";

$category->addPosts($post);

$post->addCategory($category);

echo "<pre>";
var_dump($category);
echo "</pre>";

echo "<pre>";
var_dump($post);
echo "</pre>";
