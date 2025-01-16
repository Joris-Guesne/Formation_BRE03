<?php

register_nav_menu("Primary", "Le menu principal du site");

function getProjects(): array
{
    $args = array(
        'post_type' => 'projet',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'title',
        'order'   => 'ASC'
    );

    $projets = get_posts($args);

    return $projets;
}
function getProject(): array
{
    $project = [];
    $project["titre"] = get_the_title();
    $project["description"] = get_field("description_du_projet");
    $project["technologies"] = get_field("technologies_projet");

    return $project;
}
