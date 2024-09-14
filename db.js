const mysql = require('mysql2');

// Configurar a conexão ao banco de dados MySQL, usando variáveis de ambiente
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost', // Render vai definir essa variável
  user: process.env.MYSQL_USER || 'root',      // Render vai definir essa variável
  password: process.env.MYSQL_PASSWORD || '',  // Render vai definir essa variável
  database: process.env.MYSQL_DB || 'sage'     // Render vai definir essa variável
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como id ' + db.threadId);
});

module.exports = db;
