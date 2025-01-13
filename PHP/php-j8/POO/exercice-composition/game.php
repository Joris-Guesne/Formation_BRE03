<?php

require 'Character.php';
$personnage1 = new Character("Ragnar");
$personnage1->getWeapon()->setName('Sword');
$personnage1->getWeapon()->setDamages('10');

echo "{$personnage1->getName()} avec son arme : {$personnage1->getWeapon()->getName()} qui fait {$personnage1->getWeapon()->getDamages()} points de dégats.";
