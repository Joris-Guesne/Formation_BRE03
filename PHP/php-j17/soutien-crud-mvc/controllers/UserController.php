<?php

class UserController
{
    public function create(): void
    {
        $template = "create.phtml";
        $title = "Créer utilisateur";
        require "./templates/layout.phtml";
    }

    public function checkCreate(): void
    {
        $title = "Vérif creation utilisateur";
    }

    public function show(): void
    {
        $template = "show.phtml";
        $title = "Infos utilisateur";
        require "./templates/layout.phtml";
    }

    public function update(): void
    {
        $template = "update.phtml";
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
        $template = "list.phtml";
        $title = "Liste des utilisateurs";
        require "./templates/layout.phtml";
    }
}
