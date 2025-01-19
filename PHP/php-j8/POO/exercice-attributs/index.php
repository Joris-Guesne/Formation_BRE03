<?php

require 'Character.php';



$sarah = new Character(1);

echo ($sarah->getFullName());

            $sarah->setFirstName("Sarah");
$sarah->setLastName("Connor");

echo ($sarah->getFullName());
