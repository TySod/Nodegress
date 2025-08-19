const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');

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
app.get('/users', async (req, res, next) => {
    try {
        await db.getUsers(req, res);
    } catch (err) {
        next(err);
    }
});
app.get('/users/:id', async (req, res, next) => {
    try {
        await db.getUserById(req, res);
    } catch (err) {
        next(err);
    }
});
app.post('/users', async (req, res, next) => {
    try {
        await db.createUser(req, res);
    } catch (err) {
        next(err);
    }
});
app.put('/users/:id', async (req, res, next) => {
    try {
        await db.updateUser(req, res);
    } catch (err) {
        next(err);
    }
});
app.delete('/users/:id', async (req, res, next) => {
    try {
        await db.deleteUser(req, res);
    } catch (err) {
        next(err);
    }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});