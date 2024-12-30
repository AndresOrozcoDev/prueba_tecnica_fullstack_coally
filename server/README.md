
# Task Manager - Backend

## Descripción del Proyecto

El backend de esta aplicación es responsable de manejar la lógica del servidor, las tareas y las interacciones con la base de datos. Permite a los usuarios realizar las siguientes acciones con las tareas:

- Crear, leer, actualizar y eliminar tareas.

## Enlaces Importantes

- **Aplicación Desplegada**: [Backend Docs](https://prueba-tecnica-fullstack-coally.onrender.com/docs/)

## Funcionalidades

### API REST

1. Endpoints disponibles:
   - `POST /api/tasks`: Crea una nueva tarea.
   - `GET /api/tasks`: Devuelve la lista de tareas con opción de filtro por estado.
   - `GET /api/tasks/:id`: Devuelve los detalles de una tarea específica.
   - `PUT /api/tasks/:id`: Actualiza los campos de una tarea.
   - `DELETE /api/tasks/:id`: Elimina una tarea.

2. Especificaciones técnicas:
   - **Base de datos**: MongoDB utilizando Mongoose.
   - **Validaciones**: Implementadas con `express-validator`.
   - **Documentación**: Swagger para describir los endpoints.
   - **Manejo de errores**: Respuestas estructuradas con códigos de estado HTTP.

## Requerimientos para Ejecución Local

### Prerrequisitos

1. **Node.js** (v16+ recomendado).
2. **MongoDB** instalado y en ejecución.
3. **Git** para clonar el repositorio.

### Clona el repositorio

```bash
    git clone https://github.com/AndresOrozcoDev/prueba_tecnica_fullstack_coally.git
```

### Ubicate en el servidor

```bash
    cd prueba_tecnica_fullstack_coally
    cd server
```

### Instala las dependencias

```bash
    npm i
```

### Ejecuta el servidor

```bash
    npm run dev
```

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/task-manager
```
