<?php

$project = getProject();

?>

<!DOCTYPE html>
<html lang="fr">
<?php require "partials/_head.php"; ?>

<body>
    <?php require "partials/_header.php"; ?>
    <main>
        <h2><?= $project["titre"] ?></h2>
        <p>
            <?= $project["description"] ?>
        </p>
        <h3>Technologies utilisées</h3>
        <ul>
            <?php foreach ($project["technologies"] as $technologie) { ?>
                <li><?= $technologie ?> </li>
            <?php } ?>
        </ul>
    </main>

    <?php require "partials/_footer.php"; ?>
</body>

</html>