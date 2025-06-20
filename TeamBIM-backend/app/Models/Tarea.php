<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    use HasFactory;

    public function usuarioAsignado()
    {
        return $this->belongsTo(User::class, 'usuario_asigando', 'id_usuario');
    }

    public function creador()
    {
        return $this->belongsTo(User::class, 'creado_por_ta', 'id_usuario');
    }
}
