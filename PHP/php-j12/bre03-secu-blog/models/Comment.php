<?php

/**
 * @author : Gaellan
 * @link : https://github.com/Gaellan
 */


class Comment
{
    private ?int $id = null;
    private string $content;
    private Post $post;
    private User $user;

    public function __construct(string $content)
    {
        $this->content = $content;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(string $content): void
    {
        $this->content = $content;
    }
}
