<?php

class UserController
{
    public function __construct() {}

    public function show(): void
    {
        $calledTemplate = "show";
        require 'templates/layout.phtml';
    }

    public function create(): void
    {
        $calledTemplate = "create";
        require 'templates/layout.phtml';
    }

    public function update(): void
    {
        $calledTemplate = "update";
        require 'templates/layout.phtml';
    }

    public function list(): void
    {
        $calledTemplate = "list";
        require 'templates/layout.phtml';
    }

    public function checkCreate()
    {
        //developper la function check create
    }

    public function checkUpdate()
    {
        //developper la function check update
    }

    public function delete()
    {
        //developper la function delete
    }
}
