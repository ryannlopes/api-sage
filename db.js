const mysql = require('mysql2');

// Usando a URL de conexão diretamente
const db = mysql.createConnection('mysql://root:PDxSIcSuLnRDNCyNkoAcITJKrFMXWlXU@autorack.proxy.rlwy.net:27279/railway');

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com id ' + db.threadId);
});

module.exports = db;
