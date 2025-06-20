-- Insertar usuarios (10)
INSERT INTO usuario (id_usuario, nombre, email, password, rol, avatar_url, fecha_creacion_us, fecha_modif_us)
VALUES
(1, 'Fernanda Rico', 'fer.rico@gmail.com', 'MRico18_', 'admin', 'https://example.com/avatar1.png', NOW(), NOW()),
(2, 'Luis Méndez', 'luis.mz@email.com', 'hashed1234', 'arquitecto', 'https://example.com/avatar2.png', NOW(), NOW()),
(3, 'Andrea López', 'andrea.lp@email.com', 'hashed1234', 'ingeniero', 'https://example.com/avatar3.png', NOW(), NOW()),
(4, 'Carlos Reyes', 'carlos.re@email.com', 'hashed1234', 'coordinador', 'https://example.com/avatar4.png', NOW(), NOW()),
(5, 'Valeria Torres', 'vale.to@email.com', 'hashed1234', 'admin', 'https://example.com/avatar5.png', NOW(), NOW()),
(6, 'Roberto Díaz', 'robert.dz@email.com', 'hashed1234', 'ingeniero', 'https://example.com/avatar6.png', NOW(), NOW()),
(7, 'Sofía Cruz', 'sofia.cz@email.com', 'hashed1234', 'arquitecto', 'https://example.com/avatar7.png', NOW(), NOW()),
(8, 'Daniel Sánchez', 'dan.san@email.com', 'hashed1234', 'coordinador', 'https://example.com/avatar8.png', NOW(), NOW()),
(9, 'Paula Jiménez', 'paula.jz@email.com', 'hashed1234', 'arquitecto', 'https://example.com/avatar9.png', NOW(), NOW()),
(10, 'Esteban Marín', 'esteban.mr@email.com', 'hashed1234', 'ingeniero', 'https://example.com/avatar10.png', NOW(), NOW());

-- Insertar proyectos (3)s
INSERT INTO proyecto (id_proyecto, nombre_proy, descripcion_proy, estatus_proy, fecha_inicio_proy, fecha_fin_proy, creado_por)
VALUES
(1, 'Casa Modelo', 'Diseño de casa moderna', 'activo', '2025-01-01', '2025-06-30', 1),
(2, 'Edificio Central', 'Construcción de edificio 5 pisos', 'activo', '2025-03-01', '2025-12-15', 2),
(3, 'Remodelación IT', 'Oficinas para área TI', 'planificación', '2025-05-01', '2025-09-15', 5);

-- Relación usuario-proyecto (6)
INSERT INTO usuario_proyecto (id_usuario_proy, id_usuario, id_proyecto, rol_proyecto, fecha_union)
VALUES
(1, 1, 1, 'admin', NOW()),
(2, 2, 1, 'arquitecto', NOW()),
(3, 3, 2, 'ingeniero', NOW()),
(4, 4, 2, 'coordinador', NOW()),
(5, 5, 3, 'admin', NOW()),
(6, 6, 3, 'ingeniero', NOW());

-- Tableros (uno por proyecto)
INSERT INTO tablero (id_tablero, nombre_tab, id_proyecto, descripcion_tab)
VALUES
(1, 'Casa Board', 1, 'Etapas casa modelo'),
(2, 'Central Board', 2, 'Tareas del edificio'),
(3, 'TI Board', 3, 'Tareas de remodelación TI');

-- Etapas (2 por tablero)
INSERT INTO etapa (id_etapa, nombre_etapa, id_tablero, posicion)
VALUES
(1, 'Inicio', 1, 1),
(2, 'Diseño', 1, 2),
(3, 'Planeación', 2, 1),
(4, 'Construcción', 2, 2),
(5, 'Análisis', 3, 1),
(6, 'Implementación', 3, 2);

-- Tareas (2 por etapa → 12)
INSERT INTO tarea (id_tarea, titulo, descripcion_ta, id_etapa, usuario_asigando, fecha_vencimiento, prioridad, estatus_ta, creado_por_ta, fecha_creacion_ta, fecha_modif_ta)
VALUES
(1, 'Plano base', 'Subir planos generales', 1, 2, '2025-01-10 10:00:00', 'alta', 'pendiente', 1, NOW(), NOW()),
(2, 'Render preliminar', 'Render sin texturas', 1, 2, '2025-01-20 10:00:00', 'media', 'pendiente', 1, NOW(), NOW()),
(3, 'Diseño fachada', 'Fachada frontal y trasera', 2, 2, '2025-01-25 15:00:00', 'alta', 'en progreso', 1, NOW(), NOW()),
(4, 'Materiales', 'Especificaciones de materiales', 2, 2, '2025-02-01 10:00:00', 'baja', 'pendiente', 1, NOW(), NOW()),
(5, 'Planificación', 'Diagrama Gantt', 3, 3, '2025-03-05 14:00:00', 'media', 'pendiente', 3, NOW(), NOW()),
(6, 'Presupuesto', 'Estimación de costos', 3, 3, '2025-03-10 16:00:00', 'alta', 'en progreso', 3, NOW(), NOW()),
(7, 'Cimientos', 'Excavación y base', 4, 3, '2025-04-01 08:00:00', 'alta', 'pendiente', 3, NOW(), NOW()),
(8, 'Muros', 'Levantamiento de muros', 4, 3, '2025-04-15 11:00:00', 'media', 'pendiente', 3, NOW(), NOW()),
(9, 'Diagnóstico', 'Revisión de espacios', 5, 6, '2025-05-10 09:00:00', 'media', 'pendiente', 5, NOW(), NOW()),
(10, 'Cableado', 'Infraestructura de red', 6, 6, '2025-06-01 13:00:00', 'alta', 'en progreso', 5, NOW(), NOW()),
(11, 'Pisos', 'Cambiar acabados', 6, 6, '2025-06-15 15:00:00', 'baja', 'pendiente', 5, NOW(), NOW()),
(12, 'Finalización', 'Checklist general', 6, 6, '2025-07-01 10:00:00', 'alta', 'pendiente', 5, NOW(), NOW());

-- Comentarios (5)
INSERT INTO comentario (id_comentario, id_tarea, id_usuario, contenido)
VALUES
(1, 1, 2, 'Subo plano mañana en la mañana'),
(2, 3, 2, 'Fachada lista, falta revisión'),
(3, 6, 3, 'Costo materiales se elevó'),
(4, 9, 6, 'Hay muebles que necesitan reubicarse'),
(5, 12, 6, 'Todo listo para revisión final');
