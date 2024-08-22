const express = require('express');
const router = express.Router();
const db = require('../db'); // importar o banco de dados

router.get('/user', (req, res) => {
    const sql = 'SELECT * FROM user';

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM user WHERE ID = ?';

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json(results[0]);
    });
});

router.get('/wallet', (req, res) => {
    const sql = 'SELECT * FROM wallet';
  
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });


router.get('/wallet/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM wallet WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
          return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json(results[0]);
      });
  });

router.get('/transactions', (req, res) => {
    const sql = 'SELECT * FROM transactions';
  
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });


router.get('/transactions/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM transactions WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
          return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json(results[0]);
      });
  });

  router.get('/category', (req, res) => {
    const sql = 'SELECT * FROM category';
  
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

  router.get('/category/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM category WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
          return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json(results[0]);
      });
  });

  router.get('/creditcard', (req, res) => {
    const sql = 'SELECT * FROM creditcard';
  
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

  router.get('/creditcard/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM creditcard WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
          return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json(results[0]);
      });
  });

  router.get('/goal', (req, res) => {
    const sql = 'SELECT * FROM goal';
  
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

  router.get('/goal/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM goal WHERE ID = ?';
  
    db.query(sql, [id], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
          return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json(results[0]);
      });
  });

module.exports = router;