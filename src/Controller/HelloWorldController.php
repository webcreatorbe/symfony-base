<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

// TODO: remove me!
class HelloWorldController extends AbstractController
{
    #[Route('/', name: 'hello_world')]
    public function index(): Response
    {
        return $this->render('hello_world.html.twig', []);
    }
}
