<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProyectoController extends Controller
{
    public function index()
    {
        return Proyecto::with('usuarios')->get(); // lista de proyectos con sus usuarios
    }

    public function show($id)
    {
        return Proyecto::with('usuarios')->findOrFail($id);
    }
}
