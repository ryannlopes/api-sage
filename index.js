const express = require('express');
const mysql = require('mysql2');
const getRoutes = require('./routes/getRoutes');
const postRoutes = require('./routes/postRoutes');
const updateRoutes = require('./routes/updateRoutes');
const deleteRoutes = require('./routes/deleteRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Configuração do banco de dados
const db = require('./db');

// Usando as rotas
app.use('/', getRoutes);
app.use('/', postRoutes);
app.use('/', updateRoutes);
app.use('/', deleteRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
