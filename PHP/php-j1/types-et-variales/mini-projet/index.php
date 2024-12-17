<?php

$students = [
    [
        "firstName" => "Hannah",
        "lastName" => "Fields",
        "grades" => [12, 11, 15],
        "average" => -1
    ],
    [
        "firstName" => "Richard",
        "lastName" => "Stein",
        "grades" => [18, 12, 13],
        "average" => -1
    ],
    [
        "firstName" => "Mark",
        "lastName" => "Hartoff",
        "grades" => [9, 11, 10],
        "average" => -1
    ],
    [
        "firstName" => "Charlie",
        "lastName" => "Nestle",
        "grades" => [9, 8, 5],
        "average" => -1
    ],
    [
        "firstName" => "Suzy",
        "lastName" => "Brent",
        "grades" => [18, 15, 16],
        "average" => -1
    ]
];

function computeAverage(array $grades): float
{
    $sum = 0;
    foreach ($grades as $grade) {
        $sum += $grade;
    }
    $sum = $sum / count($grades);
    return $sum;
}

?>

<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>Bulletin de notes</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>
        Bulletin de notes
    </h1>
    <h2>
        Liste des étudiants
    </h2>
    <ul id="students">
        <?php foreach ($students as $student) { ?>
            <li>
                <?php if (computeAverage($student["grades"]) < 10) { ?>
                    <article class="red">
                    <?php } else if (computeAverage($student["grades"]) >= 10 && computeAverage($student["grades"]) <= 13) { ?>
                        <article class="orange">
                        <?php } else { ?>
                            <article class="green">
                            <?php } ?>
                            <header>
                                <h1>
                                    <?= $student["firstName"] . " " . $student["lastName"]  ?>
                                </h1>
                            </header>
                            <section>
                                <h2>Notes : </h2>
                                <ul>
                                    <?php foreach ($student["grades"] as $grade) { ?>
                                        <li><?= "$grade/20" ?></li>
                                    <?php } ?>
                                </ul>
                            </section>
                            <footer>
                                <h3>Moyenne des notes de l'étudiant </h3>
                                <p> <?= computeAverage($student["grades"]) ?> </p>
                            </footer>
                            </article>
            </li>
        <?php } ?>
    </ul>
</body>

</html>