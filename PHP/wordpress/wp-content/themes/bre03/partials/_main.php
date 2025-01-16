<?php
$projects = getProjects();
var_dump($projects);
?>

<ul>
    <?php foreach ($projects as $project) { ?>
        <li>
            <article>
                <?= get_the_post_thumbnail($project->ID); ?>
                <h2><?= $project->post_title ?> </h2>
                <a href="<?= $project->guid ?>">Découvrir le projet</a>
            </article>
        </li>
    <?php  } ?>
</ul>