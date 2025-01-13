# Proyecto_7

API-REST-AUTH
Esta es una API REST AUTH creada como parte de un proyecto educativo.
Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar proyectos y sus propietarios, para que un usuario pueda introducir esos datos se tiene que logear, y por eso se crea un usuario con contraseña, y esta contraseña se encripta para que no la pueda ver nadie.
Para realizar las operaciones CRUD uso la APP INMSOMIA, y todo se gestiona en la BBDD de MongoDB llamada Proeycto_7.

## Endpoints

### Users

POST /api/v1/users/register: Registro de un nuevo usuario.
POST /api/v1/users/login: Inicio de sesión de un usuario.

### Projects

GET /api/v1/projects: Obtiene todos los proyectos.
POST /api/v1/projects: Crea un nuevo proyecto.
PUT /api/v1/projects/:id: Actualiza un proyecto existente.
DELETE /api/v1/projects/:id: Elimina un proyecto.

### Owners

GET /api/v1/owners: Obtiene todos los propietarios.
POST /api/v1/owners: Crea un nuevo propietario.
PUT /api/v1/owners/:id: Actualiza un propietario existente.
DELETE /api/v1/owners/:id: Elimina un propietario y su archivo asociado en Cloudinary.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- INMSOMIA
- Visual Studio Code

## Instalación

https://github.com/GiraMorales/Proyecto_7_API-REST-AUTH.git

### Se instala las dependencias

- "bcrypt"
- "cors"
- "dotenv"
- "express"
- "jsonwebtoken"
- "mongodb"
- "mongoose"
