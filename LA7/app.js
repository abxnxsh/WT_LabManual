// Import the Express.js module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, this is the root route.');
});

// Define a route for the "/about" URL
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Define a dynamic route that accepts a parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Start the Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
