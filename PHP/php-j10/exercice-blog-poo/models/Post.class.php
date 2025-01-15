<?php

require_once 'User.class.php';
require_once 'Category.class.php';

class Post
{
    private ?int $id = null;
    private string $title;
    private string $excerpt;
    private string $content;
    private User $author;
    private DateTime $created_at;
    private array $categories = [];

    function __construct(string $title, string $excerpt, string $content, User $author, DateTime $created_at)
    {
        $this->title = $title;
        $this->excerpt = $excerpt;
        $this->content = $content;
        $this->author = $author;
        $this->created_at = $created_at;
        $this->id = null;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): void
    {
        $this->id = $id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getExcerpt(): string
    {
        return $this->excerpt;
    }

    public function setExcerpt(string $excerpt): void
    {
        $this->excerpt = $excerpt;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(string $content): void
    {
        $this->content = $content;
    }

    public function getAuthor(): User
    {
        return $this->author;
    }

    public function setAuthor(User $author): void
    {
        $this->author = $author;
    }

    public function getCreatedAt(): DateTime
    {
        return $this->created_at;
    }

    public function setCreatedAt(DateTime $created_at): void
    {
        $this->created_at = $created_at;
    }

    public function getCategories(): array
    {
        return $this->categories;
    }

    public function setCategories(array $categories): void
    {
        $this->categories = $categories;
    }

    public function addCategory(Category $category): void
    {
        $this->categories[] = $category;
    }

    public function removeCategory(Category $category): void
    {
        foreach ($this->categories as $key => $currentCategory) {
            if ($currentCategory === $category) {
                unset($this->categories[$key]);
            }
        }
    }
}
