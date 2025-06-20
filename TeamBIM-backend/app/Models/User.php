<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    protected $connection = 'mysql';
    protected $table = 'usuario';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'rol',
        'avatar_url',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function proyectos()
    {
        return $this->belongsToMany(Proyecto::class, 'usuario_proyecto', 'id_usuario', 'id_proyecto');
    }

    // Tareas asignadas a este usuario
    public function tareasAsignadas()
    {
        return $this->hasMany(Tarea::class, 'usuario_asigando', 'id_usuario');
    }

    // Tareas que este usuario ha creado
    public function tareasCreadas()
    {
        return $this->hasMany(Tarea::class, 'creado_por_ta', 'id_usuario');
    }
}
