<?php

require 'Character.class.php';
require 'Mage.class.php';
require 'Warrior.class.php';

$benoit = new Character();
$benoit->setName("Benoit");
$benoit->setLife(150);

$guerrier = new Warrior(2000, "Titouan", 1200);
$magicien = new Mage(750, "Conrad", 2500);

echo ($benoit->introduce() . '<br>');
echo ("{$guerrier->introduce()} et j'ai {$guerrier->getEnergy()} point concernant mon energie et {$guerrier->getLife()} point de vie <br>");
