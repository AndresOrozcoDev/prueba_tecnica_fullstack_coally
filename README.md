# Task Manager - Full Stack

## Descripción del Proyecto

El objetivo de este proyecto es desarrollar una aplicación de gestión de tareas (Task Manager) que permita a los usuarios:

- Crear, leer, actualizar y eliminar tareas.
- Visualizar la lista de tareas en una interfaz moderna y fácil de usar.
- Marcar tareas como completadas o pendientes.

## Enlaces Importantes

- **Aplicación Desplegada Backend**: [URL del Backend](#)
- **Aplicación Desplegada Frontend**: [URL del Frontend](#)

## Funcionalidades

### Backend

1. API REST con los siguientes endpoints:
   - `POST /api/tasks`: Crea una nueva tarea.
   - `GET /api/tasks`: Devuelve la lista de tareas con opción de filtro por estado.
   - `GET /api/tasks/:id`: Devuelve los detalles de una tarea específica.
   - `PUT /api/tasks/:id`: Actualiza los campos de una tarea.
   - `DELETE /api/tasks/:id`: Elimina una tarea.

2. Especificaciones técnicas:
   - Base de datos: MongoDB utilizando Mongoose.
   - Validaciones: Implementadas con `express-validator`.
   - Documentación: Swagger para describir los endpoints.
   - Manejo de errores: Respuestas estructuradas con códigos de estado HTTP.

### Frontend

1. Funcionalidades principales:
   - Pantalla principal para listar tareas (título, estado, fecha de creación).
   - Formulario para crear nuevas tareas.
   - Opciones para editar o eliminar tareas.
   - Filtro para mostrar tareas completadas, pendientes o todas.
   - Diseño responsivo para escritorio y dispositivos móviles.

2. Especificaciones técnicas:
   - Framework: React.js con Chakra UI o Tailwind CSS.
   - Estado global: Context API o Redux.
   - Integración con API del backend.
   - Manejo de errores con mensajes claros al usuario.

## Requerimientos para Ejecución Local

### Prerrequisitos

1. **Node.js** (v16+ recomendado).
2. **MongoDB** instalado y en ejecución.
3. **Git** para clonar los repositorios.

### Variables de Entorno

Crea un archivo `.env` en la raíz de cada proyecto con las siguientes variables:

#### Backend
```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/task-manager
```

#### Frontend
```env
    REACT_APP_API_URL=http://localhost:5000/api
```