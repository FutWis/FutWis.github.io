const express = require('express');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Serve the index.html file from the root directory
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Serve static CSS and JavaScript files from their respective directories
app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/styles.css');
});

app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/script.js');
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/favicon.ico');
});

app.get('/futwis.png', (req, res) => {
  res.sendFile(__dirname + '/futwis.png');
});

// Serve player images from a "players" folder
app.use('/players', express.static(__dirname + '/players'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
