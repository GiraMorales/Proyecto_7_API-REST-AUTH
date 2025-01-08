require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../api/models/users');

// Datos iniciales
const users = [
  {
    username: 'admin',
    email: 'admin@example.com',
    role: 'admin',
    password: 'admin123'
  },
  {
    username: 'user1',
    email: 'user1@example.com',
    role: 'user',
    password: 'user123'
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    role: 'user',
    password: 'user456'
  }
];

// Función para poblar la base de datos
const seedUsers = async () => {
  try {
    // Conectar a la base de datos
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado a la base de datos');

    // Limpiar la colección antes de insertar
    await User.deleteMany({});
    console.log('Colección users limpiada');

    // Insertar datos
    await User.insertMany(users);
    console.log('Usuarios insertados correctamente');

    // Cerrar la conexión
    mongoose.disconnect();
    console.log('Conexión cerrada');
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1); // Finalizar el proceso con error
  }
};

// Ejecutar la semilla
seedUsers();
