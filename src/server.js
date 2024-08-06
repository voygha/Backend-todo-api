const express = require('express');
const app = express();
//Importacion de las rutas del todo
const todoRoutes = require('./routes/todo.routes');

app.use(express.json());

//Importacion de las rutas
app.use(require('./routes/index.routes'));

//definimos la ruta de la API
app.use('/api/todos', todoRoutes);

module.exports = app;