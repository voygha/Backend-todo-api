# Backend CRUD con Node.js y Express

Este es un proyecto de ejemplo para crear una aplicación CRUD básica usando Node.js y Express. Los datos se almacenan en un objeto en memoria.

## Cómo Ejecutar

1. Instala las dependencias con `npm install`
2. Ejecuta el servidor con `npm run dev`(Entorno de desarrollo)
3. Accede a la API en `http://localhost:3000/api/todos`
4. Realiza los test con `npm test`

## Rutas Disponibles

- `GET /api/todos`: Obtener todas las tareas
- `POST /api/todos`: Crear una nueva tarea
- `GET /api/todos/:id`: Obtener una tarea por ID
- `PUT /api/todos/:id`: Actualizar una tarea por ID
- `DELETE /api/todos/:id`: Eliminar una tarea por ID

