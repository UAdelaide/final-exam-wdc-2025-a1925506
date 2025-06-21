const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();

// Added middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}))

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);


module.exports = app;