var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql2/promise');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

let db;

(async () => {
  try {
    // Connect to MySQL without specifying a database
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '' // Set your MySQL root password
    });

    // Now connect to the created database
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'DogWalkService'
    });

  } catch (err) {
    console.error('Error setting up database. Ensure Mysql is running: service mysql start', err);
  }
})();

// Route to return dog info as JSON
app.get('/api/dogs', async (req, res) => {
  try {
    const [dogInfo] = await db.execute('SELECT Dogs.name AS dog_name, Dogs.size, Users.username AS owner_username FROM Dogs INNER JOIN Users ON Dogs.owner_id = Users.user_id;');
    res.json(dogInfo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dog information' });
  }
});

// Route to return open walk requests as JSON
app.get('/api/walkrequests/open', async (req, res) => {
    try {
      const [openreq] = await db.execute('SELECT WalkRequests.request_id, Dogs.name AS dog_name, WalkRequests.requested_time, WalkRequests.duration_minutes, WalkRequests.location, Users.username AS owner_username FROM WalkRequests INNER JOIN Dogs ON Dogs.dog_id = WalkRequests.dog_id INNER JOIN Users ON Users.user_id = Dogs.owner_id WHERE WalkRequests.status = "open"');
      res.json(openreq);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch open walk requests' });
    }
  });

  // Route to return walker summaries as JSON
app.get('/api/walkrequests/open', async (req, res) => {
    try {
      const [walkersummaries] = await db.execute('SELECT Users.username, COUNT(WalkRatings.rating) AS total_ratings, AVG(WalkRatings.rating) AS average_rating, COUNT(WalkRatings.rating_id) AS completed_walks FROM WalkRatings INNER JOIN Users ON WalkRatings.walker_id = Users.user_id WHERE WalkRatings.walker_id = 2;');
      res.json(walkersummaries);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch walker summaries' });
    }
  });

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;