const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db/queries');

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.json());
app.get('/', (req, res) => {
  res.json({ info: 'Hello, Welcome to my User API!' });
});

// CRUD API endpoints
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});