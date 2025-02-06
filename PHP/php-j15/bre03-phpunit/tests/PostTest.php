<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

class PostTest extends TestCase
{
    public function postTest()
    {
        $post = new Post("Titre", "Contenu", "Lien");

        $this->assertEquals("Titre", $post->getTitle());
        $this->assertEquals("Contenu", $post->getContent());
        $this->assertEquals("Lien", $post->getSlug());
        $this->assertFalse($post->isPrivate());
    }

    public function testTitleCannotBeEmpty()
    {
        $this->expectException(InvalidArgumentException::class);
        new Post("", "Contenu", "Lien");
    }

    public function testSlugCannotBeEmpty()
    {
        $this->expectException(InvalidArgumentException::class);
        new Post("Titre", "Contenu", "");
    }

    public function testSlugMustBeUrlSafe()
    {
        $this->expectException(InvalidArgumentException::class);
        new Post("Titre", "Contenu", "le lien n est pas bon");
    }

    public function testContentCannotBeEmpty()
    {
        $this->expectException(InvalidArgumentException::class);
        new Post("Titre", "", "Lien");
    }

    public function testSetPrivate()
    {
        $post = new Post("Titre", "Contenu", "Lien");
        $post->setPrivate(true);
        $this->assertTrue($post->isPrivate());

        $post->setPrivate(false);
        $this->assertFalse($post->isPrivate());
    }
}
