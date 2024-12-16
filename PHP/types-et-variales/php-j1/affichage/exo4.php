<?php 
    $users = [
        [
            "firstName" => "Bugs",
            "lastName" => "Bunny",
            "age" => 29
        ],
        [
            "firstName" => "Roger",
            "lastName" => "Rabbit",
            "age" => 17
        ]
    ];
?>

<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <title>Exercice 4</title>
    </head>
    <body>
        <h1>
            Liste des utilisateurs
        </h1>
        <ul>
            <?php foreach($users as $user) { ?>
                <li>
                    <?php
                        if ($user["age"] >= 18)
                        {
                            $legal = "majeur-e";
                        }
                        else
                        {
                            $legal = "mineur-e";
                        }
                         
                        echo "{$user["firstName"]} {$user["lastName"]} : $legal"; 
                    ?>
                </li>
            <?php } ?>
        </ul>
    </body>
</html>