<?php

class Post
{
    private string $title;
    private string $content;
    private string $slug;
    private bool $private;

    function __construct(string $title, string $content, string $slug, bool $private = false)
    {
        $this->title = $title;
        $this->content = $content;
        $this->slug = $slug;
        $this->private = $private;
    }

    private function checkIfTitleIsEmpty(): void
    {
        if (empty($title)) {
            throw new InvalidArgumentException("Le titre ne peux pas être innexistant.");
        }
    }
    private function checkIfSlugIsEmpty(): void
    {
        if (empty($slug)) {
            throw new InvalidArgumentException("Le slug ne peux pas être innexistant.");
        }
    }
    private function checkIfSlugIsSafe(string $slug): void
    {
        if (!preg_match('/^[a-z0-9-]+$/', $slug)) {
            throw new InvalidArgumentException("Le slug ne contient pas de caractères valides.");
        }
        /*
        1. preg_match() est une fonction PHP qui permet de rechercher un motif (pattern) dans une 
        chaîne de caractères.

        2. Le premier argument de preg_match() est le motif à rechercher, écrit sous forme 
        d'expression régulière (regex). Dans ce cas, le motif est /^[a-z0-9-]+$/.

            - ^ indique le début de la chaîne.
            - [a-z0-9-] indique que le motif doit correspondre à n'importe quel caractère 
                minuscule de 'a' à 'z', n'importe quel chiffre de '0' à '9', ou le caractère '-'.
            - + indique que le motif doit se répéter une ou plusieurs fois.
            - $ indique la fin de la chaîne.
        */
    }
    private function checkIfContentIsEmpty(): void
    {
        if (empty($content)) {
            throw new InvalidArgumentException("Le contenu ne peux pas être innexistant.");
        }
    }


    /*Setter et Getters générés par IA
    _______________________________________________________________________*/

    // Getter for title
    public function getTitle(): string
    {
        return $this->title;
    }

    // Setter for title
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    // Getter for content
    public function getContent(): string
    {
        return $this->content;
    }

    // Setter for content
    public function setContent(string $content): void
    {
        $this->content = $content;
    }

    // Getter for slug
    public function getSlug(): string
    {
        return $this->slug;
    }

    // Setter for slug
    public function setSlug(string $slug): void
    {
        $this->slug = $slug;
    }

    // Getter for private
    public function isPrivate(): bool
    {
        return $this->private;
    }

    // Setter for private
    public function setPrivate(bool $private): void
    {
        $this->private = $private;
    }
}
