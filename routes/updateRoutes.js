const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa o banco de dados

// Rota para atualizar um usuário existente
router.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const sql = 'UPDATE user SET NAME = ?, EMAIL = ?, PASSWORD = ? WHERE ID = ?';

  db.query(sql, [name, email, password, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário atualizado com sucesso' });
  });
});

// Rota para atualizar um Categoria existente
router.put('/category/:id', (req, res) => {
    const { id } = req.params;
    const { id_user, id_icon, name, color } = req.body;
    const sql = 'UPDATE category SET ID_USER = ?, ID_ICON = ?, NAME = ?, COLOR = ? WHERE ID = ?';
  
    db.query(sql, [id_user, id_icon, name, color, id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Categoria não encontrado' });
      }
      res.json({ message: 'Categoria atualizado com sucesso' });
    });
  });

module.exports = router;