# Proyecto_7

API-REST-AUTH
Esta es una API REST AUTH creada como parte de un proyecto educativo.
Esta es una API REST para gestionar usuarios, proyectos y propietarios. Los usuarios deben autenticarse con un token JWT para realizar operaciones CRUD. Las contraseñas de los usuarios están encriptadas para garantizar la seguridad.
Para realizar las operaciones CRUD uso la APP INMSOMIA, y todo se gestiona en la BBDD de MongoDB llamada Proeycto_7.

## Funcionalidades

- **Usuarios**: Registro, login y gestión de roles.
- **Proyectos**: Creación, actualización, eliminación y obtención de proyectos.
- **Propietarios**: Gestión de propietarios y sus archivos asociados.

## Endpoints

### Users

GET /api/v1/users: Obtiene todos los usuarios.
POST /api/v1/users: Crea un nuevo usuario (rol por defecto: `user`).
PUT /api/v1/users/:id: Actualiza un usuario existente.
DELETE /api/v1/users/:id: Elimina un usuario (los administradores pueden eliminar a cualquier usuario, y los usuarios pueden eliminarse a sí mismos).

### Projects

GET /api/v1/projects: Obtiene todos los proyectos.
POST /api/v1/projects: Crea un nuevo proyecto (requiere autenticación).
PUT /api/v1/projects/:id: Actualiza un proyecto existente.
DELETE /api/v1/projects/:id: Elimina un proyecto (solo administradores).

### Owners

GET /api/v1/owners: Obtiene todos los propietarios.
POST /api/v1/owners: Crea un nuevo propietario (requiere autenticación).
PUT /api/v1/owners/:id: Actualiza un propietario existente.
DELETE /api/v1/owners/:id: Elimina un propietario y su archivo asociado en Cloudinary.

## Tecnologías Utilizadas

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Insomnia** (para realizar pruebas de API)
- **Cloudinary** (para la gestión de imágenes)
- **JWT** (para autenticación)

## Instalación

### Se clona este repositorio

https://github.com/GiraMorales/Proyecto_7_API-REST-AUTH.git

### Incializar un paquete de npm

- nmp init -y

### Se instala las dependencias

`Para encryptar las contraseñas de los usuarios.`

- "bcrypt"

`Para poder interactuar con la base de datos cloudinary y guardar allí las imagenes.`

- "cloudinary"

`Para permitir que mi servidor acepte solicitudes de origines diferentes.`

- "cors"

`Para manejar variables del archivo .env donde estan los datos sensibles que no pueden ver nadie.`

- "dotenv"

`Para simplificar la creación de rutas, middlewares y servidores.`

- "express"

`Para verificar y crear tokens de autenticación y autorización.`

- "jsonwebtoken"

`Para interactuar con la base de datos mongo.`

- "mongodb"

`Para crear modelos de dots y gestionarlos`

- "mongoose"

`Para procesar imagenes y documentos subidos por el usuario.`

- "multer"

`Para subir imágenes a Cloudinary a traves de Node.js`

- "multer-storage-cloudinary"

### añadir los scripts

`Para ejecutar el fichero  index.js`

- "start": "node index.js"

`Para levantar la base de datos`

- "dev": "nodemon index.js"
