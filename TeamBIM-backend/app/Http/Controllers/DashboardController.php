<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getDashboardData()
    {
        // Datos simulados del usuario
        $usuario = [
            'id' => 1,
            'nombre' => 'Fernanda Rico',
            'email' => 'fernanda.rico@gmail.com',
        ];

        // Proyectos reales del SQL
        $proyectos = [
            ['name' => 'Residencia UAEMéx', 'value' => 6],
            ['name' => 'Casa habitación', 'value' => 5],
            ['name' => 'Plaza comercial', 'value' => 7],
            ['name' => 'Torre ejecutiva', 'value' => 4],
        ];

        // Cronograma estilo Gantt
        $cronograma = [
            ['name' => 'Residencia UAEMéx', 'start' => 1, 'end' => 4, 'progress' => 80, 'color' => '#BEB8EB'],
            ['name' => 'Casa habitación',     'start' => 2, 'end' => 5, 'progress' => 60, 'color' => '#5299D3'],
            ['name' => 'Plaza comercial',      'start' => 3, 'end' => 6, 'progress' => 30, 'color' => '#0B5563'],
            ['name' => 'Torre ejecutiva',      'start' => 4, 'end' => 7, 'progress' => 90, 'color' => '#5E5C6C'],
        ];

        // Actividades por semana (para la gráfica de líneas)
        $lineData = [
            ['name' => 'Semana 1', 'Actividades' => 3],
            ['name' => 'Semana 2', 'Actividades' => 6],
            ['name' => 'Semana 3', 'Actividades' => 4],
            ['name' => 'Semana 4', 'Actividades' => 5],
        ];

        return response()->json([
            'usuario' => $usuario,
            'proyectos' => $proyectos,
            'cronograma' => $cronograma,
            'actividadesPorSemana' => $lineData,
        ]);
    }
}
