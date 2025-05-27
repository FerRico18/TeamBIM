<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email'=> 'required|email', 
            'password'=>'required'
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json(['user' => $user]);
        }

        // Aquí podríamos generar un token o algo, por ahora solo éxito
        return response()->json(['message' => 'Credenciales incorrectas'], 422);
    }
}