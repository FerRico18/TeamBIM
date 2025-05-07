<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;


// RUTA PARA LOGIN
Route::post('/login', [LoginController::class, 'login']);
// RUTA PARA SIGN IN
Route::post('/register', [RegisterController::class, 'register'])
