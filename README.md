# TeamBIM

**TeamBIM** es una plataforma web colaborativa que combina lo mejor de la gestión de proyectos tipo Trello con herramientas BIM (Building Information Modeling). Está pensada para arquitectos e ingenieros civiles que trabajan en equipo y necesitan un control claro de avances, entregas y versiones del modelo BIM.

## Características principales
- Gestión de proyectos y tareas estilo tablero Kanban.
- Integración con modelos BIM para visualización y seguimiento de avances.
- Control de versiones por etapa del proyecto (arquitectura, ingeniería, etc).
- Roles de usuario: arquitecto, ingeniero, gestor de proyecto, cliente.
- Colaboración en tiempo real.
- Backend con Laravel y frontend en React + Chakra UI.

## Tecnologías utilizadas
- **Frontend:** React, Vite, Chakra UI
- **Backend:** Laravel 10
- **Base de datos:** PostgreSQL
- **Contenedores:** Docker
- **Control de versiones BIM:** IFC.js (planificado)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-user/teamBIM.git
2. Levanta los servicios con Docker:
   ```bash
   docker-compose up --build
3. Instala dependencias del frontend y backend:
   ```bash
   cd frontend
   npm install
   
   cd ../backend
   composer install

4. Configura tu entorno:
Copia el archivo .env.example a .env en el backend.
Asegúrate de que los puertos 5173 (frontend) y 8000 (backend) estén disponibles.

5. Ejecuta migraciones:
    ```bash
    php artisan migrate

**Roadmap**
 - Sistema de login y registro
 - Gestión de tableros y tareas
 - Visualización de modelos BIM
 - Notificaciones en tiempo real
 - Chat de proyecto
