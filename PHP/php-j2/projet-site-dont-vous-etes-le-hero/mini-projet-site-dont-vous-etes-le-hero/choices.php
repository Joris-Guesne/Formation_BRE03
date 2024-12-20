<?php

if (isset($_GET["heroName"])) {
    $heroName = $_GET["heroName"];
}

//------------------DEBUT DE L HISTOIRE
if (
    isset($_GET["heroName"]) && !isset($_GET["choice"]) && !isset($_GET["eventNumber"])
) {

    $choiceShortSentence = "$heroName, que répondez vous ?";
    $eventDescription = "Vous êtes actuelement à la fête annuelle de votre entreprise à Noel au chateau de Bicareau-sur-Pense. 
    <br>Oh, mais qu'est ce qui arrive sous vos yeux? 
    <br>Un énorme plateau recouvert de petits four bien chaud...";
    $eventImage = "assets/img/tower.png";
    $choices = [
        "Non merci je n'ai pas faim. <br>(Vous ne mangez rien)",
        "Oh, avec plaisir ! <br>(Vous prennez deux petit four)",
        "WOW JE CREVE LA DALLE <br>(Vous gobez les 150 petits fours, vous mangez le plateau en metal avec)",
    ];

    $eventNumber = 1;
    $color = "grey-blue";
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 1 && isset($_GET["choice"]) && $_GET["choice"] == 1) { //------------------CHEMIN > 1
    {
        $eventDescription = "Vous avez décidé d'ignorer la bouffe.
        <br>Une heure plus tard, vous commencez à avoir réelement faim...";
        $choiceShortSentence = "Que faites vous ?";
        $eventImage = "assets/img/tower.png";
        $choices = [
            "Vous allez dans la cuisine du chateau",
            "Vous attendez encore un peu. La faim c'est dans la tête",
            "VOUS TUEZ VOTRE VOISIN A VOTRE DROITE POUR LE BOUFFER",
        ];

        $eventNumber = 2;
        $color = "grey-blue";
    }
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 1 && isset($_GET["choice"]) && $_GET["choice"] == 2) { //------------------CHEMIN > 2
    {
        $eventDescription = "Ces deux petits truc était délicieux !
        <br>Malheureusement, ils ont tous étés mangés! Vous voulez vous occuper autrement...";
        $choiceShortSentence = "Mais que faire ?";
        $eventImage = "assets/img/tower.png";
        $choices = [
            "Vous voyez une télévision dans le coin de la piece. Vous décidez de vous posez en plein milieu de la fête et de regarder le BEST-OF gags de Noêl sur TMC",
            "Vous regardez votre téléphone",
            "VOUS VOUS METEZ A POIL EN PLEIN MILIEU DE LA PIECE ET VOUS DÉFÉQUEZ SUR L'OEUF DE FABERGÉ POSÉ SUR LA COMMODE",
        ];

        $eventNumber = 3;
        $color = "grey-blue";
    }
} else if (isset($_GET["eventNumber"]) && $_GET["eventNumber"] == 1 && isset($_GET["choice"]) && $_GET["choice"] == 3) { //------------------CHEMIN > 3
    {
        $eventDescription = "PUTAIN VOUS AVEZ ENCORE LA DALLE";
        $choiceShortSentence = "TU FAIS QUOI ???";
        $eventImage = "assets/img/tower.png";
        $choices = [
            "JE TUE MON VOISIN A MA DROITE POUR LE BOUFFER",
            "JE MANGE TOUTE MES CROTTES DE NEZ (avec un cure dent)",
            "JE VAIS BOIRE L EAU DES CHIOTTES !",
        ];

        $eventNumber = 4;
        $color = "red";
    }
}

require "templates/choice.phtml";
