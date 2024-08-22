const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa o banco de dados

// Rota para deletar um usuário existente
router.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM user WHERE ID = ?';

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário deletado com sucesso' });
  });
});

// Rota para deletar um Categoria existente
router.delete('/category/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM category WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Categoria não encontrado' });
      }
      res.json({ message: 'Categoria deletado com sucesso' });
    });
  });

  // Rota para deletar um Cartão de Crédito existente
router.delete('/creditcard/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM creditcard WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Cartão de Crédito não encontrado' });
      }
      res.json({ message: 'Cartão de Crédito deletado com sucesso' });
    });
  });

    // Rota para deletar um Meta existente
router.delete('/goal/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM goal WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Meta não encontrado' });
      }
      res.json({ message: 'Meta deletado com sucesso' });
    });
  });

// Rota para deletar um Meta existente
router.delete('/goal/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM goal WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Meta não encontrado' });
      }
      res.json({ message: 'Meta deletado com sucesso' });
    });
  });

// Rota para deletar um Transação existente
router.delete('/transactions/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM transactions WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Transação não encontrado' });
      }
      res.json({ message: 'Transação deletado com sucesso' });
    });
  });

// Rota para deletar um Carteira existente
router.delete('/wallet/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM wallet WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Carteira não encontrado' });
      }
      res.json({ message: 'Carteira deletado com sucesso' });
    });
  });
  

module.exports = router;
