# Proyecto_7

API-REST-AUTH
Esta es una API REST AUTH creada como parte de un proyecto educativo.
Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar proyectos y sus propietarios, para que un usuario pueda introducir esos datos se tiene que logear, y por eso se crea un usuario con contraseña, y esta contraseña se encripta para que no la pueda ver nadie.
Para realizar las operaciones CRUD uso la APP INMSOMIA, y todo se gestiona en la BBDD de MongoDB llamada Proeycto_7.

## Endpoints

### Users

GET /api/v1/users: Obtiene todos los usuarios.
POST /api/v1/users: Crea un nuevo usuario.
PUT /api/v1/users/:id: Actualiza un usuario existente.
DELETE /api/v1/users/:id: Elimina un usuario.

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

### añadir los scripts

`Para ejecutar el fichero  index.js`

- "start": "node index.js"

`Para levantar la base de datos`

- "dev": "nodemon index.js"
