const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
    user: 'your_db_user',
    host: 'localhost',
    database: 'your_database_name',
    password: 'your_db_password',
    port: 5433,
});

app.use(bodyParser.json());

// Signup route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, hashedPassword]
        );
        res.status(201).json(newUser.rows[0]);
    } catch (error) {
        res.status(400).json({ error: 'User already exists' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (user.rows.length > 0) {
        const isMatch = await bcrypt.compare(password, user.rows[0].password);
        if (isMatch) {
            // Create and assign a token
            const token = jwt.sign({ id: user.rows[0].id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(403).json({ error: 'Invalid password' });
        }
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

//kindly replace the values in the code with your own database credentials and jwt secret key.
//the DB canbe replaced with noSQL or any other database of your choice.
//The JWT secret key can be generated using a tool like https://www.grc.com/passwords.htm/. 
//The server can be hosted on any cloud platform like Heroku or AWS.