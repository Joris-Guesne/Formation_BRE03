<?php
require_once "./AbstractManager.php";

class UserManager extends AbstractManager
{
    public function __construct()
    {
        parent::__construct();
    }

    public function findAll(): array
    {
        $query = $this->db->prepare('SELECT * FROM users');
        $parameters = [];
        $query->execute($parameters);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function findOne(int $id): User
    {
        $query = $this->db->prepare('SELECT * FROM users WHERE users.id = :id');
        $parameters = ["id" => $id];
        $query->execute($parameters);
        $result = $query->fetch(PDO::FETCH_ASSOC);

        $user = new User($result["email"], $result["first_name"], $result["last_name"]);
        $user->setId($result["id"]);

        return $user;
    }

    public function create(User $user): void
    {
        $query = $this->db->prepare('INSERT INTO users (id, email, first_name, last_name) VALUES (NULL, :email, :first_name, :last_name)');
        $parameters = [
            "email" => $user->getEmail(),
            "first_name" => $user->getFirstName(),
            "last_name" => $user->getLastName()
        ];
        $query->execute($parameters);
    }

    public function update(User $user): void
    {

        $query = $this->db->prepare('UPDATE users SET email = :email, first_name = :first_name, last_name = :last_name WHERE id = :id');
        $parameters = [
            "id" => $user->getId(),
            "email" => $user->getEmail(),
            "first_name" => $user->getFirstName(),
            "last_name" => $user->getLastName()
        ];
        $query->execute($parameters);
    }

    public function delete(User $user): void
    {
        $query = $this->db->prepare("DELETE FROM users WHERE id = :id");
        $parameters = [
            "id" => $user->getId()
        ];
        $query->execute($parameters);
    }
}
