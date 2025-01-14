<?php


class UserManager
{

    private $users = [];
    private $db;

    public function __construct()
    {
        require '../connexion.php';
        $this->db = new PDO(
            $connexionString,
            $user,
            $password
        );
    }

    public function getUsers()
    {
        return $this->users;
    }

    public function setUsers($users)
    {
        $this->users = $users;
    }

    public function loadUsers() {}

    public function saveUser(User $user) {}

    public function deleteUser(User $user) {}
}
