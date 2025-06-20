<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    use HasFactory;


    // App\Models\Proyecto.php

    public function usuarios()
    {
        return $this->belongsToMany(Usuario::class, 'usuario_proyecto', 'id_proyecto', 'id_usuario')
            ->withPivot('rol_proyecto', 'fecha_union');
    }

    public function tareas()
    {
        return $this->hasManyThrough(Tarea::class, Tablero::class, 'id_proyecto', 'id_tablero', 'id_proyecto', 'id_tablero');
    }
}
