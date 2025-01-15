<?php
require_once 'Post.class.php';

class Category
{
    private string $title;
    private string $description;
    private ?int $id = null;
    private array $posts = [];

    function __construct(string $title, string $description)
    {
        $this->title = $title;
        $this->description = $description;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): void
    {
        $this->id = $id;
    }

    public function getPosts(): array
    {
        return $this->posts;
    }

    public function setPosts(array $posts): void
    {
        $this->posts = $posts;
    }

    public function addPosts(Post $post): void
    {
        $this->posts[] = $post;
    }

    public function removePosts(Post $post): void
    {
        foreach ($this->posts as $key => $currentPost) {
            if ($currentPost === $post) {
                unset($this->posts[$key]);
            }
        }
    }
}
