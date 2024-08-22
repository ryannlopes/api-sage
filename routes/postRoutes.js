const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa o banco de dados

// Rota para atualizar um usuário existente
router.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  
  let fields = [];
  let values = [];

  if (name) fields.push('NAME = ?'), values.push(name);
  if (email) fields.push('EMAIL = ?'), values.push(email);
  if (password) fields.push('PASSWORD = ?'), values.push(password);

  if (fields.length === 0) return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  const sql = `UPDATE user SET ${fields.join(', ')} WHERE ID = ?`;
  values.push(id);

  db.query(sql, values, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json({ message: 'Usuário atualizado com sucesso' });
  });
});

// Rota para atualizar uma categoria existente
router.put('/category/:id', (req, res) => {
  const { id } = req.params;
  const { id_user, id_icon, name, color } = req.body;
  
  let fields = [];
  let values = [];

  if (id_user) fields.push('ID_USER = ?'), values.push(id_user);
  if (id_icon) fields.push('ID_ICON = ?'), values.push(id_icon);
  if (name) fields.push('NAME = ?'), values.push(name);
  if (color) fields.push('COLOR = ?'), values.push(color);

  if (fields.length === 0) return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  const sql = `UPDATE category SET ${fields.join(', ')} WHERE ID = ?`;
  values.push(id);

  db.query(sql, values, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Categoria não encontrada' });
    res.json({ message: 'Categoria atualizada com sucesso' });
  });
});

// Rota para atualizar um cartão de crédito existente
router.put('/creditcard/:id', (req, res) => {
  const { id } = req.params;
  const { limits, consumed_value, expiration, name, name_color } = req.body;

  let fields = [];
  let values = [];

  if (limits) fields.push('LIMITS = ?'), values.push(limits);
  if (consumed_value) fields.push('CONSUMED_VALUE = ?'), values.push(consumed_value);
  if (expiration) fields.push('EXPIRATION = ?'), values.push(expiration);
  if (name) fields.push('NAME = ?'), values.push(name);
  if (name_color) fields.push('NAME_COLOR = ?'), values.push(name_color);

  if (fields.length === 0) return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  const sql = `UPDATE creditcard SET ${fields.join(', ')} WHERE ID = ?`;
  values.push(id);

  db.query(sql, values, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Cartão de crédito não encontrado' });
    res.json({ message: 'Cartão de crédito atualizado com sucesso' });
  });
});

// Rota para atualizar um objetivo (goal) existente
router.put('/goal/:id', (req, res) => {
  const { id } = req.params;
  const { actual_value, goal_value, id_user } = req.body;

  let fields = [];
  let values = [];

  if (actual_value) fields.push('ACTUAL_VALUE = ?'), values.push(actual_value);
  if (goal_value) fields.push('GOAL_VALUE = ?'), values.push(goal_value);
  if (id_user) fields.push('ID_USER = ?'), values.push(id_user);

  if (fields.length === 0) return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  const sql = `UPDATE goal SET ${fields.join(', ')} WHERE ID = ?`;
  values.push(id);

  db.query(sql, values, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Objetivo não encontrado' });
    res.json({ message: 'Objetivo atualizado com sucesso' });
  });
});

// Rota para atualizar uma transação existente
router.put('/transactions/:id', (req, res) => {
  const { id } = req.params;
  const { value, transaction_date, id_category, id_wallet, id_card, actual_installment, total_installment, is_expense, location, description } = req.body;

  let fields = [];
  let values = [];

  if (value) fields.push('VALUE = ?'), values.push(value);
  if (transaction_date) fields.push('TRANSACTION_DATE = ?'), values.push(transaction_date);
  if (id_category) fields.push('ID_CATEGORY = ?'), values.push(id_category);
  if (id_wallet) fields.push('ID_WALLET = ?'), values.push(id_wallet);
  if (id_card) fields.push('ID_CARD = ?'), values.push(id_card);
  if (actual_installment) fields.push('ACTUAL_INSTALLMENT = ?'), values.push(actual_installment);
  if (total_installment) fields.push('TOTAL_INSTALLMENT = ?'), values.push(total_installment);
  if (is_expense) fields.push('IS_EXPENSE = ?'), values.push(is_expense);
  if (location) fields.push('LOCATION = ?'), values.push(location);
  if (description) fields.push('DESCRIPTION = ?'), values.push(description);

  if (fields.length === 0) return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  const sql = `UPDATE transactions SET ${fields.join(', ')} WHERE ID = ?`;
  values.push(id);

  db.query(sql, values, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Transação não encontrada' });
    res.json({ message: 'Transação atualizada com sucesso' });
  });
});

// Rota para atualizar uma carteira existente
router.put('/wallet/:id', (req, res) => {
  const { id } = req.params;
  const { value, id_user, name } = req.body;

  let fields = [];
  let values = [];

  if (value) fields.push('VALUE = ?'), values.push(value);
  if (id_user) fields.push('ID_USER = ?'), values.push(id_user);
  if (name) fields.push('NAME = ?'), values.push(name);

  if (fields.length === 0) return res.status(400).json({ error: 'Nenhum campo para atualizar' });

  const sql = `UPDATE wallet SET ${fields.join(', ')} WHERE ID = ?`;
  values.push(id);

  db.query(sql, values, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Carteira não encontrada' });
    res.json({ message: 'Carteira atualizada com sucesso' });
  });
});

module.exports = router;