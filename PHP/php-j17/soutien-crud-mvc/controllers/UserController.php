<?php

class UserController
{
    public function create(): void
    {
        $template = "./templates/users/create.phtml";
        $title = "Créer utilisateur";

        //$userManager = new UserManager();
        //$userManager->create();

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
        $userManager = new UserManager();
        $userManager->findOne();
        require "./templates/layout.phtml";
    }

    public function update(): void
    {
        $template = "./templates/users/update.phtml";
        $title = "Modif utilisateur";

        $userManager = new UserManager();
        $userManager->update();

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

        $userManager = new UserManager();
        $userManager->findAll();

        require "./templates/layout.phtml";
    }
}
