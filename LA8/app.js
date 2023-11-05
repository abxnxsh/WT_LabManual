// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use('/api', taskRoutes);


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
