
# Task Manager - Frontend

## Descripción del Proyecto

El frontend de esta aplicación permite a los usuarios interactuar con el backend para gestionar tareas. Incluye una interfaz para mostrar, crear, editar y eliminar tareas de manera sencilla y visualmente atractiva.

## Enlaces Importantes

- **Aplicación Desplegada**: [Frontend](https://sunny-souffle-83db73.netlify.app/)

## Funcionalidades

1. Funcionalidades principales:
   - Pantalla principal para listar tareas (título, estado, fecha de creación).
   - Formulario para crear nuevas tareas.
   - Opciones para editar o eliminar tareas.
   - Filtro para mostrar tareas completadas, pendientes o todas.
   - Diseño responsivo para escritorio y dispositivos móviles.

2. Especificaciones técnicas:
   - **Framework**: React.js con Chakra UI o Tailwind CSS.
   - **Estado global**: Context API o Redux.
   - **Integración con API del backend**.
   - **Manejo de errores** con mensajes claros al usuario.

## Requerimientos para Ejecución Local

### Prerrequisitos

1. **Node.js** (v16+ recomendado).
2. **Git** para clonar el repositorio.

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
    VITE_API_URL=http://localhost:5000/api
```
