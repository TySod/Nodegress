const {Client} = require('pg');
require('dotenv').config();

const pool = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
pool.connect().then(() => {
  console.log('Connected to the database successfully');
}).catch(err => {
  console.error('Database connection error:', err.message);
});

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error.message;
    }
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error.message;
    }
    res.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  if (!req.body || !req.body.fname || !req.body.email || !req.body.age) {
    return res.status(400).send('Missing required fields: fname, email, age');
  }
  const { fname, email, age } = req.body;

  pool.query('INSERT INTO users (fname, email, age) VALUES ($1, $2, $3) RETURNING id', [fname, email, age], (error, results) => {
    if (error) {
      throw error.message;
    }
    res.status(201).send(`User added with ID: ${results.rows[0].id}`);
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { fname, email, age } = req.body;

  pool.query(
    'UPDATE users SET fname = $1, email = $2, age = $3 WHERE id = $4',
    [fname, email, age, id],
    (error, results) => {
      if (error) {
        throw error.message;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error.message;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};