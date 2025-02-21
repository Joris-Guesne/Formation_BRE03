<?php

class UserController
{
    public function create(): void
    {
        $template = "./templates/users/create.phtml";
        $title = "Créer utilisateur";
        require "./templates/layout.phtml";
    }

    public function checkCreate(): void
    {
        $title = "Vérif creation utilisateur";
    }

    public function show(): void
    {
        $template = "./templates/users/show.phtml";
        $title = "Infos utilisateur";
        require "./templates/layout.phtml";
    }

    public function update(): void
    {
        $template = "./templates/users/update.phtml";
        $title = "Modif utilisateur";
        require "./templates/layout.phtml";
    }

    public function checkUpdate(): void
    {
        $title = "Vérif MAJ utilisateur";
    }

    public function delete(): void
    {
        $title = "Suppression utilisateur";
    }

    public function list(): void
    {
        $template = "./templates/users/list.phtml";
        $title = "Liste des utilisateurs";
        require "./templates/layout.phtml";
    }
}
